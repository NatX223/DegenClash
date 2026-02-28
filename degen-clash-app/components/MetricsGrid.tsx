interface MetricCardProps {
  title: string;
  value: string;
  change?: string;
  changeType?: 'positive' | 'negative' | 'neutral';
  icon: string;
  iconColor?: string;
  progress?: number;
}

function MetricCard({ title, value, change, changeType = 'neutral', icon, iconColor = 'text-primary', progress }: MetricCardProps) {
  const getChangeColor = () => {
    switch (changeType) {
      case 'positive': return 'text-primary';
      case 'negative': return 'text-red-400';
      default: return 'text-emerald-400';
    }
  };

  const getChangeIcon = () => {
    switch (changeType) {
      case 'positive': return 'trending_up';
      case 'negative': return 'trending_down';
      default: return null;
    }
  };

  return (
    <div className="glass-panel p-5 rounded-2xl flex flex-col justify-between h-40 relative overflow-hidden group">
      <div className={`absolute right-0 top-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity`}>
        <svg className={`w-16 h-16 ${iconColor}`} fill="currentColor" viewBox="0 0 24 24">
          {icon === 'monitoring' && <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>}
          {icon === 'candlestick_chart' && <path d="M9 4H7v2H5v12h2v2h2v-2h2V6H9V4zm6 0h-2v6h-2v4h2v6h2v-6h2v-4h-2V4z"/>}
          {icon === 'pie_chart' && <path d="M11 2v20c-5.07-.5-9-4.79-9-10s3.93-9.5 9-10zm2.03 0v8.99H22c-.47-4.74-4.24-8.52-8.97-8.99zm0 11.01V22c4.74-.47 8.5-4.25 8.97-8.99h-8.97z"/>}
          {icon === 'emoji_events' && <path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm14 0c0 1.3-.84 2.4-2 2.82V7h2v1z"/>}
        </svg>
      </div>
      
      <div>
        <p className="text-slate-400 text-sm font-medium mb-1">{title}</p>
        <h3 className="text-3xl font-bold text-white">{value}</h3>
      </div>
      
      <div className="flex items-center gap-2">
        {change && (
          <span className={`flex items-center text-sm font-bold ${getChangeColor()} ${changeType === 'positive' ? 'bg-primary/10' : ''} px-2 py-1 rounded`}>
            {getChangeIcon() && (
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                {getChangeIcon() === 'trending_up' && <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>}
                {getChangeIcon() === 'trending_down' && <path d="M16 18l2.29-2.29-4.88-4.88-4 4L2 7.41 3.41 6l6 6 4-4 6.3 6.29L22 12v6z"/>}
              </svg>
            )}
            {change}
          </span>
        )}
      </div>
      
      {progress !== undefined && (
        <div className="w-full h-2 bg-white/10 rounded-full mt-2 overflow-hidden">
          <div 
            className="h-full bg-primary rounded-full shadow-[0_0_10px_rgba(145,238,145,0.5)]" 
            style={{ width: `${progress}%` }}
          />
        </div>
      )}
    </div>
  );
}

export default function MetricsGrid() {
  const metrics = [
    {
      title: 'Total PnL',
      value: '$12,450.00',
      change: '+15%',
      changeType: 'positive' as const,
      icon: 'monitoring',
      iconColor: 'text-primary'
    },
    {
      title: 'Trades Taken',
      value: '142',
      change: '+12 this week',
      changeType: 'neutral' as const,
      icon: 'candlestick_chart',
      iconColor: 'text-white'
    },
    {
      title: 'Win/Loss Ratio',
      value: '68%',
      change: 'Win Rate',
      changeType: 'neutral' as const,
      icon: 'pie_chart',
      iconColor: 'text-white',
      progress: 68
    },
    {
      title: 'Current Rank',
      value: 'Top 5%',
      change: '150 Ranks',
      changeType: 'positive' as const,
      icon: 'emoji_events',
      iconColor: 'text-yellow-400'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {metrics.map((metric, index) => (
        <MetricCard key={index} {...metric} />
      ))}
    </div>
  );
}