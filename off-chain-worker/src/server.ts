import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { ethers } from 'ethers';
import aggregatorAbi from './abi/Aggregator.json';
import admin from 'firebase-admin';
import { getFirestore } from 'firebase-admin/firestore';
import { getActiveGameContracts } from './utils/getActiveGameContracts';
import { handleMarkets } from './services/handler';

dotenv.config();

let CREDENTIALS;
try {
    const credBase64 = process.env.CRED;
    if (!credBase64) {
        throw new Error('CRED environment variable is not set');
    }

    CREDENTIALS = JSON.parse(
        Buffer.from(credBase64, 'base64').toString('utf-8')
    );
} catch (error) {
    console.error('❌ Failed to parse Firebase credentials:', error);
    process.exit(1);
}

admin.initializeApp({
    credential: admin.credential.cert(CREDENTIALS),
});

// Initialize Firestore
export const db = getFirestore();

// Create Express app
const app = express();
const PORT = process.env.PORT || 3300;

// Basic middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const SOURCE_RPC_URL = process.env.SOURCE_CHAIN_RPC_URL;
const provider = new ethers.JsonRpcProvider(SOURCE_RPC_URL);
const AGGREGATOR_ADDRESS = process.env.BTC_USD_AGGREGATOR_ADDRESS!;

const aggregatorContract = new ethers.Contract(AGGREGATOR_ADDRESS, aggregatorAbi, provider);

aggregatorContract.on("AnswerUpdated", async (current, roundId, updatedAt, event) => {
  console.log(current, roundId, updatedAt, event);
  
  const markets = await getActiveGameContracts();
  await handleMarkets(markets, event.log.transactionHash);
});

// Basic route
app.get('/', (req, res) => {
    res.json({
        message: 'Server is running',
        timestamp: new Date().toISOString()
    });
});
// 404 handler
app.use('*', (req, res) => {
    res.status(404).json({
        success: false,
        error: 'Route not found'
    });
});

app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
    console.log(`📊 Health check: http://localhost:${PORT}/health`);
});

export default app;