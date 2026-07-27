import { AppState } from '../types';
import { Star, BookOpen, CheckCircle } from 'lucide-react';

interface HomeProps {
  state: AppState;
  onNavigate: (tab: any) => void;
}

export default function HomeTab({ state, onNavigate }: HomeProps) {
  const topicsCompleted = Object.values(state.scores).filter(s => s >= 5).length;
  const progressPercent = Math.round((topicsCompleted / 10) * 100);

  return (
    <div className="h-full flex flex-col animate-fade-in overflow-hidden pb-20">
      {/* Header Section */}
      <div className="bg-[#1E40AF] p-6 pt-8 pb-10 rounded-b-[40px] shadow-lg relative shrink-0">
        <div className="flex justify-between items-center mb-4">
          <div className="flex flex-col">
            <span className="text-blue-100 text-xs font-semibold uppercase tracking-wider">Selamat Datang</span>
            <h1 className="text-white text-2xl font-black tracking-tight leading-none">PELAJAR HEBAT</h1>
          </div>
          <div className="flex items-center bg-white/20 px-3 py-1.5 rounded-full">
            <span className="text-[#F59E0B] text-xl mr-1">★</span>
            <span className="text-white font-bold">{state.stars.toLocaleString()}</span>
          </div>
        </div>
        
        {/* Search/Status Bar */}
        <div className="bg-white rounded-2xl p-4 shadow-xl flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-[#F59E0B] flex items-center justify-center text-2xl border-4 border-amber-100 shadow-inner">🥇</div>
          <div className="flex flex-col flex-1">
            <span className="text-slate-800 font-bold text-sm leading-tight">Pingat Emas Genius</span>
            <div className="w-full h-2 bg-slate-100 rounded-full mt-1.5 overflow-hidden">
              <div className="h-full bg-[#10B981]" style={{ width: `${progressPercent}%` }}></div>
            </div>
            <span className="text-[10px] text-slate-400 mt-1 uppercase font-bold">{progressPercent}% Selesai • Topik {topicsCompleted}/10</span>
          </div>
        </div>
      </div>

      {/* Main Content (SPA - Utama Screen) */}
      <div className="flex-1 p-5 overflow-y-auto">
        <h2 className="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em] mb-4">Modul Pembelajaran DBP</h2>
        
        <div className="grid grid-cols-2 gap-4">
          {/* Topic Card 1 - Notes */}
          <button onClick={() => onNavigate('notes')} className="bg-white p-4 rounded-3xl border border-slate-100 shadow-sm flex flex-col items-center text-center hover:bg-slate-50 transition active:scale-95">
            <div className="w-14 h-14 bg-blue-50 text-[#1E40AF] rounded-2xl flex items-center justify-center mb-3">
               <BookOpen className="w-7 h-7" />
            </div>
            <h3 className="text-slate-800 text-xs font-bold leading-tight">Nota Kompendium</h3>
            <span className="bg-[#10B981]/10 text-[#10B981] text-[9px] font-bold px-2 py-0.5 rounded-full mt-2">TERSEDIA</span>
          </button>

          {/* Topic Card 2 - Latihan */}
          <button onClick={() => onNavigate('quiz')} className="bg-[#1E40AF] p-4 rounded-3xl shadow-blue-200 shadow-lg flex flex-col items-center text-center hover:bg-[#1e3a8a] transition active:scale-95">
            <div className="w-14 h-14 bg-white/20 text-white rounded-2xl flex items-center justify-center mb-3">
               <CheckCircle className="w-7 h-7" />
            </div>
            <h3 className="text-white text-xs font-bold leading-tight">Latihan Tegar</h3>
            <span className="bg-white text-[#1E40AF] text-[9px] font-bold px-2 py-0.5 rounded-full mt-2">CADANGAN</span>
          </button>
        </div>

        {/* Tip of the day */}
        <div className="mt-6 p-4 bg-amber-50 rounded-2xl border-l-4 border-[#F59E0B] flex items-start gap-3">
          <span className="text-xl">💡</span>
          <div>
            <p className="text-slate-700 text-[11px] font-semibold italic">"Awas Kesalahan Lazim: Gunakan 'antara' untuk perbandingan, bukannya 'di antara' bagi konsep abstrak."</p>
            <p className="text-[#F59E0B] text-[9px] font-bold uppercase mt-1">Rujukan DBP</p>
          </div>
        </div>
      </div>
    </div>
  );
}
