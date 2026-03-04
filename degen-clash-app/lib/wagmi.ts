import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import {
  arbitrum,
  base,
  mainnet,
  optimism,
  polygon,
  sepolia,
} from 'wagmi/chains';
import { defineChain } from 'viem';

// Define Creditcoin Testnet as a custom chain
const creditcoinTestnet = defineChain({
  id: 102036,
  name: 'Creditcoin Testnet',
  nativeCurrency: {
    decimals: 18,
    name: 'Creditcoin Testnet',
    symbol: 'tCTC',
  },
  rpcUrls: {
    default: {
      http: ['https://rpc.usc-testnet2.creditcoin.network'],
    },
  },
  blockExplorers: {
    default: {
      name: 'Creditcoin Testnet Explorer',
      url: 'https://creditcoin-testnet.blockscout.com',
    },
  },
  testnet: true,
});

export const config = getDefaultConfig({
  appName: 'DegenClash',
  projectId: process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID || 'YOUR_PROJECT_ID',
  chains: [
    creditcoinTestnet, // Primary chain - Creditcoin Testnet
    mainnet,
    polygon,
    optimism,
    arbitrum,
    base,
    ...(process.env.NODE_ENV === 'development' ? [sepolia] : []),
  ],
  ssr: true,
});

// Export individual chains for easy access
export { creditcoinTestnet, mainnet, polygon, optimism, arbitrum, base, sepolia };