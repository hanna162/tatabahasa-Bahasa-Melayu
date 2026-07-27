import { useState } from 'react';
import { SuperBankSoalan } from '../data/questions';
import { AppState, QuestionData } from '../types';
import { CheckCircle2, XCircle, ArrowRight, Trophy, Star, Book } from 'lucide-react';

// Fisher-Yates Shuffle
function shuffleArray<T>(array: T[]): T[] {
  const newArr = [...array];
  for (let i = newArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
  }
  return newArr;
}

interface QuizProps {
  state: AppState;
  updateState: (newState: Partial<AppState>) => void;
}

export default function QuizTab({ state, updateState }: QuizProps) {
  const [selectedTopic, setSelectedTopic] = useState<number | null>(null);
  const [questions, setQuestions] = useState<QuestionData[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  // Generate topics from 1 to 10
  const topics = Array.from({ length: 10 }, (_, i) => i + 1);

  const startQuiz = (topicId: number) => {
    // Filter questions by topic
    const topicQuestions = SuperBankSoalan.filter(q => q.topicId === topicId);
    
    // Shuffle and pick up to 10 questions
    const shuffled = shuffleArray(topicQuestions).slice(0, 10);
    
    // For each question, we also need to shuffle options (only for Pattern A)
    // Wait, keeping track of correct index after shuffle is complex. Let's just shuffle Pattern A options.
    const preparedQuestions = shuffled.map(q => {
      if (q.pattern === 'B') return q; // Keep BENAR/SALAH order
      
      const optionsWithIndices = q.options.map((opt, idx) => ({ text: opt, isCorrect: idx === q.correctIndex }));
      const shuffledOptions = shuffleArray(optionsWithIndices);
      
      return {
        ...q,
        options: shuffledOptions.map(o => o.text),
        correctIndex: shuffledOptions.findIndex(o => o.isCorrect)
      };
    });

    setQuestions(preparedQuestions);
    setSelectedTopic(topicId);
    setCurrentIndex(0);
    setSelectedOption(null);
    setScore(0);
    setIsFinished(false);
  };

  const handleAnswer = (optIndex: number) => {
    if (selectedOption !== null) return; // Prevent double click
    
    setSelectedOption(optIndex);
    const isCorrect = optIndex === questions[currentIndex].correctIndex;
    
    if (isCorrect) {
      setScore(s => s + 1);
      // Give 2 stars per correct answer immediately in background
      updateState({ stars: state.stars + 2 });
    }
  };

  const nextQuestion = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(c => c + 1);
      setSelectedOption(null);
    } else {
      // Finish quiz, update high score
      const currentHighScore = state.scores[selectedTopic!] || 0;
      if (score > currentHighScore) {
        updateState({ 
          scores: { ...state.scores, [selectedTopic!]: score }
        });
      }
      setIsFinished(true);
    }
  };

  if (selectedTopic === null) {
    return (
      <div className="h-full bg-slate-50 flex flex-col animate-fade-in overflow-hidden">
        <div className="bg-[#1E40AF] p-6 pt-8 pb-10 rounded-b-[40px] shadow-lg shrink-0 relative z-10">
          <h2 className="text-2xl font-extrabold text-white flex items-center">
            <Trophy className="w-6 h-6 mr-3 text-white/80" />
            Latihan Tegar
          </h2>
          <p className="text-blue-100 text-sm mt-1">Pilih set untuk mula. 10 soalan rawak.</p>
        </div>
        
        <div className="grid grid-cols-1 gap-3 p-6 flex-1 overflow-y-auto pb-24">
          {topics.map(t => {
            const topicScore = state.scores[t] !== undefined ? state.scores[t] : '-';
            return (
              <button
                key={t}
                onClick={() => startQuiz(t)}
                className="bg-white p-4 rounded-3xl shadow-sm border border-slate-100 flex items-center justify-between hover:border-[#1E40AF]/30 transition active:scale-95 text-left"
              >
                <div>
                  <div className="font-bold text-slate-700">Topik {t}</div>
                  <div className="text-xs text-slate-400 mt-1">Markah Terbaik: {topicScore}/10</div>
                </div>
                <div className="w-10 h-10 bg-blue-50 text-[#1E40AF] rounded-2xl flex items-center justify-center">
                  <ArrowRight className="w-5 h-5" />
                </div>
              </button>
            )
          })}
        </div>
      </div>
    );
  }

  if (isFinished) {
    return (
      <div className="p-6 h-full flex flex-col items-center justify-center bg-slate-50 text-center animate-fade-in">
        <div className="w-32 h-32 bg-[#F59E0B] rounded-full flex items-center justify-center mb-6 shadow-xl border-8 border-white">
           <Trophy className="w-16 h-16 text-white" />
        </div>
        <h2 className="text-3xl font-black text-[#1E40AF] mb-2 uppercase tracking-tight">Tahniah!</h2>
        <p className="text-lg text-slate-600 mb-8 font-semibold">Markah Anda: <span className="font-bold text-[#10B981] text-xl">{score}/{questions.length}</span></p>
        
        <div className="bg-amber-50 border border-amber-200 text-amber-800 px-6 py-4 rounded-3xl mb-8 flex items-center shadow-sm">
          <Star className="w-6 h-6 mr-2 fill-[#F59E0B] text-[#F59E0B]" />
          <span className="font-bold">+{score * 2} Bintang Dikumpul!</span>
        </div>

        <button 
          onClick={() => setSelectedTopic(null)}
          className="bg-[#1E40AF] text-white font-bold py-4 px-8 rounded-full shadow-lg hover:bg-[#1e3a8a] active:scale-95 transition w-full max-w-[250px]"
        >
          Tamat Latihan
        </button>
      </div>
    );
  }

  const q = questions[currentIndex];
  if (!q) return null;

  return (
    <div className="flex flex-col h-full bg-slate-50 overflow-hidden">
      {/* Quiz Header */}
      <div className="bg-[#1E40AF] px-6 py-4 pt-8 pb-10 shadow-lg flex flex-col justify-between relative z-10 rounded-b-[40px] shrink-0">
         <div className="flex justify-between items-center w-full mb-4">
           <div className="font-bold text-blue-100 text-sm tracking-widest uppercase">Soalan {currentIndex + 1} / {questions.length}</div>
         </div>
         <div className="flex space-x-2 w-full justify-between">
           {questions.map((_, i) => (
             <div key={i} className={`flex-1 h-1.5 rounded-full ${i === currentIndex ? 'bg-[#F59E0B]' : i < currentIndex ? 'bg-[#10B981]' : 'bg-white/20'}`} />
           ))}
         </div>
      </div>

      {/* Question Area */}
      <div className={`p-6 flex-1 overflow-y-auto pb-24 ${state.textSize}`}>
        <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 mb-6">
          <h3 className="font-bold text-slate-800 leading-relaxed">{q.text}</h3>
        </div>

        <div className="space-y-3">
          {q.options.map((opt, idx) => {
            let btnClass = "bg-white border-slate-200 text-slate-700 hover:border-[#1E40AF]/30 hover:bg-blue-50";
            let icon = null;

            if (selectedOption !== null) {
              if (idx === q.correctIndex) {
                btnClass = "bg-[#10B981]/10 border-[#10B981] text-[#10B981] font-bold z-10 shadow-sm";
                icon = <CheckCircle2 className="w-5 h-5 text-[#10B981]" />;
              } else if (idx === selectedOption) {
                btnClass = "bg-red-50 border-red-400 text-red-800 opacity-70";
                icon = <XCircle className="w-5 h-5 text-red-500" />;
              } else {
                btnClass = "bg-white border-slate-200 text-slate-400 opacity-50";
              }
            }

            return (
              <button
                key={idx}
                disabled={selectedOption !== null}
                onClick={() => handleAnswer(idx)}
                className={`w-full text-left p-4 rounded-3xl border-2 transition-all duration-300 flex justify-between items-center ${btnClass}`}
              >
                <span>{opt}</span>
                {icon}
              </button>
            )
          })}
        </div>

        {/* Explanation Box */}
        {selectedOption !== null && (
          <div className="mt-8 animate-fade-in-up">
            <div className={`p-5 rounded-3xl border ${selectedOption === q.correctIndex ? 'bg-[#10B981]/10 border-[#10B981]/30' : 'bg-red-50 border-red-200'}`}>
              <div className="flex items-center mb-2">
                <Book className={`w-5 h-5 mr-2 ${selectedOption === q.correctIndex ? 'text-[#10B981]' : 'text-red-600'}`} />
                <span className={`font-bold ${selectedOption === q.correctIndex ? 'text-[#10B981]' : 'text-red-800'}`}>Ulasan Pakar DBP:</span>
              </div>
              <p className="text-slate-700">{q.explanation}</p>
            </div>
            
            <button
              onClick={nextQuestion}
              className="mt-6 w-full bg-[#1E40AF] text-white font-bold py-4 rounded-3xl shadow-lg hover:bg-[#1e3a8a] active:scale-95 transition flex justify-center items-center"
            >
              Seterusnya <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
