'use client';

import { useWallet } from '../hooks/useWallet';
import { useChainId, useChains } from 'wagmi';
import { NetworkSwitcher } from './NetworkSwitcher';
import { creditcoinTestnet } from '../lib/wagmi';

export default function WalletStatus() {
  const { address, shortAddress, isConnected, formattedBalance, isOnCreditcoinTestnet } = useWallet();
  const chainId = useChainId();
  const chains = useChains();
  const currentChain = chains.find(chain => chain.id === chainId);

  if (!isConnected) {
    return (
      <div className="glass-panel p-4 rounded-xl border border-red-500/20">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse"></div>
          <div>
            <p className="text-sm font-bold text-white">Wallet Disconnected</p>
            <p className="text-xs text-slate-400">Connect your wallet to start trading on Creditcoin</p>
          </div>
        </div>
      </div>
    );
  }

  // Show network switcher if not on Creditcoin Testnet
  if (!isOnCreditcoinTestnet) {
    return <NetworkSwitcher />;
  }

  return (
    <div className="glass-panel p-4 rounded-xl border border-primary/20">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-primary animate-pulse"></div>
          <div>
            <p className="text-sm font-bold text-white">Connected</p>
            <p className="text-xs text-slate-400">{shortAddress}</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-sm font-bold text-primary">{formattedBalance}</p>
          <p className="text-xs text-slate-400">Creditcoin Testnet</p>
        </div>
      </div>
    </div>
  );
}