interface Battle {
  id: string;
  type: '1v1' | 'team';
  title: string;
  entry: string;
  pool: string;
  timeLeft: string;
  icon?: string;
  bgColor?: string;
}

interface BattleItemProps {
  battle: Battle;
}

function BattleItem({ battle }: BattleItemProps) {
  const is1v1 = battle.type === '1v1';
  
  return (
    <div className="glass-panel p-4 rounded-xl flex flex-col sm:flex-row items-center gap-4 hover:border-primary/40 transition-colors cursor-pointer group">
      <div className="flex items-center gap-4 w-full sm:w-auto flex-1">
        {is1v1 ? (
          <div className="relative">
            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 z-10 relative">
              <img 
                alt="BTC" 
                className="w-8 h-8" 
                src="https://cryptologos.cc/logos/bitcoin-btc-logo.png"
              />
            </div>
            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 absolute top-0 left-8 z-0">
              <img 
                alt="ETH" 
                className="w-8 h-8 opacity-70" 
                src="https://cryptologos.cc/logos/ethereum-eth-logo.png"
              />
            </div>
          </div>
        ) : (
          <div className={`w-12 h-12 rounded-lg ${battle.bgColor || 'bg-indigo-900/50'} flex items-center justify-center border border-indigo-500/30 text-indigo-300 font-bold text-lg`}>
            {battle.icon || 'TM'}
          </div>
        )}
        
        <div className={is1v1 ? 'pl-10' : ''}>
          <h4 className="font-bold text-white group-hover:text-primary transition-colors">
            {battle.title}
            <span className={`text-xs font-normal px-2 py-0.5 rounded ml-2 ${
              is1v1 
                ? 'text-slate-400 bg-white/5' 
                : 'text-indigo-300 bg-indigo-500/20'
            }`}>
              {is1v1 ? '1v1' : 'Team War'}
            </span>
          </h4>
          <div className="text-sm text-slate-400 flex items-center gap-2 mt-1">
            <span>Entry: {battle.entry}</span>
            <span className="w-1 h-1 rounded-full bg-slate-600"></span>
            <span>Pool: {battle.pool}</span>
          </div>
        </div>
      </div>
      
      <div className="flex items-center justify-between w-full sm:w-auto gap-8">
        <div className="text-right">
          <p className="text-xs text-slate-500 uppercase font-bold tracking-wider">Time Left</p>
          <p className="text-white font-mono font-medium">{battle.timeLeft}</p>
        </div>
        <button className="px-4 py-2 rounded-lg bg-white/5 text-white hover:bg-primary hover:text-background-dark font-medium transition-all text-sm">
          View Battle
        </button>
      </div>
    </div>
  );
}

export default function ActiveBattles() {
  const battles: Battle[] = [
    {
      id: '1',
      type: '1v1',
      title: 'BTC vs ETH',
      entry: '$50',
      pool: '$100',
      timeLeft: '04:23:10'
    },
    {
      id: '2',
      type: 'team',
      title: 'Team Alpha vs Omega',
      entry: '$200',
      pool: '$5,000',
      timeLeft: '12:05:45',
      icon: 'TM',
      bgColor: 'bg-indigo-900/50'
    }
  ];

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold text-white flex items-center gap-2">
          <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
            <path d="M13.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8C20 8.61 17.41 3.8 13.5.67zM11.71 19c-1.78 0-3.22-1.4-3.22-3.14 0-1.62 1.05-2.76 2.81-3.12 1.77-.36 3.6-1.21 4.62-2.58.39 1.29.59 2.65.59 4.04 0 2.65-2.15 4.8-4.8 4.8z"/>
          </svg>
          Active Battles
        </h3>
        <a className="text-primary text-sm hover:underline" href="#">View All</a>
      </div>
      
      <div className="flex flex-col gap-4">
        {battles.map((battle) => (
          <BattleItem key={battle.id} battle={battle} />
        ))}
      </div>
    </div>
  );
}