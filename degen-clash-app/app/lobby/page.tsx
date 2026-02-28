'use client';

import { useState } from 'react';
import LobbyHeader from '../../components/LobbyHeader';
import LobbyFilters from '../../components/LobbyFilters';
import BattleGrid from '../../components/BattleGrid';
import LobbySidebar from '../../components/LobbySidebar';

export default function Lobby() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedAsset, setSelectedAsset] = useState('all');
  const [loading, setLoading] = useState(false);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    // Implement search logic here
  };

  const handleAssetFilter = (asset: string) => {
    setSelectedAsset(asset);
    // Implement filter logic here
  };

  const handleCreateBattle = () => {
    // Implement create battle logic
    console.log('Create battle clicked');
  };

  return (
    <div className="flex h-full min-h-screen flex-col bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100">
      {/* Header */}
      <LobbyHeader onSearchChange={handleSearch} />
      
      <main className="flex-1 flex overflow-hidden">
        {/* Main Content Area */}
        <div className="flex-1 overflow-y-auto p-8">
          {/* Page Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
            <div>
              <h1 className="text-4xl font-bold text-white mb-2">Battle Lobby</h1>
              <p className="text-slate-400">Join 1v1 or Team crypto prediction battles and win big.</p>
            </div>
            <div className="flex items-center gap-3">
              <button 
                onClick={handleCreateBattle}
                className="bg-accent-dark hover:bg-white/10 text-white font-medium py-2.5 px-5 rounded-lg text-sm flex items-center gap-2 border border-white/5 transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
                </svg>
                Create Battle
              </button>
            </div>
          </div>

          {/* Filters */}
          <LobbyFilters 
            onAssetFilter={handleAssetFilter}
            onGameTypeFilter={(type) => console.log('Game type:', type)}
            onStakeFilter={(stake) => console.log('Stake:', stake)}
          />

          {/* Battle Grid */}
          <BattleGrid loading={loading} />
        </div>

        {/* Sidebar */}
        <LobbySidebar />
      </main>
    </div>
  );
}