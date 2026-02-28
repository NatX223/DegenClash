interface MarketData {
  symbol: string;
  price: string;
  change: string;
  changeType: 'positive' | 'negative';
}

export default function MarketPulse() {
  const marketData: MarketData[] = [
    {
      symbol: 'BTC/USD',
      price: '$64,230',
      change: '+2.4%',
      changeType: 'positive'
    },
    {
      symbol: 'ETH/USD',
      price: '$3,450',
      change: '-0.8%',
      changeType: 'negative'
    },
    {
      symbol: 'SOL/USD',
      price: '$145',
      change: '+5.1%',
      changeType: 'positive'
    }
  ];

  return (
    <div className="glass-panel p-6 rounded-2xl bg-gradient-to-br from-indigo-900/20 to-purple-900/20">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-sm font-bold text-slate-200">Market Pulse</h3>
        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
      </div>
      
      <div className="space-y-3">
        {marketData.map((data, index) => (
          <div key={index} className="flex justify-between items-center text-sm">
            <span className="text-slate-400">{data.symbol}</span>
            <span className="text-white font-mono">
              {data.price}{' '}
              <span className={`text-xs ${
                data.changeType === 'positive' ? 'text-green-400' : 'text-red-400'
              }`}>
                {data.change}
              </span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}