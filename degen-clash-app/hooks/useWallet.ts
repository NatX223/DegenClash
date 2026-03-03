'use client';

import { useAccount, useBalance, useDisconnect, useChainId } from 'wagmi';
import { formatEther } from 'viem';
import { creditcoinTestnet } from '../lib/wagmi';

export function useWallet() {
  const { address, isConnected, isConnecting, isDisconnected } = useAccount();
  const chainId = useChainId();
  const { data: balance, isLoading: isBalanceLoading } = useBalance({
    address: address,
  });
  const { disconnect } = useDisconnect();

  // Check if user is on Creditcoin Testnet
  const isOnCreditcoinTestnet = chainId === creditcoinTestnet.id;

  const formattedBalance = balance 
    ? `${parseFloat(formatEther(balance.value)).toFixed(4)} ${balance.symbol}`
    : isOnCreditcoinTestnet ? '0.0000 tCTC' : '0.0000 ETH';

  const shortAddress = address 
    ? `${address.slice(0, 6)}...${address.slice(-4)}`
    : '';

  return {
    address,
    shortAddress,
    isConnected,
    isConnecting,
    isDisconnected,
    balance,
    formattedBalance,
    isBalanceLoading,
    disconnect,
    chainId,
    isOnCreditcoinTestnet,
  };
}