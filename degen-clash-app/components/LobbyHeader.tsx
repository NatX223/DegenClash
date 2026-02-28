'use client';

interface LobbyHeaderProps {
  onSearchChange?: (value: string) => void;
}

export default function LobbyHeader({ onSearchChange }: LobbyHeaderProps) {
  const navItems = [
    { label: 'Lobby', active: true },
    { label: 'Live Battles', active: false },
    { label: 'Leaderboard', active: false },
    { label: 'Portfolio', active: false },
  ];

  return (
    <header className="flex items-center justify-between border-b border-white/10 px-6 py-4 sticky top-0 bg-background-dark/80 backdrop-blur-md z-50">
      <div className="flex items-center gap-10">
        <div className="flex items-center gap-2 text-primary">
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M11 21h-1l1-7H7.5c-.58 0-.57-.32-.38-.66.19-.34.05-.08.07-.12C8.48 10.94 10.42 7.54 13 3h1l-1 7h3.5c.49 0 .56.33.47.51l-.07.15C12.96 17.55 11 21 11 21z"/>
          </svg>
          <h2 className="text-xl font-bold tracking-tight">DegenClash</h2>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              className={`text-sm font-medium transition-colors ${
                item.active
                  ? 'text-primary font-semibold border-b-2 border-primary pb-1'
                  : 'text-slate-400 hover:text-white'
              }`}
              href="#"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
      
      <div className="flex items-center gap-4">
        <div className="relative group hidden lg:block">
          <svg className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" fill="currentColor" viewBox="0 0 24 24">
            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
          </svg>
          <input
            className="bg-accent-dark border-none rounded-lg pl-10 pr-4 py-2 text-sm w-64 focus:ring-1 focus:ring-primary focus:outline-none"
            placeholder="Search battles..."
            type="text"
            onChange={(e) => onSearchChange?.(e.target.value)}
          />
        </div>
        
        <button className="bg-primary text-background-dark font-bold py-2 px-6 rounded-lg text-sm transition-transform hover:scale-105 active:scale-95">
          Connect Wallet
        </button>
        
        <div className="h-10 w-10 rounded-full border border-primary/30 overflow-hidden">
          <div className="h-full w-full bg-slate-700 rounded-full"></div>
        </div>
      </div>
    </header>
  );
}