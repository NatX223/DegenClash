'use client';

interface BattleHeaderProps {
  asset: {
    pair: string;
    price: string;
  };
  timeRemaining: string;
  onlineUsers: number;
}

export default function BattleHeader({ asset, timeRemaining, onlineUsers }: BattleHeaderProps) {
  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-primary/10 px-6 py-4 glass sticky top-0 z-50">
      <div className="flex items-center gap-4">
        <div className="w-8 h-8 text-primary">
          <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
            <path 
              d="M8.57829 8.57829C5.52816 11.6284 3.451 15.5145 2.60947 19.7452C1.76794 23.9758 2.19984 28.361 3.85056 32.3462C5.50128 36.3314 8.29667 39.7376 11.8832 42.134C15.4698 44.5305 19.6865 45.8096 24 45.8096C28.3135 45.8096 32.5302 44.5305 36.1168 42.134C39.7033 39.7375 42.4987 36.3314 44.1494 32.3462C45.8002 28.361 46.2321 23.9758 45.3905 19.7452C44.549 15.5145 42.4718 11.6284 39.4217 8.57829L24 24L8.57829 8.57829Z" 
              fill="currentColor"
            />
          </svg>
        </div>
        <h2 className="text-xl font-bold tracking-tight">
          DegenClash <span className="text-primary">Arena</span>
        </h2>
      </div>
      
      <div className="flex flex-1 justify-center items-center gap-12">
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-slate-400">{asset.pair}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
          </div>
          <div className="text-2xl font-bold text-primary neon-glow-green">{asset.price}</div>
        </div>
        
        <div className="h-10 w-px bg-primary/20"></div>
        
        <div className="flex flex-col items-center">
          <span className="text-xs uppercase tracking-widest text-slate-400">Remaining</span>
          <div className="text-3xl font-black text-white italic">{timeRemaining}</div>
        </div>
      </div>
      
      <div className="flex items-center gap-4">
        <div className="flex -space-x-2">
          <div className="w-8 h-8 rounded-full border-2 border-background-dark bg-primary/20 flex items-center justify-center text-[10px] font-bold">
            {onlineUsers} Online
          </div>
        </div>
        <button className="bg-primary text-background-dark px-4 py-2 rounded-lg font-bold text-sm hover:scale-105 transition-transform">
          Connect Wallet
        </button>
      </div>
    </header>
  );
}