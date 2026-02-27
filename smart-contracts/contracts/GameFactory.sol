// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/ReentrancyGuard.sol";
import "@openzeppelin/contracts/utils/Pausable.sol";
import "./Game.sol";

/**
 * @title GameFactory
 * @dev Factory contract for deploying PricePredictionGame contracts
 */
contract GameFactory is Ownable, ReentrancyGuard, Pausable {
    
    // Struct to store game information
    struct GameInfo {
        address gameAddress;
        address creator;
        uint8 mode;
        uint256 startTime;
        uint256 endTime;
        uint256 targetPrice;
        uint256 stakeAmount;
        bool isActive;
    }
    
    // State variables
    mapping(uint256 => GameInfo) public games;
    mapping(address => uint256[]) public userGames;
    mapping(address => bool) public authorizedResolvers;
    
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
    
    // Modifiers
    modifier onlyAuthorizedResolver() {
        require(authorizedResolvers[msg.sender], "Not an authorized resolver");
        _;
    }
    
    /**
     * @dev Constructor
     */
    constructor() Ownable(msg.sender) {
        gameCounter = 0;
        
        // Owner is automatically an authorized resolver
        authorizedResolvers[msg.sender] = true;
    }   
 
    /**
     * @dev Creates a new PricePredictionGame contract
     * @param _mode The mode of the game - above(1) or below(0)
     * @param _startTime When the game request expires if no one joins
     * @param _endTime When the game ends (timestamp)
     * @param _targetPrice Target price for the prediction
     * @param _stakeAmount The stake amount required to join the game
     * @param _resolver Address authorized to resolve the game
     * @return gameId The ID of the created game
     * @return gameAddress The address of the deployed game contract
     */
    function createGame(
        uint8 _mode,
        uint256 _startTime,
        uint256 _endTime,
        uint256 _targetPrice,
        uint256 _stakeAmount,
        address _resolver
    ) external payable nonReentrant whenNotPaused returns (uint256 gameId, address gameAddress) {
        require(_mode <= 1, "Invalid mode: must be 0 or 1");
        require(_startTime > block.timestamp, "Start time must be in future");
        require(_endTime > _startTime, "End time must be after start time");
        require(_targetPrice > 0, "Target price must be greater than 0");
        require(_stakeAmount > 0, "Stake amount must be greater than 0");
        require(_resolver != address(0), "Resolver cannot be zero address");
        require(authorizedResolvers[_resolver], "Resolver not authorized");
        
        // Deploy new game contract
        PricePredictionGame newGame = new PricePredictionGame(
            _mode,
            _startTime,
            _endTime,
            _targetPrice,
            _resolver,
            _stakeAmount
        );
        
        gameId = gameCounter++;
        gameAddress = address(newGame);
        
        // Store game information
        games[gameId] = GameInfo({
            gameAddress: gameAddress,
            creator: msg.sender,
            mode: _mode,
            startTime: _startTime,
            endTime: _endTime,
            targetPrice: _targetPrice,
            stakeAmount: _stakeAmount,
            isActive: true
        });
        
        // Add to user's games list
        userGames[msg.sender].push(gameId);
        
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
     * @dev Authorize or deauthorize a resolver
     * @param _resolver Address of the resolver
     * @param _authorized Whether to authorize or deauthorize
     */
    function setResolverAuthorization(address _resolver, bool _authorized) external onlyOwner {
        require(_resolver != address(0), "Resolver cannot be zero address");
        authorizedResolvers[_resolver] = _authorized;
        emit ResolverAuthorized(_resolver, _authorized);
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
    
    // View functions
    
    /**
     * @dev Get game information by ID
     * @param _gameId The game ID
     * @return Game information
     */
    function getGame(uint256 _gameId) external view returns (GameInfo memory) {
        require(_gameId < gameCounter, "Game does not exist");
        return games[_gameId];
    }
    
    /**
     * @dev Get all games created by a user
     * @param _user User address
     * @return Array of game IDs
     */
    function getUserGames(address _user) external view returns (uint256[] memory) {
        return userGames[_user];
    }
    
    /**
     * @dev Get active games in a range
     * @param _start Start index
     * @param _end End index
     * @return gameIds Array of game IDs
     * @return gameInfos Array of game information
     */
    function getActiveGames(uint256 _start, uint256 _end) 
        external 
        view 
        returns (uint256[] memory gameIds, GameInfo[] memory gameInfos) 
    {
        require(_start <= _end, "Invalid range");
        require(_end < gameCounter, "End index out of bounds");
        
        // Count active games in range
        uint256 activeCount = 0;
        for (uint256 i = _start; i <= _end; i++) {
            if (games[i].isActive) {
                activeCount++;
            }
        }
        
        // Populate arrays
        gameIds = new uint256[](activeCount);
        gameInfos = new GameInfo[](activeCount);
        
        uint256 index = 0;
        for (uint256 i = _start; i <= _end; i++) {
            if (games[i].isActive) {
                gameIds[index] = i;
                gameInfos[index] = games[i];
                index++;
            }
        }
        
        return (gameIds, gameInfos);
    }
    
    /**
     * @dev Get total number of games created
     * @return Total game count
     */
    function getTotalGames() external view returns (uint256) {
        return gameCounter;
    }
    
    /**
     * @dev Check if an address is an authorized resolver
     * @param _resolver Address to check
     * @return Whether the address is authorized
     */
    function isAuthorizedResolver(address _resolver) external view returns (bool) {
        return authorizedResolvers[_resolver];
    }
}