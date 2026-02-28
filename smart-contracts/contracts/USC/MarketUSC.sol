// SPDX-License-Identifier: MIT
pragma solidity ^0.8.23;

import {EvmV1Decoder} from "./EvmV1Decoder.sol";
import {INativeQueryVerifier, NativeQueryVerifierLib} from "./VerifierInterface.sol";
import "../IGame.sol";

contract MarketUSC {
    /// @notice The Native Query Verifier precompile instance
    /// @dev Address: 0x0000000000000000000000000000000000000FD2 (4050 decimal)
    INativeQueryVerifier public immutable VERIFIER;

    address public marketContract;

    // Chainlink price feed AnswerUpdated event signature: keccak256("AnswerUpdated(index_topic_1 int256 current, index_topic_2 uint256 roundId, uint256 updatedAt)")
    bytes32 public constant ANSWER_UPDATED_SIGNATURE =
        0x0559884fd3a460db3073b7fc896cc77986f16e378210ded43186175bf646fc5f;

    event MarketChecked(address indexed market, uint256 indexed price);

    mapping(bytes32 => bool) public processedQueries;

    constructor() {
        // Get the precompile instance using the helper library
        VERIFIER = NativeQueryVerifierLib.getVerifier();
    }

    // process pricefeed logs
    function _processAnswerLogs(EvmV1Decoder.LogEntry[] memory answerUpdatedLogs)
        internal
        pure
        returns (uint256 answer)
    {
        require(answerUpdatedLogs.length > 0, "No answer updated logs");
        EvmV1Decoder.LogEntry memory log = answerUpdatedLogs[0];

        require(log.topics.length == 3, "Invalid AnswerUpdated topics count");
        require(log.topics[0] == ANSWER_UPDATED_SIGNATURE, "Not AnswerUpdated event");

        answer = uint256(log.topics[1]);

        return answer;
    }

    function _verifyProof(
        uint64 chainKey,
        uint64 blockHeight,
        bytes calldata encodedTransaction,
        bytes32 merkleRoot,
        INativeQueryVerifier.MerkleProofEntry[] calldata siblings,
        bytes32 lowerEndpointDigest,
        bytes32[] calldata continuityRoots
    ) internal returns (bool verified) {
        INativeQueryVerifier.MerkleProof memory merkleProof =
            INativeQueryVerifier.MerkleProof({root: merkleRoot, siblings: siblings});

        INativeQueryVerifier.ContinuityProof memory continuityProof =
            INativeQueryVerifier.ContinuityProof({lowerEndpointDigest: lowerEndpointDigest, roots: continuityRoots});

        // Verify inclusion proof
        verified = VERIFIER.verifyAndEmit(chainKey, blockHeight, encodedTransaction, merkleProof, continuityProof);

        return verified;
    }

    // validate transaction contents
    function _validateTransactionContents(bytes memory encodedTransaction) internal pure returns (uint256 price) {
        // Validate transaction type
        uint8 txType = EvmV1Decoder.getTransactionType(encodedTransaction);
        require(EvmV1Decoder.isValidTransactionType(txType), "Unsupported transaction type");

        // Decode and validate receipt status
        EvmV1Decoder.ReceiptFields memory receipt = EvmV1Decoder.decodeReceiptFields(encodedTransaction);
        require(receipt.receiptStatus == 1, "Transaction did not succeed");

        // Find answer updated events and validate
        EvmV1Decoder.LogEntry[] memory answerLogs =
            EvmV1Decoder.getLogsByEventSignature(receipt, ANSWER_UPDATED_SIGNATURE);
        require(answerLogs.length > 0, "No answer updated events found");

        // Check if the answer update is valid
        uint256 _price = _processAnswerLogs(answerLogs);

        return _price;
    }

    function setMarket(address market) external {
        require(market != address(0), "Market address must be a valid address");
        require(marketContract == address(0), "Market address already set");
        marketContract = market;
    }

    // calll resolve game
    function resolveMarket(
        uint64 chainKey,
        uint64 blockHeight,
        bytes calldata encodedTransaction,
        bytes32 merkleRoot,
        INativeQueryVerifier.MerkleProofEntry[] calldata siblings,
        bytes32 lowerEndpointDigest,
        bytes32[] calldata continuityRoots
    ) external returns (bool success) {
        // Calculate transaction index from merkle proof path
        INativeQueryVerifier.MerkleProof memory merkle_proof = INativeQueryVerifier.MerkleProof ({
            root: merkleRoot,
            siblings: siblings
        });
        uint256 transactionIndex = VERIFIER.calculateTxIndex(merkle_proof);

        // Check if the query has already been processed
        bytes32 txKey;
        {
            assembly {
                let ptr := mload(0x40)
                mstore(ptr, chainKey)
                mstore(add(ptr, 32), shl(192, blockHeight))
                mstore(add(ptr, 40), transactionIndex)
                txKey := keccak256(ptr, 72)
            }
            require(!processedQueries[txKey], "Query already processed");
        }

        // First we verify the proof
        bool verified = _verifyProof(
            chainKey, blockHeight, encodedTransaction, merkleRoot, siblings, lowerEndpointDigest, continuityRoots
        );
        require(verified, "Verification failed");

        // Mark the query as processed
        processedQueries[txKey] = true;

        // Next we validate the transaction contents
        uint256 price = _validateTransactionContents(encodedTransaction);

        // call contract to resolve market
        IGame(marketContract).resolveGame(price);
        emit MarketChecked(marketContract, price);

        return true;
    }
}