// Breathing.js
import React, { useEffect } from 'react';
import './Breathing.css';

function Breathing({ onComplete }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 12000); // Move to the next page after 9 seconds

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="breathing-container">
      <div className="circle"></div>
      <p>Take 3 Deep Breaths...</p>
    </div>
  );
}

export default Breathing;
