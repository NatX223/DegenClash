'use client';

import { useState } from 'react';

export default function Landing() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-sans selection:bg-primary selection:text-black">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between border-b border-white/10 bg-background-dark/80 backdrop-blur-md px-6 py-4 md:px-10">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/20 text-primary">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M11 21h-1l1-7H7.5c-.58 0-.57-.32-.38-.66.19-.34.05-.08.07-.12C8.48 10.94 10.42 7.54 13 3h1l-1 7h3.5c.49 0 .56.33.47.51l-.07.15C12.96 17.55 11 21 11 21z"/>
            </svg>
          </div>
          <h2 className="text-xl font-bold tracking-tight text-white">DegenClash</h2>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <a className="text-sm font-medium text-slate-300 hover:text-primary transition-colors" href="#">
            How it Works
          </a>
          <a className="text-sm font-medium text-slate-300 hover:text-primary transition-colors" href="#">
            Markets
          </a>
          <a className="text-sm font-medium text-slate-300 hover:text-primary transition-colors" href="#">
            Leaderboard
          </a>
        </nav>
        
        <div className="flex items-center gap-4">
          <button className="hidden md:flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-bold text-black transition-all hover:bg-primary-hover hover:neon-glow">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M21 18v1c0 1.1-.9 2-2 2H5c-1.11 0-2-.9-2-2V5c0-1.1.89-2 2-2h14c1.1 0 2 .9 2 2v1h-9c-1.11 0-2 .9-2 2v8c0 1.1.89 2 2 2h9zm-9-2h10V8H12v8zm4-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
            </svg>
            <span>Connect Wallet</span>
          </button>
          <button 
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="relative flex min-h-[600px] flex-col items-center justify-center overflow-hidden px-4 py-20 text-center md:min-h-[700px]">
          {/* Background decorative elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent"></div>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
          
          <div className="relative z-10 flex max-w-4xl flex-col items-center gap-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 backdrop-blur-sm">
              <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
              <span className="text-xs font-semibold text-primary uppercase tracking-wider">Live Prediction Markets</span>
            </div>
            
            <h1 className="text-5xl font-black leading-tight tracking-tight text-white md:text-7xl lg:text-8xl">
              Predict. <span className="text-primary text-glow">Battle.</span> Win.
            </h1>
            
            <p className="max-w-2xl text-lg text-slate-400 md:text-xl">
              Experience the thrill of gamified crypto prediction markets. Engage in high-stakes 1v1 duels or join forces in team battles to dominate the market.
            </p>
            
            <div className="mt-4 flex flex-col items-center gap-4 sm:flex-row sm:gap-6">
              <button className="flex min-w-[160px] items-center justify-center gap-2 rounded-lg bg-primary px-8 py-4 text-base font-bold text-black transition-all hover:bg-primary-hover hover:scale-105 hover:neon-glow">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.92 5H5l6.5 6.5L5 18h1.92l5.58-5.58L18 18h1.92L13.42 11.5 19.84 5H18l-5.58 5.58L6.92 5z"/>
                </svg>
                <span>Start 1v1</span>
              </button>
              <button className="flex min-w-[160px] items-center justify-center gap-2 rounded-lg border-2 border-primary bg-transparent px-8 py-3.5 text-base font-bold text-primary transition-all hover:bg-primary/10 hover:scale-105">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.54 8H16c-.8 0-1.54.37-2.01 1.01l-2.54 7.63H14v6h6zM12.5 11.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5S11 9.17 11 10s.67 1.5 1.5 1.5zM5.5 6c1.11 0 2-.89 2-2s-.89-2-2-2-2 .89-2 2 .89 2 2 2zm2 16v-6H10l-2.54-7.63A1.5 1.5 0 0 0 6.04 8H3.5c-.8 0-1.54.37-2.01 1.01L-.05 16.63H2.5v6h5z"/>
                </svg>
                <span>Join Team Battle</span>
              </button>
            </div>

            {/* Stats Row */}
            <div className="mt-12 flex w-full max-w-3xl flex-wrap justify-center gap-8 border-t border-white/10 pt-8 sm:justify-between sm:gap-12">
              <div className="text-center">
                <p className="text-2xl font-bold text-white">$2.4M+</p>
                <p className="text-sm text-slate-500 uppercase tracking-wide">Volume Traded</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-white">15K+</p>
                <p className="text-sm text-slate-500 uppercase tracking-wide">Active Battles</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-white">~5s</p>
                <p className="text-sm text-slate-500 uppercase tracking-wide">Avg. Settlement</p>
              </div>
            </div>
          </div>
        </section>

        {/* Game Modes Section */}
        <section className="px-4 py-20 md:px-10 bg-surface-darker/50">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 flex flex-col gap-4 text-center md:text-left">
              <h2 className="text-3xl font-bold text-white md:text-5xl">Choose Your Battlefield</h2>
              <p className="text-slate-400 max-w-2xl">Select your preferred game mode and start predicting market movements to win rewards in real-time.</p>
            </div>
            
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
              {/* 1v1 Card */}
              <div className="group relative overflow-hidden rounded-2xl glass-effect p-1 transition-all hover:border-primary/50">
                <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/10 blur-3xl transition-all group-hover:bg-primary/20"></div>
                <div className="flex h-full flex-col rounded-xl bg-surface-dark">
                  <div className="relative h-64 w-full overflow-hidden rounded-t-xl bg-black">
                    <div className="absolute inset-0 bg-gradient-to-t from-surface-dark to-transparent z-10"></div>
                    
                    {/* Visual Representation of 1v1 */}
                    <div className="absolute inset-0 flex items-center justify-center gap-8 z-0">
                      <div className="flex flex-col items-center gap-2">
                        <div className="h-16 w-16 rounded-full border-2 border-red-500 bg-surface-darker flex items-center justify-center">
                          <svg className="w-8 h-8 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                          </svg>
                        </div>
                        <span className="text-xs font-bold text-red-500">BEAR</span>
                      </div>
                      <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center z-20 shadow-[0_0_15px_rgba(255,255,255,0.5)]">
                        <span className="text-black font-black text-xs">VS</span>
                      </div>
                      <div className="flex flex-col items-center gap-2">
                        <div className="h-16 w-16 rounded-full border-2 border-primary bg-surface-darker flex items-center justify-center">
                          <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                          </svg>
                        </div>
                        <span className="text-xs font-bold text-primary">BULL</span>
                      </div>
                    </div>
                    
                    {/* Fake Chart Line */}
                    <svg className="absolute bottom-0 left-0 w-full h-32 stroke-primary/30 fill-none" preserveAspectRatio="none" viewBox="0 0 400 100">
                      <path d="M0,80 Q50,90 100,50 T200,60 T300,30 T400,10" strokeWidth="2"></path>
                      <path className="fill-primary/5 stroke-none" d="M0,80 L400,10 L400,100 L0,100 Z"></path>
                    </svg>
                  </div>
                  
                  <div className="flex flex-1 flex-col p-6">
                    <div className="mb-4 flex items-center justify-between">
                      <h3 className="text-2xl font-bold text-white">1v1 Arena</h3>
                      <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary">POPULAR</span>
                    </div>
                    <p className="mb-6 flex-1 text-slate-400">High-stakes duels where you challenge opponents directly. Predict short-term price movements and double your entry instantly.</p>
                    <div className="flex items-center justify-between border-t border-white/5 pt-4">
                      <div className="flex -space-x-2">
                        <div className="h-8 w-8 rounded-full border-2 border-surface-dark bg-slate-700"></div>
                        <div className="h-8 w-8 rounded-full border-2 border-surface-dark bg-slate-600"></div>
                        <div className="h-8 w-8 rounded-full border-2 border-surface-dark bg-slate-500"></div>
                        <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-surface-dark bg-surface-darker text-[10px] font-bold text-slate-400">+1.2k</div>
                      </div>
                      <a className="flex items-center gap-1 text-sm font-bold text-primary hover:text-white transition-colors" href="#">
                        Enter Arena 
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Team Warfare Card */}
              <div className="group relative overflow-hidden rounded-2xl glass-effect p-1 transition-all hover:border-blue-500/50">
                <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl transition-all group-hover:bg-blue-500/20"></div>
                <div className="flex h-full flex-col rounded-xl bg-surface-dark">
                  <div className="relative h-64 w-full overflow-hidden rounded-t-xl bg-black">
                    <div className="absolute inset-0 bg-gradient-to-t from-surface-dark to-transparent z-10"></div>
                    
                    {/* Visual Representation of Team Warfare */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-8 z-0">
                      <div className="w-full flex justify-between items-center mb-2">
                        <span className="text-blue-400 font-bold text-sm">TEAM ALPHA</span>
                        <span className="text-purple-400 font-bold text-sm">TEAM OMEGA</span>
                      </div>
                      <div className="w-full h-4 bg-surface-darker rounded-full overflow-hidden flex relative">
                        <div className="h-full bg-blue-500 w-[65%] shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
                        <div className="h-full bg-purple-500 flex-1"></div>
                        {/* Lightning bolt divider */}
                        <div className="absolute left-[65%] top-1/2 -translate-x-1/2 -translate-y-1/2 h-8 w-4 bg-white transform -skew-x-12 z-10 border-2 border-surface-dark"></div>
                      </div>
                      <div className="w-full flex justify-between items-center mt-2 text-xs text-slate-500">
                        <span>$45,230 Pooled</span>
                        <span>$21,400 Pooled</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-1 flex-col p-6">
                    <div className="mb-4 flex items-center justify-between">
                      <h3 className="text-2xl font-bold text-white">Team Warfare</h3>
                      <span className="rounded-full bg-blue-500/10 px-3 py-1 text-xs font-bold text-blue-400">MULTIPLIER 2X</span>
                    </div>
                    <p className="mb-6 flex-1 text-slate-400">Collaborate with squads to bet against rival teams. Pool resources, strategize, and dominate the leaderboard for massive pot shares.</p>
                    <div className="flex items-center justify-between border-t border-white/5 pt-4">
                      <div className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                        <span className="text-sm text-slate-300">Prize Pool: <span className="text-white font-bold">$125,000</span></span>
                      </div>
                      <a className="flex items-center gap-1 text-sm font-bold text-blue-400 hover:text-white transition-colors" href="#">
                        Join Squad 
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Leaderboard Preview */}
        <section className="px-4 py-20 md:px-10">
          <div className="mx-auto max-w-5xl rounded-3xl bg-surface-dark border border-white/5 p-8 md:p-12">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
              <div>
                <h2 className="text-3xl font-bold text-white">Top Traders</h2>
                <p className="text-slate-400">The most successful predictors this week.</p>
              </div>
              <button className="self-start md:self-center rounded-lg border border-white/10 px-4 py-2 text-sm font-medium text-white hover:bg-white/5 transition-colors">
                View Full Leaderboard
              </button>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm text-slate-400">
                <thead className="bg-white/5 text-xs uppercase text-slate-200">
                  <tr>
                    <th className="px-6 py-4 rounded-l-lg">Rank</th>
                    <th className="px-6 py-4">Trader</th>
                    <th className="px-6 py-4">Win Rate</th>
                    <th className="px-6 py-4">Total Profit</th>
                    <th className="px-6 py-4 rounded-r-lg">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="px-6 py-4 text-primary font-bold">#1</td>
                    <td className="px-6 py-4 flex items-center gap-3">
                      <div className="h-8 w-8 rounded-full bg-slate-700"></div>
                      <span className="text-white font-medium">CryptoKing99</span>
                    </td>
                    <td className="px-6 py-4 text-white">82%</td>
                    <td className="px-6 py-4 text-primary font-bold">+$42,300</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center rounded-full bg-primary/10 px-2 py-1 text-xs font-medium text-primary">In Battle</span>
                    </td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="px-6 py-4 text-white">#2</td>
                    <td className="px-6 py-4 flex items-center gap-3">
                      <div className="h-8 w-8 rounded-full bg-slate-700"></div>
                      <span className="text-white font-medium">SatoshiDreamer</span>
                    </td>
                    <td className="px-6 py-4 text-white">78%</td>
                    <td className="px-6 py-4 text-primary font-bold">+$38,150</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center rounded-full bg-slate-700 px-2 py-1 text-xs font-medium text-slate-300">Offline</span>
                    </td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="px-6 py-4 text-white">#3</td>
                    <td className="px-6 py-4 flex items-center gap-3">
                      <div className="h-8 w-8 rounded-full bg-slate-700"></div>
                      <span className="text-white font-medium">BearHunter</span>
                    </td>
                    <td className="px-6 py-4 text-white">75%</td>
                    <td className="px-6 py-4 text-primary font-bold">+$31,900</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center rounded-full bg-primary/10 px-2 py-1 text-xs font-medium text-primary">In Battle</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative px-4 py-24 text-center overflow-hidden">
          <div className="absolute inset-0 bg-primary/5"></div>
          {/* Grid background */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(145,238,145,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(145,238,145,0.1)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_70%)] pointer-events-none"></div>
          
          <div className="relative z-10 mx-auto max-w-3xl">
            <h2 className="mb-6 text-4xl font-bold tracking-tight text-white md:text-6xl">Ready to Dominate?</h2>
            <p className="mb-8 text-xl text-slate-300">
              Connect your wallet now and get a <span className="text-primary font-bold">100% deposit match</span> for your first 1v1 battle.
            </p>
            <button className="inline-flex h-14 items-center justify-center rounded-xl bg-primary px-8 text-lg font-bold text-black shadow-[0_0_20px_rgba(145,238,145,0.4)] transition-all hover:bg-primary-hover hover:scale-105 hover:shadow-[0_0_30px_rgba(145,238,145,0.6)]">
              Launch App
              <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M2.81 14.12L5.64 3.13c.24-.93 1.32-1.19 1.97-.47L22 14c.65.72.39 1.8-.47 1.97l-11 2.83c-.93.24-1.19-1.32-.47-1.97l2.83-11z"/>
              </svg>
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-background-dark py-12 px-6">
        <div className="mx-auto max-w-7xl flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col gap-4 items-center md:items-start">
            <div className="flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center rounded bg-primary/20 text-primary">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11 21h-1l1-7H7.5c-.58 0-.57-.32-.38-.66.19-.34.05-.08.07-.12C8.48 10.94 10.42 7.54 13 3h1l-1 7h3.5c.49 0 .56.33.47.51l-.07.15C12.96 17.55 11 21 11 21z"/>
                </svg>
              </div>
              <span className="text-lg font-bold text-white">DegenClash</span>
            </div>
            <p className="text-sm text-slate-500 max-w-xs text-center md:text-left">
              The #1 gamified crypto prediction market. Predict right, earn rewards.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8">
            <a className="text-sm text-slate-400 hover:text-primary transition-colors" href="#">Terms of Service</a>
            <a className="text-sm text-slate-400 hover:text-primary transition-colors" href="#">Privacy Policy</a>
            <a className="text-sm text-slate-400 hover:text-primary transition-colors" href="#">Docs</a>
            <a className="text-sm text-slate-400 hover:text-primary transition-colors" href="#">Support</a>
          </div>
          
          <div className="flex gap-4">
            <a className="text-slate-500 hover:text-primary transition-colors" href="#">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
            <a className="text-slate-500 hover:text-primary transition-colors" href="#">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
              </svg>
            </a>
            <a className="text-slate-500 hover:text-primary transition-colors" href="#">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
              </svg>
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-xs text-slate-600">
          © 2023 DegenClash. All rights reserved.
        </div>
      </footer>
    </div>
  );
}