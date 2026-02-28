import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-background-dark flex items-center justify-center">
      <div className="text-center space-y-8">
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-emerald-800 flex items-center justify-center shadow-[0_0_20px_rgba(145,238,145,0.4)]">
            <svg className="w-8 h-8 text-background-dark font-bold" fill="currentColor" viewBox="0 0 24 24">
              <path d="M11 21h-1l1-7H7.5c-.58 0-.57-.32-.38-.66.19-.34.05-.08.07-.12C8.48 10.94 10.42 7.54 13 3h1l-1 7h3.5c.49 0 .56.33.47.51l-.07.15C12.96 17.55 11 21 11 21z"/>
            </svg>
          </div>
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-white leading-none">DegenClash</h1>
            <p className="text-primary text-sm font-medium tracking-wide">CRYPTO BATTLES</p>
          </div>
        </div>
        
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-white">Choose Your Experience</h2>
          <p className="text-slate-400 max-w-md mx-auto">
            Explore our landing page or dive straight into the dashboard
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/landing"
            className="bg-primary hover:bg-primary/90 text-background-dark font-bold py-4 px-8 rounded-xl flex items-center justify-center gap-2 transition-all hover:scale-105 shadow-[0_0_20px_rgba(145,238,145,0.3)]"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
            View Landing Page
          </Link>
          
          <Link 
            href="/dashboard"
            className="border-2 border-primary bg-transparent hover:bg-primary/10 text-primary font-bold py-4 px-8 rounded-xl flex items-center justify-center gap-2 transition-all hover:scale-105"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/>
            </svg>
            Open Dashboard
          </Link>
          
          <Link 
            href="/lobby"
            className="border-2 border-blue-500 bg-transparent hover:bg-blue-500/10 text-blue-400 font-bold py-4 px-8 rounded-xl flex items-center justify-center gap-2 transition-all hover:scale-105"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.92 5H5l6.5 6.5L5 18h1.92l5.58-5.58L18 18h1.92L13.42 11.5 19.84 5H18l-5.58 5.58L6.92 5z"/>
            </svg>
            Battle Lobby
          </Link>
          
          <Link 
            href="/battle"
            className="border-2 border-red-500 bg-transparent hover:bg-red-500/10 text-red-400 font-bold py-4 px-8 rounded-xl flex items-center justify-center gap-2 transition-all hover:scale-105"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
            Live Battle
          </Link>
        </div>
      </div>
    </div>
  );
}
