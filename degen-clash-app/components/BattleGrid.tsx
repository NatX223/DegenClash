import BattleCard from './BattleCard';

interface Battle {
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
}

interface BattleGridProps {
  battles?: Battle[];
  loading?: boolean;
}

export default function BattleGrid({ battles, loading = false }: BattleGridProps) {
  const defaultBattles: Battle[] = [
    {
      id: '1',
      creator: {
        name: 'CryptoKing',
        winRate: '68%',
      },
      asset: {
        pair: 'BTC/USDT',
        price: '$64,281.40',
        change: '+0.42%',
        changeType: 'positive',
      },
      stake: {
        amount: '0.5',
        currency: 'ETH',
      },
      bet: {
        direction: 'LONG',
        type: 'creator',
      },
      timeLeft: '04:32',
      duration: '15M',
      gameType: '1v1',
      status: 'live',
      oracle: 'BINANCE',
    },
    {
      id: '2',
      creator: {
        name: 'MoonShot',
        badge: 'Team Captain',
      },
      asset: {
        pair: 'ETH/USDT',
        price: '$3,421.15',
        change: '-1.22%',
        changeType: 'negative',
      },
      stake: {
        amount: '1.2',
        currency: 'ETH',
      },
      bet: {
        direction: 'SHORT',
        type: 'creator',
      },
      gameType: 'team',
      status: 'team',
      participants: 3,
      maxParticipants: 3,
      hasChart: true,
    },
    {
      id: '3',
      creator: {
        name: 'WhaleWatcher',
        badge: 'High Stakes Only',
      },
      asset: {
        pair: 'SOL/USDT',
        price: '$148.92',
        change: '+2.15%',
        changeType: 'positive',
      },
      stake: {
        amount: '50.0',
        currency: 'SOL',
      },
      bet: {
        direction: 'LONG',
        type: 'creator',
      },
      duration: '1H',
      gameType: 'pro',
      status: 'waiting',
      oracle: 'Pyth Network',
    },
    {
      id: '4',
      creator: {
        name: 'AlphaSeeker',
        badge: 'Newcomer',
      },
      asset: {
        pair: 'BTC/USDT',
        price: '$64,281.40',
        change: '+0.42%',
        changeType: 'positive',
      },
      stake: {
        amount: '0.1',
        currency: 'ETH',
      },
      bet: {
        direction: 'SHORT',
        type: 'creator',
      },
      timeLeft: '01:15',
      gameType: '1v1',
      status: 'live',
    },
  ];

  const battlesToShow = battles || defaultBattles;

  if (loading) {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3 gap-6">
        {[...Array(6)].map((_, index) => (
          <div key={index} className="glass-card rounded-xl p-5 animate-pulse">
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-slate-700"></div>
                <div>
                  <div className="h-4 bg-slate-700 rounded w-20 mb-1"></div>
                  <div className="h-3 bg-slate-700 rounded w-16"></div>
                </div>
              </div>
              <div className="h-6 bg-slate-700 rounded w-12"></div>
            </div>
            <div className="h-8 bg-slate-700 rounded w-24 mb-2"></div>
            <div className="h-4 bg-slate-700 rounded w-16 mb-4"></div>
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="h-16 bg-slate-700 rounded"></div>
              <div className="h-16 bg-slate-700 rounded"></div>
            </div>
            <div className="h-12 bg-slate-700 rounded"></div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3 gap-6">
      {battlesToShow.map((battle) => (
        <BattleCard key={battle.id} battle={battle} />
      ))}
    </div>
  );
}