'use client';

interface BattleActionsProps {
  networkFee: string;
  platformId: string;
  onDoubleDown?: () => void;
  onShare?: () => void;
  onSurrender?: () => void;
}

export default function BattleActions({ 
  networkFee, 
  platformId, 
  onDoubleDown, 
  onShare, 
  onSurrender 
}: BattleActionsProps) {
  return (
    <div className="flex flex-col gap-3">
      {/* Double Down Button */}
      <button 
        onClick={onDoubleDown}
        className="w-full glass hover:bg-primary/20 border border-primary/30 p-4 rounded-xl flex items-center justify-between transition-all group"
      >
        <div className="flex items-center gap-3">
          <svg className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
            <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>
          </svg>
          <div className="text-left">
            <p className="font-bold text-sm">Double Down</p>
            <p className="text-[10px] text-slate-400">Increase stake by 100%</p>
          </div>
        </div>
        <svg className="w-5 h-5 text-slate-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
        </svg>
      </button>

      {/* Share Button */}
      <button 
        onClick={onShare}
        className="w-full glass hover:bg-white/10 border border-white/10 p-4 rounded-xl flex items-center justify-between transition-all group"
      >
        <div className="flex items-center gap-3">
          <svg className="w-5 h-5 text-slate-100 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"/>
          </svg>
          <div className="text-left">
            <p className="font-bold text-sm">Share Battle</p>
            <p className="text-[10px] text-slate-400">Invite friends to watch</p>
          </div>
        </div>
        <svg className="w-5 h-5 text-slate-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
        </svg>
      </button>

      {/* Surrender Button */}
      <button 
        onClick={onSurrender}
        className="w-full bg-danger/10 hover:bg-danger text-danger hover:text-white border border-danger/30 p-4 rounded-xl font-bold transition-all mt-4"
      >
        SURRENDER (50% Loss)
      </button>

      {/* Network Info */}
      <div className="mt-auto glass p-4 rounded-xl">
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs text-slate-400">Network Fee</span>
          <span className="text-xs font-mono">{networkFee}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-xs text-slate-400">Platform ID</span>
          <span className="text-xs font-mono">{platformId}</span>
        </div>
      </div>
    </div>
  );
}