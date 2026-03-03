'use client';

import { useSwitchChain, useChainId } from 'wagmi';
import { creditcoinTestnet } from '../lib/wagmi';

export function NetworkSwitcher() {
  const { switchChain } = useSwitchChain();
  const chainId = useChainId();

  const isOnCreditcoinTestnet = chainId === creditcoinTestnet.id;

  if (isOnCreditcoinTestnet) {
    return (
      <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-primary/10 border border-primary/20">
        <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
        <span className="text-sm font-medium text-primary">Creditcoin Testnet</span>
      </div>
    );
  }

  return (
    <div className="glass-panel p-4 rounded-xl border border-yellow-500/20">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-yellow-500 animate-pulse"></div>
          <div>
            <p className="text-sm font-bold text-white">Wrong Network</p>
            <p className="text-xs text-slate-400">Switch to Creditcoin Testnet to use DegenClash</p>
          </div>
        </div>
        <button
          onClick={() => switchChain({ chainId: creditcoinTestnet.id })}
          className="px-4 py-2 bg-primary text-background-dark font-bold text-sm rounded-lg hover:bg-primary/90 transition-colors"
        >
          Switch Network
        </button>
      </div>
    </div>
  );
}