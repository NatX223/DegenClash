interface BattleCardProps {
  battle: {
    id: string;
    creator: {
      name: string;
      avatar?: string;
      winRate?: string;
      badge?: string;
    };
    asset: {
      pair: string;
      price: string;
      change: string;
      changeType: 'positive' | 'negative';
    };
    stake: {
      amount: string;
      currency: string;
    };
    bet: {
      direction: 'LONG' | 'SHORT';
      type: 'creator' | 'opponent';
    };
    timeLeft?: string;
    duration?: string;
    gameType: '1v1' | 'team' | 'pro';
    status: 'live' | 'waiting' | 'team';
    participants?: number;
    maxParticipants?: number;
    oracle?: string;
    hasChart?: boolean;
  };
}

export default function BattleCard({ battle }: BattleCardProps) {
  const getStatusBadge = () => {
    switch (battle.status) {
      case 'live':
        return 'bg-primary/20 border-primary/30 text-primary';
      case 'team':
        return 'bg-blue-500/20 border-blue-500/30 text-blue-400';
      case 'waiting':
        return 'bg-orange-500/20 border-orange-500/30 text-orange-400';
      default:
        return 'bg-primary/20 border-primary/30 text-primary';
    }
  };

  const getStatusText = () => {
    switch (battle.status) {
      case 'live':
        return 'Live';
      case 'team':
        return `Team ${battle.maxParticipants || 3}v${battle.maxParticipants || 3}`;
      case 'waiting':
        return 'Pro';
      default:
        return 'Live';
    }
  };

  const getBetColor = () => {
    return battle.bet.direction === 'LONG' ? 'text-primary' : 'text-red-400';
  };

  const getBetIcon = () => {
    return battle.bet.direction === 'LONG' ? 'trending_up' : 'trending_down';
  };

  const getJoinButtonText = () => {
    return battle.gameType === 'team' ? 'JOIN TEAM' : 'JOIN BATTLE';
  };

  const getJoinButtonIcon = () => {
    return battle.gameType === 'team' ? 'group' : 'swords';
  };

  return (
    <div className="glass-card rounded-xl p-5 flex flex-col gap-4 relative overflow-hidden group">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-accent-dark p-1 flex items-center justify-center">
            <div className="w-8 h-8 rounded bg-slate-700"></div>
          </div>
          <div>
            <h4 className="text-white font-bold text-sm">{battle.creator.name}</h4>
            <span className="text-slate-400 text-xs">
              {battle.creator.winRate ? `Win Rate: ${battle.creator.winRate}` : battle.creator.badge}
            </span>
          </div>
        </div>
        <div className={`border rounded px-2 py-1 text-[10px] font-bold uppercase tracking-wider ${getStatusBadge()}`}>
          {getStatusText()}
        </div>
      </div>

      {/* Asset Info */}
      <div className="flex justify-between items-center py-2">
        <div>
          <h3 className="text-2xl font-bold text-white">{battle.asset.pair}</h3>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-primary text-xs font-bold">{battle.asset.price}</span>
            <span className={`text-[10px] ${battle.asset.changeType === 'positive' ? 'text-primary/60' : 'text-red-400'}`}>
              {battle.asset.change}
            </span>
          </div>
        </div>
        <div className="text-right">
          <span className="block text-slate-400 text-[10px] uppercase font-bold tracking-widest">Stake</span>
          <span className="text-xl font-bold text-primary">{battle.stake.amount} {battle.stake.currency}</span>
        </div>
      </div>

      {/* Battle Details */}
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-background-dark/50 rounded-lg p-3 flex flex-col items-center gap-1 border border-white/5">
          <span className="text-slate-500 text-[10px] font-bold uppercase">Creator Bet</span>
          <div className={`flex items-center gap-1 ${getBetColor()}`}>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              {battle.bet.direction === 'LONG' ? (
                <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>
              ) : (
                <path d="M16 18l2.29-2.29-4.88-4.88-4 4L2 7.41 3.41 6l6 6 4-4 6.3 6.29L22 12v6z"/>
              )}
            </svg>
            <span className="font-bold text-sm">{battle.bet.direction}</span>
          </div>
        </div>

        <div className="bg-background-dark/50 rounded-lg p-3 flex flex-col items-center gap-1 border border-white/5">
          <span className="text-slate-500 text-[10px] font-bold uppercase">
            {battle.timeLeft ? 'Time Left' : battle.participants ? 'Participants' : 'Duration'}
          </span>
          <div className="flex items-center gap-1 text-white">
            {battle.timeLeft ? (
              <>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M15 1H9v2h6V1zm-4 13h2V8h-2v6zm8.03-6.61l1.42-1.42c-.43-.51-.9-.99-1.41-1.41l-1.42 1.42A8.962 8.962 0 0 0 12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9a8.994 8.994 0 0 0 7.03-14.61zM12 20c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"/>
                </svg>
                <span className="font-bold text-sm italic">{battle.timeLeft}</span>
              </>
            ) : battle.participants ? (
              <div className="flex -space-x-2">
                <div className="w-6 h-6 rounded-full border border-background-dark bg-slate-700 flex items-center justify-center text-[10px]">
                  {battle.creator.name.slice(0, 2).toUpperCase()}
                </div>
                <div className="w-6 h-6 rounded-full border border-background-dark bg-primary text-background-dark flex items-center justify-center text-[10px] font-bold">
                  +{battle.participants - 1}
                </div>
                <div className="w-6 h-6 rounded-full border border-background-dark bg-accent-dark flex items-center justify-center text-[10px] text-slate-500">
                  ?
                </div>
              </div>
            ) : (
              <>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
                  <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                </svg>
                <span className="font-bold text-sm">{battle.duration}</span>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Join Button */}
      <button className="w-full bg-primary hover:bg-primary/90 text-background-dark font-black py-3 rounded-lg transition-all active:scale-95 flex items-center justify-center gap-2">
        {getJoinButtonText()}
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          {battle.gameType === 'team' ? (
            <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.54 8H16c-.8 0-1.54.37-2.01 1.01l-2.54 7.63H14v6h6zM12.5 11.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5S11 9.17 11 10s.67 1.5 1.5 1.5zM5.5 6c1.11 0 2-.89 2-2s-.89-2-2-2-2 .89-2 2 .89 2 2 2zm2 16v-6H10l-2.54-7.63A1.5 1.5 0 0 0 6.04 8H3.5c-.8 0-1.54.37-2.01 1.01L-.05 16.63H2.5v6h5z"/>
          ) : (
            <path d="M6.92 5H5l6.5 6.5L5 18h1.92l5.58-5.58L18 18h1.92L13.42 11.5 19.84 5H18l-5.58 5.58L6.92 5z"/>
          )}
        </svg>
      </button>

      {/* Additional Info */}
      <div className="pt-4 border-t border-white/5 flex flex-col gap-3">
        {battle.hasChart ? (
          <div className="h-12 w-full bg-accent-dark/30 rounded overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent"></div>
            <div className="flex items-end justify-between h-full px-2 py-1 gap-1">
              {[1/2, 2/3, 1/2, 4/5, 3/4, 1/2, 2/3].map((height, index) => (
                <div
                  key={index}
                  className="w-full bg-primary/20 rounded-t-sm"
                  style={{ height: `${height * 100}%` }}
                />
              ))}
            </div>
          </div>
        ) : battle.oracle ? (
          <p className="text-[10px] text-slate-400 text-center italic">
            Settlement in {battle.duration?.toLowerCase()} via {battle.oracle}
          </p>
        ) : (
          <div className="flex justify-between text-[10px] font-bold text-slate-500">
            <span>DURATION: {battle.duration}</span>
            <span>ORACLE: BINANCE</span>
          </div>
        )}
      </div>
    </div>
  );
}