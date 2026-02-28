'use client';

import { useState } from 'react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const navItems = [
    { icon: 'dashboard', label: 'Dashboard', active: true },
    { icon: 'swords', label: 'My Battles', active: false },
    { icon: 'account_balance_wallet', label: 'Wallet', active: false },
    { icon: 'leaderboard', label: 'Leaderboard', active: false },
    { icon: 'person', label: 'Profile', active: false },
  ];

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-10 lg:hidden"
          onClick={onClose}
        />
      )}
      
      <aside className={`
        w-64 h-screen flex flex-col border-r border-white/5 bg-surface-dark/95 backdrop-blur-sm 
        fixed lg:relative z-20 transition-transform duration-300
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        {/* Header */}
        <div className="p-6 flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-emerald-800 flex items-center justify-center shadow-[0_0_15px_rgba(145,238,145,0.4)]">
            <svg className="w-6 h-6 text-background-dark font-bold" fill="currentColor" viewBox="0 0 24 24">
              <path d="M11 21h-1l1-7H7.5c-.58 0-.57-.32-.38-.66.19-.34.05-.08.07-.12C8.48 10.94 10.42 7.54 13 3h1l-1 7h3.5c.49 0 .56.33.47.51l-.07.15C12.96 17.55 11 21 11 21z"/>
            </svg>
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-tight text-white leading-none">DegenClash</h1>
            <p className="text-primary text-xs font-medium tracking-wide">CRYPTO BATTLES</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 flex flex-col gap-2 mt-4">
          {navItems.map((item) => (
            <a
              key={item.label}
              className={`
                flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-colors
                ${item.active 
                  ? 'bg-primary/10 text-primary border border-primary/20' 
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
                }
              `}
              href="#"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                {item.icon === 'dashboard' && <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/>}
                {item.icon === 'swords' && <path d="M6.92 5H5l6.5 6.5L5 18h1.92l5.58-5.58L18 18h1.92L13.42 11.5 19.84 5H18l-5.58 5.58L6.92 5z"/>}
                {item.icon === 'account_balance_wallet' && <path d="M21 18v1c0 1.1-.9 2-2 2H5c-1.11 0-2-.9-2-2V5c0-1.1.89-2 2-2h14c1.1 0 2 .9 2 2v1h-9c-1.11 0-2 .9-2 2v8c0 1.1.89 2 2 2h9zm-9-2h10V8H12v8zm4-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>}
                {item.icon === 'leaderboard' && <path d="M7.5 21H2V9h5.5v12zm7.25-18h-5.5v18h5.5V3zM22 11h-5.5v10H22V11z"/>}
                {item.icon === 'person' && <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>}
              </svg>
              <span>{item.label}</span>
            </a>
          ))}
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-white/5">
          <a className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 transition-colors" href="#">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.82,11.69,4.82,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z"/>
            </svg>
            <span className="font-medium">Settings</span>
          </a>
          
          {/* User Profile */}
          <div className="mt-4 p-4 rounded-xl bg-gradient-to-br from-surface-dark to-black border border-white/5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-slate-700"></div>
              <div className="overflow-hidden">
                <p className="text-sm font-bold text-white truncate">CryptoKing</p>
                <p className="text-xs text-slate-500 truncate">Pro Analyst</p>
              </div>
            </div>
            <button className="w-full text-xs text-center py-2 rounded-lg bg-white/5 text-slate-300 hover:bg-white/10 transition">
              Log Out
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}