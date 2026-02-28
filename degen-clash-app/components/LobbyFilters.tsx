'use client';

import { useState } from 'react';

interface FilterOption {
  label: string;
  value: string;
  active?: boolean;
}

interface LobbyFiltersProps {
  onAssetFilter?: (asset: string) => void;
  onGameTypeFilter?: (type: string) => void;
  onStakeFilter?: (stake: string) => void;
}

export default function LobbyFilters({ onAssetFilter, onGameTypeFilter, onStakeFilter }: LobbyFiltersProps) {
  const [selectedAsset, setSelectedAsset] = useState('All Assets');
  const [selectedGameType, setSelectedGameType] = useState('All');
  const [selectedStake, setSelectedStake] = useState('Any');

  const assets: FilterOption[] = [
    { label: 'All Assets', value: 'all', active: true },
    { label: 'BTC', value: 'btc' },
    { label: 'ETH', value: 'eth' },
    { label: 'SOL', value: 'sol' },
  ];

  const handleAssetClick = (asset: FilterOption) => {
    setSelectedAsset(asset.label);
    onAssetFilter?.(asset.value);
  };

  return (
    <div className="flex flex-wrap gap-4 mb-8">
      {/* Asset Filter */}
      <div className="flex items-center bg-accent-dark/50 border border-white/5 rounded-lg p-1">
        {assets.map((asset) => (
          <button
            key={asset.value}
            onClick={() => handleAssetClick(asset)}
            className={`px-4 py-1.5 rounded-md text-sm font-medium transition-colors ${
              selectedAsset === asset.label
                ? 'bg-primary text-background-dark'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            {asset.label}
          </button>
        ))}
      </div>

      {/* Game Type Filter */}
      <div className="flex items-center bg-accent-dark/50 border border-white/5 rounded-lg px-3 py-1.5 gap-2 cursor-pointer hover:bg-accent-dark transition-colors">
        <span className="text-sm font-medium text-slate-300">Game Type:</span>
        <span className="text-sm font-semibold text-white">{selectedGameType}</span>
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M7 10l5 5 5-5z"/>
        </svg>
      </div>

      {/* Stake Filter */}
      <div className="flex items-center bg-accent-dark/50 border border-white/5 rounded-lg px-3 py-1.5 gap-2 cursor-pointer hover:bg-accent-dark transition-colors">
        <span className="text-sm font-medium text-slate-300">Stake:</span>
        <span className="text-sm font-semibold text-white">{selectedStake}</span>
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M7 10l5 5 5-5z"/>
        </svg>
      </div>
    </div>
  );
}