// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/ReentrancyGuard.sol";
import "@openzeppelin/contracts/utils/Pausable.sol";
import "./Game.sol";
import "./USC/MarketUSC.sol";

/**
 * @title GameFactory
 * @dev Factory contract for deploying PricePredictionGame contracts
 */
contract GameFactory is Ownable, ReentrancyGuard, Pausable {    
    uint256 public gameCounter;
    
    // Events
    event GameCreated(
        uint256 indexed gameId,
        address indexed gameAddress,
        address indexed creator,
        uint8 mode,
        uint256 startTime,
        uint256 endTime,
        uint256 targetPrice,
        uint256 stakeAmount
    );
    
    event ResolverAuthorized(address indexed resolver, bool authorized);
    
    /**
     * @dev Constructor
     */
    constructor() Ownable(msg.sender) {}   
 
    /**
     * @dev Creates a new PricePredictionGame contract
     * @param _mode The mode of the game - above(1) or below(0)
     * @param _startTime When the game request expires if no one joins
     * @param _endTime When the game ends (timestamp)
     * @param _targetPrice Target price for the prediction
     * @param _stakeAmount The stake amount required to join the game
     * @return gameId The ID of the created game
     * @return gameAddress The address of the deployed game contract
     */
    function createGame(
        uint8 _mode,
        uint256 _startTime,
        uint256 _endTime,
        uint256 _targetPrice,
        uint256 _stakeAmount
    ) external payable nonReentrant whenNotPaused returns (uint256 gameId, address gameAddress) {
        require(_mode <= 1, "Invalid mode: must be 0 or 1");
        require(_startTime > block.timestamp, "Start time must be in future");
        require(_endTime > _startTime, "End time must be after start time");
        require(_targetPrice > 0, "Target price must be greater than 0");
        require(_stakeAmount > 0, "Stake amount must be greater than 0");
        
        // Deploy new marketUSC for getting oracle prices
        MarketUSC newMarketUSC = new MarketUSC();
        address marketUSCAddress = address(newMarketUSC);

        // Deploy new game contract
        PricePredictionGame newGame = new PricePredictionGame(
            _mode,
            _startTime,
            _endTime,
            _targetPrice,
            marketUSCAddress,
            _stakeAmount
        );
        
        gameId = gameCounter++;
        gameAddress = address(newGame);

        newMarketUSC.setMarket(gameAddress);
        
        emit GameCreated(
            gameId,
            gameAddress,
            msg.sender,
            _mode,
            _startTime,
            _endTime,
            _targetPrice,
            _stakeAmount
        );
        
        return (gameId, gameAddress);
    }  

    /**
     * @dev Pause the factory
     */
    function pause() external onlyOwner {
        _pause();
    }
    
    /**
     * @dev Unpause the factory
     */
    function unpause() external onlyOwner {
        _unpause();
    }
}