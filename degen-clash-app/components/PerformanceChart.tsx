'use client';

import { useState } from 'react';

interface ChartData {
  day: string;
  value: number;
  percentage: number;
}

export default function PerformanceChart() {
  const [selectedPeriod, setSelectedPeriod] = useState('7D');
  
  const chartData: ChartData[] = [
    { day: 'Mon', value: 120, percentage: 40 },
    { day: 'Tue', value: -50, percentage: 20 },
    { day: 'Wed', value: 240, percentage: 70 },
    { day: 'Thu', value: 310, percentage: 85 },
    { day: 'Fri', value: 80, percentage: 30 },
    { day: 'Sat', value: -20, percentage: 10 },
    { day: 'Sun', value: 180, percentage: 55 },
  ];

  const periods = ['7D', '1M', '3M'];

  return (
    <div className="glass-panel p-6 rounded-2xl">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-bold text-white">Recent Performance</h3>
          <p className="text-sm text-slate-400">Net PnL over last 7 days</p>
        </div>
        <div className="flex gap-2 bg-background-dark/50 p-1 rounded-lg">
          {periods.map((period) => (
            <button
              key={period}
              onClick={() => setSelectedPeriod(period)}
              className={`px-3 py-1 rounded text-xs font-medium transition-colors ${
                selectedPeriod === period
                  ? 'bg-white/10 text-white'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {period}
            </button>
          ))}
        </div>
      </div>

      {/* Chart */}
      <div className="flex items-end justify-between h-48 gap-2 w-full pt-4 border-b border-white/5 pb-2">
        {chartData.map((data, index) => (
          <div key={index} className="w-full flex flex-col justify-end items-center gap-2 group cursor-pointer">
            <div className="text-xs text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity mb-1">
              {data.value > 0 ? '+' : ''}${data.value}
            </div>
            <div 
              className={`w-full max-w-[40px] rounded-t-sm transition-all relative group ${
                data.value > 0 
                  ? 'bg-primary/20 hover:bg-primary/80' 
                  : 'bg-red-500/20 hover:bg-red-500/80'
              } ${data.percentage === 85 ? 'shadow-[0_-5px_15px_rgba(145,238,145,0.2)]' : ''}`}
              style={{ height: `${data.percentage}%` }}
            />
            <span className="text-xs text-slate-500">{data.day}</span>
          </div>
        ))}
      </div>
    </div>
  );
}