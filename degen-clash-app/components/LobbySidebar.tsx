interface LeaderboardEntry {
  rank: number;
  name: string;
  avatar?: string;
  earnings: string;
  verified?: boolean;
}

interface LobbySidebarProps {
  className?: string;
}

export default function LobbySidebar({ className = '' }: LobbySidebarProps) {
  const leaderboard: LeaderboardEntry[] = [
    { rank: 1, name: 'Sage.eth', earnings: '+$12.4k', verified: true },
    { rank: 2, name: 'OxBear', earnings: '+$8.2k' },
    { rank: 3, name: 'Whale.sol', earnings: '+$7.1k' },
  ];

  return (
    <aside className={`hidden xl:flex w-80 border-l border-white/10 flex-col bg-accent-dark/20 overflow-y-auto ${className}`}>
      <div className="p-6">
        {/* Top Predictors */}
        <div className="flex items-center gap-2 mb-6">
          <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
            <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>
          </svg>
          <h3 className="font-bold text-white uppercase tracking-wider text-sm">Top Predictors</h3>
        </div>
        
        <div className="flex flex-col gap-4">
          {leaderboard.map((entry) => (
            <div
              key={entry.rank}
              className={`flex items-center justify-between p-3 rounded-lg border border-white/5 ${
                entry.rank === 1 ? 'bg-accent-dark/50' : 'bg-accent-dark/30'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`font-bold text-xs italic ${
                  entry.rank === 1 ? 'text-primary' : 'text-slate-500'
                }`}>
                  #{entry.rank}
                </div>
                <div className={`w-8 h-8 rounded-full ${
                  entry.rank === 1 ? 'border border-primary/20' : ''
                } bg-slate-700`}></div>
                <div>
                  <p className="text-xs font-bold text-white">{entry.name}</p>
                  <p className="text-[10px] text-primary">{entry.earnings}</p>
                </div>
              </div>
              {entry.verified && (
                <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H5C3.89 1 3 1.89 3 3V19C3 20.1 3.9 21 5 21H11V19H5V3H13V9H21ZM17.5 13C15.01 13 13 15.01 13 17.5S15.01 22 17.5 22 22 19.99 22 17.5 19.99 13 17.5 13ZM16 19L15 18L16.5 16.5L19.5 19.5L16 19Z"/>
                </svg>
              )}
            </div>
          ))}
        </div>

        {/* High Stakes Section */}
        <div className="mt-10 mb-6">
          <div className="flex items-center gap-2 mb-6">
            <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
            <h3 className="font-bold text-white uppercase tracking-wider text-sm">High Stakes</h3>
          </div>
          
          <div className="glass-card rounded-xl p-4 flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <span className="text-[10px] text-slate-400 uppercase font-bold tracking-widest">Active Pool</span>
              <span className="text-primary font-bold text-sm italic">84.2 ETH</span>
            </div>
            <div className="h-1 bg-accent-dark rounded-full overflow-hidden">
              <div className="h-full bg-primary w-3/4 rounded-full"></div>
            </div>
            <p className="text-[10px] text-slate-500 text-center">
              Join high stakes battles to enter the weekly 5 ETH raffle
            </p>
          </div>
        </div>

        {/* My Battles Section */}
        <div className="mt-10">
          <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">My Battles</h4>
          <div className="flex flex-col items-center justify-center py-10 px-4 border-2 border-dashed border-white/5 rounded-xl">
            <svg className="w-10 h-10 text-slate-600 mb-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.92 5H5l6.5 6.5L5 18h1.92l5.58-5.58L18 18h1.92L13.42 11.5 19.84 5H18l-5.58 5.58L6.92 5z"/>
            </svg>
            <p className="text-xs text-slate-500 text-center">You haven't joined any battles yet.</p>
          </div>
        </div>
      </div>
    </aside>
  );
}