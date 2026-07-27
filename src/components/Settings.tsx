import { AppState, TextSize } from '../types';
import { Type, Save } from 'lucide-react';
import { useState } from 'react';

interface SettingsProps {
  state: AppState;
  updateState: (newState: Partial<AppState>) => void;
}

export default function SettingsTab({ state, updateState }: SettingsProps) {
  const [showToast, setShowToast] = useState(false);

  const sizes: { id: TextSize; label: string; desc: string }[] = [
    { id: 'text-sm', label: 'Kecil', desc: 'Sesuai untuk membaca sekilas.' },
    { id: 'text-base', label: 'Normal (Lalai)', desc: 'Saiz standard optimum.' },
    { id: 'text-lg', label: 'Besar', desc: 'Jelas dan mudah dibaca.' },
    { id: 'text-xl', label: 'Sangat Besar', desc: 'Untuk kebolehcapaian maksimum.' },
  ];

  const handleSelect = (id: TextSize) => {
    updateState({ textSize: id });
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };

  return (
    <div className="h-full bg-slate-50 flex flex-col animate-fade-in overflow-hidden relative">
      <div className="bg-[#1E40AF] p-6 pt-8 pb-10 rounded-b-[40px] shadow-lg shrink-0 relative z-10">
        <h2 className="text-2xl font-extrabold text-white flex items-center">
          <Type className="w-6 h-6 mr-3 text-white/80" />
          Aksesibiliti & Tetapan
        </h2>
        <p className="text-blue-100 text-sm mt-1">Ubah saiz tulisan e-nota dan soalan kuiz.</p>
      </div>

      <div className="space-y-4 p-6 flex-1 overflow-y-auto pb-24">
        {sizes.map(size => (
          <button
            key={size.id}
            onClick={() => handleSelect(size.id)}
            className={`w-full text-left p-5 rounded-3xl border-2 transition-all ${
              state.textSize === size.id 
                ? 'border-[#1E40AF] bg-blue-50 shadow-sm' 
                : 'border-slate-200 bg-white hover:border-blue-300'
            }`}
          >
            <div className="flex justify-between items-center mb-1">
              <span className="font-bold text-slate-800">{size.label}</span>
              {state.textSize === size.id && <Save className="w-5 h-5 text-[#1E40AF]" />}
            </div>
            <p className="text-slate-500 text-sm">{size.desc}</p>
            
            {/* Preview text */}
            <div className={`mt-4 p-3 bg-white rounded-xl border border-slate-100 ${size.id} text-slate-700 italic`}>
              "Contoh paparan tulisan untuk saiz ini."
            </div>
          </button>
        ))}
      </div>

      {/* Toast Notification */}
      <div className={`absolute bottom-32 left-1/2 -translate-x-1/2 bg-slate-800 text-white px-6 py-3 rounded-full font-medium shadow-lg transition-opacity duration-300 ${showToast ? 'opacity-100' : 'opacity-0 pointer-events-none'} z-50`}>
        Tetapan Disimpan!
      </div>
    </div>
  );
}
