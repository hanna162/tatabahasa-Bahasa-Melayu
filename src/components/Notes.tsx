import { useState } from 'react';
import { NotaKompendium } from '../data/notes';
import { AppState, NoteData } from '../types';
import { ChevronLeft, Book } from 'lucide-react';

export default function NotesTab({ state }: { state: AppState }) {
  const [selectedNote, setSelectedNote] = useState<NoteData | null>(null);

  if (selectedNote) {
    return (
      <div className="h-full flex flex-col bg-slate-50 animate-fade-in overflow-hidden">
        {/* Detail Header */}
        <div className="bg-[#1E40AF] p-4 pt-8 pb-10 text-white flex items-center shadow-lg relative z-10 rounded-b-[40px] shrink-0">
          <button 
            onClick={() => setSelectedNote(null)}
            className="p-2 mr-3 bg-white/20 rounded-full hover:bg-white/30 transition"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <h2 className="font-bold text-lg leading-tight flex-1">{selectedNote.title}</h2>
        </div>
        
        {/* Detail Content */}
        <div className={`p-6 flex-1 overflow-y-auto pb-24 ${state.textSize} text-slate-800 leading-relaxed`}>
          {selectedNote.content}
        </div>
      </div>
    );
  }

  return (
    <div className="h-full bg-slate-50 flex flex-col animate-fade-in overflow-hidden">
      <div className="bg-[#1E40AF] p-6 pt-8 pb-10 rounded-b-[40px] shadow-lg shrink-0 relative z-10">
        <h2 className="text-2xl font-extrabold text-white flex items-center">
          <Book className="w-6 h-6 mr-3 text-white/80" />
          Kompendium Nota
        </h2>
        <p className="text-blue-100 text-sm mt-1">Pilih topik untuk rujukan DBP & KPM.</p>
      </div>

      <div className="space-y-3 p-6 flex-1 overflow-y-auto pb-24">
        {NotaKompendium.map((note) => (
          <button
            key={note.id}
            onClick={() => setSelectedNote(note)}
            className="w-full text-left bg-white p-5 rounded-3xl shadow-sm border border-slate-100 flex items-center justify-between hover:shadow-md transition active:scale-[0.98]"
          >
            <span className="font-semibold text-slate-700 text-[15px]">{note.title}</span>
            <ChevronLeft className="w-5 h-5 text-slate-400 rotate-180" />
          </button>
        ))}
      </div>
    </div>
  );
}
