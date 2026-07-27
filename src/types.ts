import React from 'react';

export interface NoteData {
  id: number;
  title: string;
  content: React.ReactNode;
}

export interface QuestionData {
  id: string;
  topicId: number;
  pattern: 'A' | 'B'; 
  text: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export type TextSize = 'text-sm' | 'text-base' | 'text-lg' | 'text-xl';

export interface AppState {
  stars: number;
  scores: Record<number, number>; 
  textSize: TextSize;
}

export type Tab = 'home' | 'notes' | 'quiz' | 'score' | 'settings';
