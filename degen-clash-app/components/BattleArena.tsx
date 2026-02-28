interface Player {
  id: string;
  name: string;
  avatar: string;
  entry: string;
  prediction: 'UP' | 'DOWN';
  dominance: number;
}

interface BattleArenaProps {
  player1: Player;
  player2: Player;
}

export default function BattleArena({ player1, player2 }: BattleArenaProps) {
  return (
    <div className="grid grid-cols-11 items-center gap-4">
      {/* Player 1 */}
      <div className="col-span-4 glass p-6 rounded-xl flex items-center gap-6 border-l-4 border-primary">
        <div className="relative">
          <div 
            className="w-16 h-16 rounded-xl bg-cover bg-center bg-slate-700"
            style={{ backgroundImage: player1.avatar ? `url(${player1.avatar})` : 'none' }}
          />
          <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-background-dark rounded-lg flex items-center justify-center font-bold">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>
            </svg>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-bold">{player1.name}</h3>
          <p className="text-sm text-slate-400">
            Entry: <span className="text-white">{player1.entry}</span>
          </p>
          <div className="mt-2 text-xs font-bold text-primary uppercase">
            Prediction: {player1.prediction}
          </div>
        </div>
      </div>

      {/* VS Section */}
      <div className="col-span-3 flex flex-col items-center justify-center">
        <div className="text-5xl font-black text-primary/20 italic tracking-tighter">VS</div>
        <div className="w-full mt-4 h-2 bg-slate-800 rounded-full overflow-hidden flex">
          <div 
            className="h-full bg-primary shadow-[0_0_10px_#25f425]" 
            style={{ width: `${player1.dominance}%` }}
          />
          <div 
            className="h-full bg-danger shadow-[0_0_10px_#ff4d4d]" 
            style={{ width: `${player2.dominance}%` }}
          />
        </div>
        <div className="flex justify-between w-full mt-2 text-[10px] font-bold uppercase tracking-widest">
          <span className="text-primary">{player1.dominance}% Dominance</span>
          <span className="text-danger">{player2.dominance}%</span>
        </div>
      </div>

      {/* Player 2 */}
      <div className="col-span-4 glass p-6 rounded-xl flex items-center justify-end gap-6 border-r-4 border-danger text-right">
        <div>
          <h3 className="text-lg font-bold">{player2.name}</h3>
          <p className="text-sm text-slate-400">
            Entry: <span className="text-white">{player2.entry}</span>
          </p>
          <div className="mt-2 text-xs font-bold text-danger uppercase">
            Prediction: {player2.prediction}
          </div>
        </div>
        <div className="relative">
          <div 
            className="w-16 h-16 rounded-xl bg-cover bg-center bg-slate-700"
            style={{ backgroundImage: player2.avatar ? `url(${player2.avatar})` : 'none' }}
          />
          <div className="absolute -top-2 -left-2 w-8 h-8 bg-danger text-white rounded-lg flex items-center justify-center font-bold">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M16 18l2.29-2.29-4.88-4.88-4 4L2 7.41 3.41 6l6 6 4-4 6.3 6.29L22 12v6z"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}