'use client';

import { useState } from 'react';
import Sidebar from '../../components/Sidebar';
import DashboardHeader from '../../components/DashboardHeader';
import MetricsGrid from '../../components/MetricsGrid';
import ActiveBattles from '../../components/ActiveBattles';
import PerformanceChart from '../../components/PerformanceChart';
import RecentWins from '../../components/RecentWins';
import MarketPulse from '../../components/MarketPulse';

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 min-h-screen flex overflow-hidden">
      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      
      {/* Main Content */}
      <main className="flex-1 overflow-y-auto h-screen relative bg-background-dark">
        {/* Background Gradient Glow */}
        <div className="absolute top-0 left-0 w-full h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2"></div>
        
        <div className="max-w-7xl mx-auto p-6 lg:p-10 flex flex-col gap-8 relative z-10">
          {/* Header */}
          <DashboardHeader 
            userName="CryptoKing" 
            onMenuClick={() => setSidebarOpen(true)}
          />

          {/* Metrics Grid */}
          <MetricsGrid />

          {/* Content Split */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
            {/* Main Column: Active Battles & Chart */}
            <div className="xl:col-span-2 flex flex-col gap-8">
              <ActiveBattles />
              <PerformanceChart />
            </div>

            {/* Sidebar Widget Column */}
            <div className="flex flex-col gap-6">
              <RecentWins />
              <MarketPulse />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}