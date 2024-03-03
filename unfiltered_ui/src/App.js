// App.js
import React, { useState } from 'react';
import './App.css';
import Breathing from './Breathing';
import Emotion from './Emotion';
import Chat from './Chat';

function App() {
  const [page, setPage] = useState('breathing');
  const [emotion, setEmotion] = useState('');

  const renderPage = () => {
    switch (page) {
      case 'breathing':
        return <Breathing onComplete={() => setPage('emotion')} />;
      case 'emotion':
        return <Emotion onSelect={(e) => { setEmotion(e); setPage('chat'); }} />;
      case 'chat':
        return <Chat emotion={emotion} />;
      default:
        return <Breathing onComplete={() => setPage('emotion')} />;
    }
  };

  return (
    <div className="App">
      {renderPage()}
    </div>
  );
}

export default App;
