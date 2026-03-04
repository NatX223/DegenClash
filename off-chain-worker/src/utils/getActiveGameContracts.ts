import { ethers } from 'ethers';
import { firebaseService } from '../services/firebaseService';
import marketGameABI from '../abi/marketGame.json';

interface BTCMarketDocument {
  id: string;
  address: string;
}

/**
 * Gets all documents from BTCMarkets collection and returns addresses of contracts 
 * where getGameStatus() returns 2 (active games)
 * @returns Promise<string[]> Array of contract addresses with active games
 */
export async function getActiveGameContracts(): Promise<string[]> {
  try {
    // Get RPC URL from environment
    const rpcUrl = process.env.CREDITCOIN_RPC_URL;
    if (!rpcUrl) {
      throw new Error('CREDITCOIN_RPC_URL not found in environment variables');
    }

    // Initialize provider
    const provider = new ethers.JsonRpcProvider(rpcUrl);

    // Get all documents from BTCMarkets collection
    const btcMarkets = await firebaseService.getAllDocuments<BTCMarketDocument>('BTCMarkets');
    
    if (!btcMarkets || btcMarkets.length === 0) {
      console.log('No documents found in BTCMarkets collection');
      return [];
    }

    // Array to store addresses of active games
    const activeGameAddresses: string[] = [];

    // Check each contract's game status
    for (const market of btcMarkets) {
      if (!market.address) {
        console.warn(`Document ${market.id} missing address field`);
        continue;
      }

      try {
        // Create contract instance
        const contract = new ethers.Contract(market.address, [marketGameABI], provider);
        
        // Call getGameStatus function
        const gameStatus = await contract.getGameStatus();
        
        // Convert to number and check if status is 2 (active)
        const statusNumber = Number(gameStatus);
        
        if (statusNumber === 2) {
          activeGameAddresses.push(market.address);
          console.log(`Active game found at address: ${market.address}`);
        }
      } catch (error) {
        console.error(`Error checking game status for address ${market.address}:`, error);
        // Continue with next address instead of failing completely
      }
    }

    console.log(`Found ${activeGameAddresses.length} active games out of ${btcMarkets.length} total contracts`);
    return activeGameAddresses;

  } catch (error) {
    console.error('Error in getActiveGameContracts:', error);
    throw error;
  }
}