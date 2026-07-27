/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import Footer from './components/Footer';
import HomeTab from './components/Home';
import NotesTab from './components/Notes';
import QuizTab from './components/Quiz';
import ScoreTab from './components/Score';
import SettingsTab from './components/Settings';
import { AppState, Tab } from './types';
import { loadState, saveState } from './store';

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>('home');
  const [state, setState] = useState<AppState>(loadState());

  // Save to local storage whenever state changes
  useEffect(() => {
    saveState(state);
  }, [state]);

  const updateState = (newState: Partial<AppState>) => {
    setState(prev => ({ ...prev, ...newState }));
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <HomeTab state={state} onNavigate={setActiveTab} />;
      case 'notes':
        return <NotesTab state={state} />;
      case 'quiz':
        return <QuizTab state={state} updateState={updateState} />;
      case 'score':
        return <ScoreTab state={state} />;
      case 'settings':
        return <SettingsTab state={state} updateState={updateState} />;
      default:
        return <HomeTab state={state} onNavigate={setActiveTab} />;
    }
  };

  return (
    <div className="bg-slate-200 min-h-screen flex justify-center items-center font-sans antialiased">
      {/* Mobile Device Container Constraint */}
      <div className="w-full h-[100dvh] sm:w-[480px] sm:h-[850px] sm:max-h-[90vh] bg-slate-50 shadow-2xl relative overflow-hidden flex flex-col">
        
        {/* Dynamic Content Area */}
        <div className="content-area flex-1 overflow-hidden relative">
          {renderContent()}
        </div>

        {/* Persistent Footer */}
        <Footer activeTab={activeTab} setActiveTab={setActiveTab} />
        
      </div>
    </div>
  );
}
