interface BattleStatsProps {
  totalStake: string;
  potentialPayout: string;
  liveFeedMessage?: {
    user: string;
    message: string;
  };
}

export default function BattleStats({ totalStake, potentialPayout, liveFeedMessage }: BattleStatsProps) {
  return (
    <div className="grid grid-cols-4 gap-4">
      {/* Total Stake */}
      <div className="glass p-4 rounded-xl flex items-center gap-4">
        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/>
          </svg>
        </div>
        <div>
          <p className="text-[10px] uppercase text-slate-400">Total Stake</p>
          <p className="text-lg font-bold">{totalStake}</p>
        </div>
      </div>

      {/* Potential Payout */}
      <div className="glass p-4 rounded-xl flex items-center gap-4">
        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
        </div>
        <div>
          <p className="text-[10px] uppercase text-slate-400">Potential Payout</p>
          <p className="text-lg font-bold text-primary">{potentialPayout}</p>
        </div>
      </div>

      {/* Live Feed */}
      <div className="col-span-2 glass p-4 rounded-xl flex items-center gap-4">
        <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
        </svg>
        <div className="flex-1 overflow-hidden">
          <p className="text-[10px] uppercase text-slate-400">Live Feed</p>
          {liveFeedMessage ? (
            <div className="text-sm italic text-slate-300 truncate">
              <span className="font-bold text-primary">@{liveFeedMessage.user}:</span> "{liveFeedMessage.message}"
            </div>
          ) : (
            <div className="text-sm italic text-slate-500">No recent messages...</div>
          )}
        </div>
      </div>
    </div>
  );
}