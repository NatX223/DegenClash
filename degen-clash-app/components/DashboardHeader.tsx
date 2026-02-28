interface DashboardHeaderProps {
  userName: string;
  onMenuClick: () => void;
}

export default function DashboardHeader({ userName, onMenuClick }: DashboardHeaderProps) {
  return (
    <header className="flex flex-col md:flex-row md:items-end justify-between gap-4">
      {/* Mobile menu button */}
      <button
        onClick={onMenuClick}
        className="lg:hidden fixed top-4 left-4 z-30 p-2 rounded-lg bg-surface-dark/90 backdrop-blur-sm border border-white/10 text-white"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      <div className="lg:ml-0 ml-16">
        <h2 className="text-4xl font-bold text-white tracking-tight mb-1">
          Welcome back,{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">
            {userName}
          </span>
        </h2>
        <p className="text-primary font-medium">Ready for your next prediction battle?</p>
      </div>
      
      <button className="bg-primary hover:bg-primary/90 text-background-dark font-bold py-3 px-6 rounded-xl flex items-center gap-2 transition-transform active:scale-95 shadow-[0_0_20px_rgba(145,238,145,0.3)]">
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
        </svg>
        Create New Battle
      </button>
    </header>
  );
}