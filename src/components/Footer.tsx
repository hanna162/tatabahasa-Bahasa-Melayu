import React, { useEffect, useState } from 'react';
import { BookOpen, CheckCircle, Home, Settings, Trophy } from 'lucide-react';
import { Tab } from '../types';

interface FooterProps {
  activeTab: Tab;
  setActiveTab: (tab: Tab) => void;
}

export default function Footer({ activeTab, setActiveTab }: FooterProps) {
  const tabs: { id: Tab; label: string; icon: React.ReactNode }[] = [
    { id: 'home', label: 'Utama', icon: <Home className="w-5 h-5" /> },
    { id: 'notes', label: 'Nota', icon: <BookOpen className="w-5 h-5" /> },
    { id: 'quiz', label: 'Latihan', icon: <CheckCircle className="w-5 h-5" /> },
    { id: 'score', label: 'Skor', icon: <Trophy className="w-5 h-5" /> },
    { id: 'settings', label: 'Tetapan', icon: <Settings className="w-5 h-5" /> },
  ];

  return (
    <div className="bg-white border-t border-slate-100 h-[80px] flex items-center justify-around px-4 pb-2 z-50 absolute bottom-0 left-0 w-full">
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex flex-col items-center gap-1 cursor-pointer transition-all ${
              isActive ? 'opacity-100' : 'opacity-40 hover:opacity-100'
            }`}
          >
            <div className={`w-10 h-10 flex items-center justify-center ${isActive ? 'bg-blue-50 text-[#1E40AF] rounded-xl' : 'text-slate-500'}`}>
              {tab.icon}
            </div>
            <span className={`text-[9px] font-bold ${isActive ? 'text-[#1E40AF]' : 'text-slate-500'}`}>
              {tab.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}
