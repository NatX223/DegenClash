'use client';

import { useState, useEffect } from 'react';
import BattleHeader from '../../components/BattleHeader';
import BattleArena from '../../components/BattleArena';
import LiveChart from '../../components/LiveChart';
import BattleStats from '../../components/BattleStats';
import BattleLog from '../../components/BattleLog';
import BattleActions from '../../components/BattleActions';

export default function Battle() {
  const [timeRemaining, setTimeRemaining] = useState('04:59');
  const [currentPrice, setCurrentPrice] = useState('$64,231.50');

  // Mock data
  const battleData = {
    asset: {
      pair: 'BTC/USDT',
      price: currentPrice,
    },
    onlineUsers: 128,
    players: {
      player1: {
        id: '1',
        name: 'CryptoKing_99',
        avatar: '',
        entry: '$63,890.00',
        prediction: 'UP' as const,
        dominance: 65,
      },
      player2: {
        id: '2',
        name: 'WhaleWatcher',
        avatar: '',
        entry: '$64,410.20',
        prediction: 'DOWN' as const,
        dominance: 35,
      },
    },
    stats: {
      totalStake: '1.0 ETH',
      potentialPayout: '1.95 ETH',
      liveFeedMessage: {
        user: 'WhaleWatcher',
        message: 'Hope you like the view from down there!',
      },
    },
    chart: {
      currentSpread: '$341.20',
      interval: '1M',
    },
    network: {
      fee: '0.002 ETH',
      platformId: 'PB-992-AX1',
    },
  };

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      // Update time remaining
      const [minutes, seconds] = timeRemaining.split(':').map(Number);
      const totalSeconds = minutes * 60 + seconds - 1;
      
      if (totalSeconds <= 0) {
        setTimeRemaining('00:00');
        clearInterval(interval);
        return;
      }
      
      const newMinutes = Math.floor(totalSeconds / 60);
      const newSeconds = totalSeconds % 60;
      setTimeRemaining(`${newMinutes.toString().padStart(2, '0')}:${newSeconds.toString().padStart(2, '0')}`);
      
      // Simulate price changes
      const basePrice = 64231.50;
      const variation = (Math.random() - 0.5) * 100;
      const newPrice = basePrice + variation;
      setCurrentPrice(`$${newPrice.toFixed(2)}`);
    }, 1000);

    return () => clearInterval(interval);
  }, [timeRemaining]);

  const handleDoubleDown = () => {
    console.log('Double down clicked');
    // Implement double down logic
  };

  const handleShare = () => {
    console.log('Share battle clicked');
    // Implement share logic
  };

  const handleSurrender = () => {
    console.log('Surrender clicked');
    // Implement surrender logic
  };

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 selection:bg-primary/30">
      {/* Header */}
      <BattleHeader
        asset={battleData.asset}
        timeRemaining={timeRemaining}
        onlineUsers={battleData.onlineUsers}
      />

      {/* Main Content */}
      <main className="flex flex-1 w-full max-w-[1600px] mx-auto p-6 gap-6 overflow-hidden">
        {/* Left Column - Main Battle Area */}
        <div className="flex-[3] flex flex-col gap-6">
          {/* Battle Arena */}
          <BattleArena
            player1={battleData.players.player1}
            player2={battleData.players.player2}
          />

          {/* Live Chart */}
          <LiveChart
            currentSpread={battleData.chart.currentSpread}
            interval={battleData.chart.interval}
          />

          {/* Battle Stats */}
          <BattleStats
            totalStake={battleData.stats.totalStake}
            potentialPayout={battleData.stats.potentialPayout}
            liveFeedMessage={battleData.stats.liveFeedMessage}
          />
        </div>

        {/* Right Column - Sidebar */}
        <aside className="flex-1 flex flex-col gap-6">
          {/* Battle Log */}
          <BattleLog />

          {/* Battle Actions */}
          <BattleActions
            networkFee={battleData.network.fee}
            platformId={battleData.network.platformId}
            onDoubleDown={handleDoubleDown}
            onShare={handleShare}
            onSurrender={handleSurrender}
          />
        </aside>
      </main>
    </div>
  );
}