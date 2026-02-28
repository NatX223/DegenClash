'use client';

interface LogEntry {
  id: string;
  timestamp: string;
  message: string;
  type: 'positive' | 'negative' | 'neutral';
}

interface BattleLogProps {
  logs?: LogEntry[];
}

export default function BattleLog({ logs }: BattleLogProps) {
  const defaultLogs: LogEntry[] = [
    {
      id: '1',
      timestamp: '14:02:11',
      message: 'Price hit resistance at $64.5k',
      type: 'positive'
    },
    {
      id: '2',
      timestamp: '14:02:45',
      message: 'WhaleWatcher is sweating!',
      type: 'negative'
    },
    {
      id: '3',
      timestamp: '14:03:02',
      message: 'Momentum shifting BULLISH',
      type: 'neutral'
    },
    {
      id: '4',
      timestamp: '14:04:15',
      message: 'Volume surge detected',
      type: 'positive'
    },
    {
      id: '5',
      timestamp: '14:04:30',
      message: '2,000 users watching this battle',
      type: 'neutral'
    }
  ];

  const logEntries = logs || defaultLogs;

  const getLogStyle = (type: string) => {
    switch (type) {
      case 'positive':
        return 'bg-primary/5 border-primary/10 text-primary';
      case 'negative':
        return 'bg-danger/5 border-danger/10 text-danger';
      default:
        return 'bg-white/5 border-white/10 text-slate-400';
    }
  };

  return (
    <div className="glass rounded-xl flex flex-col h-[60%] overflow-hidden">
      {/* Header */}
      <div className="p-4 border-b border-primary/10 flex items-center justify-between">
        <h4 className="font-bold text-sm uppercase tracking-widest flex items-center gap-2">
          <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 24 24">
            <path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42A8.954 8.954 0 0 0 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9z"/>
          </svg>
          Battle Log
        </h4>
        <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
      </div>

      {/* Log Entries */}
      <div className="flex-1 p-4 flex flex-col gap-3 overflow-y-auto">
        {logEntries.map((log) => (
          <div
            key={log.id}
            className={`p-2 rounded border text-xs ${getLogStyle(log.type)}`}
          >
            <span className="font-bold">{log.timestamp}</span> {log.message}
          </div>
        ))}
      </div>
    </div>
  );
}