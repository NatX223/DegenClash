// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/utils/ReentrancyGuard.sol";
import "@openzeppelin/contracts/utils/Pausable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/math/Math.sol";

/**
 * @title PricePredictionGame
 * @dev A secure price prediction game contract where two players predict asset prices
 */
contract PricePredictionGame is ReentrancyGuard, Pausable, Ownable {

    // Game state variables
    uint256 public startTime;
    uint256 public endTime;
    uint256 public targetPrice;
    uint256 public endPrice;
    
    address public resolver;
    address public player1;
    address public player2;
    
    uint8 public mode;
    bool public player1Option;
    bool public player2Option;
    
    // Additional state variables for game mechanics
    uint256 public stakeAmount;
    uint256 public totalPrize;
    bool public gameResolved;
    address public winner;
    
    // Events
    event GameCreated(uint8 mode, uint256 startTime, uint256 endTime, uint256 targetPrice, uint256 stakeAmount);
    event PlayerJoined(address indexed player, bool predictedPrice);
    event GameResolved(address indexed winner, uint256 endPrice, uint256 prize);
    event PrizeWithdrawn(address indexed winner, uint256 amount);
    
    // Modifiers
    modifier onlyResolver() {
        require(msg.sender == resolver, "Only resolver can call this function");
        _;
    }
    
    modifier gameNotStarted() {
        require(block.timestamp < startTime, "Game has already started");
        _;
    }
    
    modifier gameActive() {
        require(block.timestamp >= startTime && block.timestamp <= endTime, "Game is not active");
        _;
    }
    
    modifier gameEnded() {
        require(block.timestamp >= endTime, "Game has not ended yet");
        _;
    }
    
    modifier notResolved() {
        require(!gameResolved, "Game already resolved");
        _;
    }
    
    /**
     * @dev Constructor to initialize the game
     * @param _mode The mode of the game - above(1) or below(0)
     * @param _startTime When the game request expires if no one joins and when it officially starts when another player jpins 
     * @param _endTime When the game ends (timestamp)
     * @param _targetPrice Initial price of the asset
     * @param _resolver Resolver address authorized to resolve the game
     * @param _stakeAmount The stake amount for the game which is required to join the game
     */
    constructor(
        uint8 _mode,
        uint256 _startTime,
        uint256 _endTime,
        uint256 _targetPrice,
        address _resolver,
        uint256 _stakeAmount
    ) Ownable(msg.sender) {
        require(_startTime > block.timestamp, "Start time must be in the future");
        require(_targetPrice > 0, "Target price must be greater than 0");
        require(_resolver != address(0), "Resolver cannot be zero address");
        require(_stakeAmount > 0, "Stake amount fee must be greater than 0");
        
        mode = _mode;
        startTime = _startTime;
        endTime = _endTime;
        targetPrice = _targetPrice;
        resolver = _resolver;  
        stakeAmount = _stakeAmount;
        
        emit GameCreated(_mode, _startTime, _endTime, _targetPrice, _stakeAmount);
    }    
   
    /** 
     * @dev Allows a player to join the game by making a price prediction
     * @param option The player's predicted option
    */
    function joinGame(bool option) 
        external 
        payable 
        nonReentrant 
        whenNotPaused 
        gameNotStarted 
    {
        require(msg.value == stakeAmount, "Amount must be the stake amount");
        require(player1 == address(0) || player2 == address(0), "Game is full");
        require(msg.sender != player1 && msg.sender != player2, "Player already joined");
        
        if (player1 == address(0)) {
            player1 = msg.sender;
            player1Option = option;
            emit PlayerJoined(msg.sender, option);
        } else {
            require(option != player1Option, "You Cannot select the same option as your oponent");
            player2 = msg.sender;
            player2Option = option;
            emit PlayerJoined(msg.sender, option);
        }
        
        totalPrize = totalPrize + msg.value;
    }
    
    /**
     * @dev Resolves the game by setting the end price and determining winner
     * @param _endPrice The final price of the asset
     */
    function resolveGame(uint256 _endPrice) 
        external 
        onlyResolver 
        gameEnded 
        notResolved 
        whenNotPaused 
    {
        require(player1 != address(0) && player2 != address(0), "Both players must have joined");
        
        endPrice = _endPrice;
        gameResolved = true;
        
        bool priceAboveTarget = _endPrice > targetPrice;
        
        winner = (priceAboveTarget == player1Option) ? player1 : player2;

        (bool success,) = payable(winner).call{value: totalPrize}("");
        require(success, "Prize transfer failed");
        
        emit GameResolved(winner, _endPrice, totalPrize);
    }
    
    /**
     * @dev Emergency function to cancel game and refund players (only before resolution)
     */
    function cancelGame() external onlyOwner notResolved {
        require(player1 != address(0) || player2 != address(0), "No players to refund");
        
        uint256 refundAmount = stakeAmount;
        
        if (player1 != address(0)) {
            (bool success1, ) = payable(player1).call{value: refundAmount}("");
            require(success1, "Refund to player1 failed");
        }
        
        if (player2 != address(0)) {
            (bool success2, ) = payable(player2).call{value: refundAmount}("");
            require(success2, "Refund to player2 failed");
        }
        
        totalPrize = 0;
        gameResolved = true;
    }
    
    /**
     * @dev Pause the contract (emergency function)
     */
    function pause() external onlyOwner {
        _pause();
    }
    
    /**
     * @dev Unpause the contract
     */
    function unpause() external onlyOwner {
        _unpause();
    }
    
    /**
     * @dev Update resolver address (only owner)
     */
    function updateResolver(address _newResolver) external onlyOwner {
        require(_newResolver != address(0), "New resolver cannot be zero address");
        resolver = _newResolver;
    }
    
    // View functions
    function getGameInfo() external view returns (
        uint256 _startTime,
        uint256 _endTime,
        uint256 _targetPrice,
        uint256 _endPrice,
        address _resolver,
        uint256 _stakeAmount,
        bool _gameResolved
    ) {
        return (startTime, endTime, targetPrice, endPrice, resolver, stakeAmount, gameResolved);
    }
    
    function getPlayers() external view returns (
        address _player1,
        address _player2,
        bool _player1Price,
        bool _player2Price,
        address _winner
    ) {
        return (player1, player2, player1Option, player2Option, winner);
    }
    
    function getGameStatus() external view returns (string memory) {
        if (block.timestamp < startTime) {
            return "Not Started";
        } else if (block.timestamp <= endTime) {
            return "Active";
        } else if (!gameResolved) {
            return "Ended - Awaiting Resolution";
        } else {
            return "Resolved";
        }
    }
}