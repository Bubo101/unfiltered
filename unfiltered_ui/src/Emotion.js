// Emotion.js
import React from 'react';
import './Emotion.css';
import { FaSmile, FaMeh, FaSadTear } from 'react-icons/fa'; // Importing specific icons

function Emotion({ onSelect }) {
  return (
    <div className="emotion-container">
      <p>How are you feeling today?</p>
      <div className="emotion-icons">
        <FaSmile className="emo-icon smiley" onClick={() => onSelect('happy')} />
        <FaMeh className="emo-icon meh" onClick={() => onSelect('meh')} />
        <FaSadTear className="emo-icon sad" onClick={() => onSelect('sad')} />
      </div>
    </div>
  );
}

export default Emotion;
