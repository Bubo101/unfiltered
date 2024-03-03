import React from 'react';
import { FaInstagram, FaFacebook, FaTwitter, FaSnapchatGhost } from 'react-icons/fa';
import './Social.css'; // Assuming you'll create a CSS file for styling

function Social({ isVisible, onConfirm, onCancel }) {
  if (!isVisible) return null;

  return (
    <div className="social-popup">
      <div className="social-content">
        <p>Are you sure you want to share your social media information?</p>
        <div className="social-icons">
          <FaInstagram className="s-icon" />
          <FaFacebook className="s-icon" />
          <FaTwitter className="s-icon" />
          <FaSnapchatGhost className="s-icon" />
        </div>
        <div className="social-actions">
          <button onClick={onConfirm}>Yes</button>
          <button onClick={onCancel}>No</button>
        </div>
      </div>
    </div>
  );
}

export default Social;
