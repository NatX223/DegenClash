interface Win {
  id: string;
  trade: string;
  opponent: string;
  profit: string;
  timeAgo: string;
}

interface WinItemProps {
  win: Win;
}

function WinItem({ win }: WinItemProps) {
  return (
    <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5">
      <div className="w-10 h-10 rounded-full bg-green-900/40 flex items-center justify-center text-primary">
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      </div>
      <div className="flex-1">
        <p className="text-sm font-bold text-white">{win.trade}</p>
        <p className="text-xs text-slate-400">{win.opponent}</p>
      </div>
      <div className="text-right">
        <p className="text-sm font-bold text-primary">{win.profit}</p>
        <p className="text-[10px] text-slate-500">{win.timeAgo}</p>
      </div>
    </div>
  );
}

export default function RecentWins() {
  const wins: Win[] = [
    {
      id: '1',
      trade: 'SOL Long',
      opponent: 'vs @TraderJoe',
      profit: '+$450',
      timeAgo: '2h ago'
    },
    {
      id: '2',
      trade: 'DOGE Short',
      opponent: 'vs @ElonFan',
      profit: '+$120',
      timeAgo: '5h ago'
    },
    {
      id: '3',
      trade: 'BTC Volatility',
      opponent: 'vs Pool',
      profit: '+$890',
      timeAgo: '1d ago'
    }
  ];

  return (
    <div className="glass-panel p-6 rounded-2xl h-full">
      <h3 className="text-lg font-bold text-white mb-4">Recent Wins</h3>
      
      <div className="flex flex-col gap-4">
        {wins.map((win) => (
          <WinItem key={win.id} win={win} />
        ))}
      </div>
      
      <button className="w-full mt-4 py-3 rounded-xl border border-white/10 text-sm text-slate-300 hover:bg-white/5 hover:text-white transition">
        View All History
      </button>
    </div>
  );
}