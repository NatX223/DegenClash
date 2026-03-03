'use client';

import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount, useBalance, useDisconnect } from 'wagmi';
import { formatEther } from 'viem';
import { creditcoinTestnet } from '../lib/wagmi';

interface ConnectWalletButtonProps {
  className?: string;
  variant?: 'default' | 'header' | 'battle';
}

export function ConnectWalletButton({ 
  className = '', 
  variant = 'default' 
}: ConnectWalletButtonProps) {
  const { address, isConnected } = useAccount();
  const { data: balance } = useBalance({
    address: address,
  });
  const { disconnect } = useDisconnect();

  const getButtonStyles = () => {
    const baseStyles = "font-bold rounded-lg transition-all";
    
    switch (variant) {
      case 'header':
        return `${baseStyles} bg-primary text-background-dark px-4 py-2 text-sm hover:scale-105 active:scale-95`;
      case 'battle':
        return `${baseStyles} bg-primary text-background-dark px-4 py-2 text-sm hover:scale-105 transition-transform`;
      default:
        return `${baseStyles} bg-primary hover:bg-primary/90 text-background-dark py-4 px-8 text-base hover:scale-105 shadow-[0_0_20px_rgba(145,238,145,0.3)]`;
    }
  };

  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        authenticationStatus,
        mounted,
      }) => {
        // Note: If your app doesn't use authentication, you
        // can remove all 'authenticationStatus' checks
        const ready = mounted && authenticationStatus !== 'loading';
        const connected =
          ready &&
          account &&
          chain &&
          (!authenticationStatus ||
            authenticationStatus === 'authenticated');

        return (
          <div
            {...(!ready && {
              'aria-hidden': true,
              'style': {
                opacity: 0,
                pointerEvents: 'none',
                userSelect: 'none',
              },
            })}
            className={className}
          >
            {(() => {
              if (!connected) {
                return (
                  <button
                    onClick={openConnectModal}
                    type="button"
                    className={getButtonStyles()}
                  >
                    Connect to Creditcoin
                  </button>
                );
              }

              // Check if user is on wrong network (not Creditcoin Testnet)
              if (chain.id !== creditcoinTestnet.id) {
                return (
                  <button
                    onClick={openChainModal}
                    type="button"
                    className={`${getButtonStyles()} bg-yellow-500 hover:bg-yellow-600 text-black`}
                  >
                    Switch to Creditcoin
                  </button>
                );
              }

              return (
                <div className="flex items-center gap-2">
                  {variant !== 'header' && balance && (
                    <div className="text-sm text-slate-400">
                      {parseFloat(formatEther(balance.value)).toFixed(4)} tCTC
                    </div>
                  )}
                  
                  <button
                    onClick={openChainModal}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors border border-primary/20"
                    type="button"
                  >
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                    <span className="text-sm font-medium text-primary">Creditcoin</span>
                  </button>

                  <button
                    onClick={openAccountModal}
                    type="button"
                    className={getButtonStyles()}
                  >
                    {account.displayName}
                    {account.displayBalance
                      ? ` (${account.displayBalance})`
                      : ''}
                  </button>
                </div>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
}