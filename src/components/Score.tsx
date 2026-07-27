import { AppState } from '../types';
import { Award, Medal, Star, Target } from 'lucide-react';

export default function ScoreTab({ state }: { state: AppState }) {
  
  const topics = Array.from({ length: 10 }, (_, i) => i + 1);
  
  // Calculate total possible vs earned max score
  const totalMaxPossible = 100; // 10 topics * 10 max
  const earnedMax = topics.reduce((acc, t) => acc + (state.scores[t] || 0), 0);

  const getMedal = (score: number) => {
    if (score === 10) return { icon: '🥇', label: 'Emas Genius', color: 'bg-amber-100 text-amber-800 border-amber-300' };
    if (score >= 8) return { icon: '🥈', label: 'Perak Pakar', color: 'bg-slate-200 text-slate-800 border-slate-300' };
    if (score >= 5) return { icon: '🥉', label: 'Gangsa Pejuang', color: 'bg-orange-100 text-orange-800 border-orange-300' };
    return { icon: '🌱', label: 'Cuba Lagi', color: 'bg-red-50 text-red-700 border-red-200' };
  };

  return (
    <div className="h-full bg-slate-50 flex flex-col animate-fade-in overflow-hidden">
      <div className="bg-[#1E40AF] p-6 pt-8 pb-10 rounded-b-[40px] shadow-lg shrink-0 relative z-10">
        <h2 className="text-2xl font-extrabold text-white flex items-center">
          <Medal className="w-6 h-6 mr-3 text-white/80" />
          Rekod Pencapaian
        </h2>
      </div>

      <div className="p-6 flex-1 overflow-y-auto pb-24">
        {/* Overall Card */}
        <div className="bg-gradient-to-br from-blue-700 to-indigo-800 rounded-3xl p-6 shadow-xl mb-8 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10"></div>
          <div className="flex justify-between items-end mb-4 relative z-10">
            <div>
              <p className="text-blue-200 text-sm font-medium">Bintang Terkumpul</p>
              <div className="flex items-center space-x-2 mt-1">
                <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                <span className="text-3xl font-black">{state.stars.toLocaleString()}</span>
              </div>
            </div>
            <div className="text-right">
              <p className="text-blue-200 text-sm font-medium">Prestasi Global</p>
              <div className="flex items-center justify-end space-x-2 mt-1">
                <Target className="w-5 h-5 text-emerald-400" />
                <span className="text-2xl font-bold">{earnedMax}/{totalMaxPossible}</span>
              </div>
            </div>
          </div>
          
          <div className="w-full bg-blue-900/50 rounded-full h-3 mt-2 overflow-hidden relative z-10">
            <div 
              className="bg-emerald-400 h-3 rounded-full transition-all duration-1000" 
              style={{ width: `${(earnedMax/totalMaxPossible)*100}%` }}
            />
          </div>
        </div>

        {/* Grades List */}
        <h3 className="font-bold text-slate-400 text-[10px] uppercase tracking-[0.2em] mb-4 ml-2">Gred Topik (Terbaik)</h3>
        <div className="space-y-3">
          {topics.map(t => {
            const score = state.scores[t];
            const hasAttempted = score !== undefined;
            const medalInfo = hasAttempted ? getMedal(score) : { icon: '🔒', label: 'Belum Dicuba', color: 'bg-slate-100 text-slate-400 border-slate-200' };

            return (
              <div key={t} className="bg-white p-4 rounded-3xl shadow-sm border border-slate-100 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-2xl bg-blue-50 flex items-center justify-center font-bold text-[#1E40AF] shrink-0">
                    {t}
                  </div>
                  <div>
                    <div className="font-semibold text-slate-700 text-sm">Topik {t}</div>
                    <div className={`text-[9px] font-bold px-2 py-0.5 rounded-full inline-block mt-1 border ${medalInfo.color}`}>
                      {medalInfo.icon} {medalInfo.label}
                    </div>
                  </div>
                </div>
                <div className={`font-black text-xl ${hasAttempted ? 'text-slate-800' : 'text-slate-300'}`}>
                  {hasAttempted ? `${score}/10` : '-'}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
}
