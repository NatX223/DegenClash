import dotenv from 'dotenv';
import { Contract, ethers, InterfaceAbi } from 'ethers';

import marketUscAbi from '../abi/MarketUSC.json';
import {
  generateProofFor,
  computeGasLimitForResolver,
  submitProofToResolver,
  isValidContractAddress,
  isValidPrivateKey,
} from '../utils';

dotenv.config({ override: true });

export const handleMarkets = async (marketAddresses: string[], transactionHash: string) => {
  for (let index = 0; index < marketAddresses.length; index++) {
    await handleMarket(marketAddresses[index], transactionHash);
    console.log('Processed market:', marketAddresses[index]);
    await new Promise(resolve => setTimeout(resolve, 3000));
  }
}

const handleMarket = async (marketUSCAddress: string, transactionHash: string) => {
  console.log('marketUSC:', marketUSCAddress);
  console.log('transactionHash:', transactionHash);

  // Prover API URL
  const proverApiUrl = process.env.PROVER_API_URL;

  if (!proverApiUrl) {
    throw new Error('PROVER_API_URL environment variable is not configured or invalid');
  }

  // Source chain contract address (ERC20 contract on source chain) where tokens are burned
  const sourceChainAggregatorAddress = process.env.SOURCE_CHAIN_BTC_AGGREGATOR_ADDRESS;
  const sourceChainKey = Number(process.env.SOURCE_CHAIN_KEY);
  const sourceChainRpcUrl = process.env.SOURCE_CHAIN_RPC_URL;

  // USC contract address on Creditcoin
  const ccNextRpcUrl = process.env.CREDITCOIN_RPC_URL;
  const ccNextWalletPrivateKey = process.env.CREDITCOIN_WALLET_PRIVATE_KEY;

  if (!isValidContractAddress(sourceChainAggregatorAddress)) {
    throw new Error('SOURCE_CHAIN_BTC_AGGREGATOR_ADDRESS environment variable is not configured or invalid');
  }

  if (!isValidContractAddress(marketUSCAddress)) {
    throw new Error('USC_MAARKET_CONTRACT_ADDRESS is invalid');
  }

  if (!sourceChainRpcUrl) {
    throw new Error('SOURCE_CHAIN_RPC_URL environment variable is not configured or invalid');
  }

  if (!ccNextRpcUrl) {
    throw new Error('CREDITCOIN_RPC_URL environment variable is not configured or invalid');
  }

  if (!isValidPrivateKey(ccNextWalletPrivateKey)) {
    throw new Error('CREDITCOIN_WALLET_PRIVATE_KEY environment variable is not configured or invalid');
  }

  const ethProvider = new ethers.JsonRpcProvider(sourceChainRpcUrl);

  // Create connection to minter contract on Creditcoin USC chain
  const ccProvider = new ethers.JsonRpcProvider(ccNextRpcUrl);
  const wallet = new ethers.Wallet(ccNextWalletPrivateKey!, ccProvider);
  const marketUscContract = new Contract(marketUSCAddress!, marketUscAbi as unknown as InterfaceAbi, wallet);

  // Generate proof for the burn transaction
  const proofResult = await generateProofFor(transactionHash, sourceChainKey, proverApiUrl, ccProvider, ethProvider);

  if (proofResult.success) {
    const proofData = proofResult.data!;
    try {
      const gasLimit = await computeGasLimitForResolver(ccProvider, marketUscContract, proofData, wallet.address);
      const response = await submitProofToResolver(marketUscContract, proofData, gasLimit);
      console.log('Proof submitted: ', response.hash);
    } catch (error) {
      console.error('Error submitting proof: ', error);
    }
  } else {
    console.error(`Failed to generate proof: ${proofResult.error}`);
  }

  console.log('function complete.');
};
