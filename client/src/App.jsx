// client/src/App.jsx

// import React from 'react';
import TypingTest from './components/TypingTest';
import Timer from './components/Timer';
import ResultsDisplay from './components/ResultsDisplay';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold mb-8">JyldamJaz - Kazakh Typing Race</h1>
      <Timer />
      <TypingTest />
      <ResultsDisplay />
    </div>
  );
}

export default App;
