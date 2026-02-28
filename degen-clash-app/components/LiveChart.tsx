'use client';

interface ChartData {
  height: number;
  type: 'positive' | 'negative';
  isCurrent?: boolean;
}

interface LiveChartProps {
  currentSpread: string;
  interval: string;
}

export default function LiveChart({ currentSpread, interval }: LiveChartProps) {
  const chartData: ChartData[] = [
    { height: 32, type: 'positive' },
    { height: 40, type: 'positive' },
    { height: 56, type: 'positive' },
    { height: 48, type: 'negative' },
    { height: 64, type: 'positive' },
    { height: 80, type: 'positive', isCurrent: true },
    { height: 72, type: 'negative' },
  ];

  return (
    <div className="flex-1 glass rounded-xl relative overflow-hidden min-h-[400px]">
      {/* Grid Background */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, #25f425 1px, transparent 0)',
          backgroundSize: '24px 24px'
        }}
      />
      
      <div className="absolute inset-0 p-8 flex flex-col">
        {/* Chart Header */}
        <div className="flex justify-between items-start mb-4">
          <div className="flex gap-4">
            <div className="px-3 py-1 bg-primary/10 rounded border border-primary/20 text-xs font-bold text-primary">
              LIVE CHART
            </div>
            <div className="px-3 py-1 bg-slate-800/50 rounded text-xs font-bold text-slate-300">
              {interval} INTERVAL
            </div>
          </div>
          <div className="text-right">
            <div className="text-xs text-slate-400 uppercase">Current Spread</div>
            <div className="text-sm font-bold">{currentSpread}</div>
          </div>
        </div>

        {/* Chart Bars */}
        <div className="flex-1 flex items-end gap-1 px-4 py-12">
          {chartData.map((bar, index) => (
            <div
              key={index}
              className={`w-full rounded-t border-t relative group ${
                bar.type === 'positive' 
                  ? 'bg-primary/20 border-primary/40' 
                  : 'bg-danger/20 border-danger/40'
              } ${bar.type === 'positive' && bar.height > 60 ? 'bg-primary/40' : ''}
              ${bar.type === 'positive' && bar.height > 70 ? 'bg-primary/50' : ''}
              ${bar.type === 'negative' && bar.height > 60 ? 'bg-danger/30' : ''}`}
              style={{ height: `${bar.height * 4}px` }}
            >
              <div className={`absolute inset-x-0 top-0 h-1 ${
                bar.type === 'positive' ? 'bg-primary' : 'bg-danger'
              }`} />
              
              {bar.isCurrent && (
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-primary text-background-dark text-[10px] font-bold rounded">
                  YOU ARE HERE
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}