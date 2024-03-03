import React, { useState } from 'react';
import { FaCat } from 'react-icons/fa'; // Importing the cat icon from react-icons
import './Chat.css';
import Social from './Social';

function Chat({ emotion }) {
  const [inputMessage, setInputMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [initialMessageSent, setInitialMessageSent] = useState(false); // Add this line to track if the initial message is sent
  const [showSocialPopup, setShowSocialPopup] = useState(false);
  const [connectionMeter, setConnectionMeter] = useState(0);


  const squigglyResponses = [
    "Hi there. Today has been a bit rough for me, you know? Just feeling a bit overwhelmed with everything going on.",
    "Thanks for asking. It's just a lot of stuff piling up and my cat is sick...I'm not sure how to handle it all.",
    "That's really nice of you to share that. I'm not sure I trust the current vet and wanted a second opinion anyway.",
    "I really appreciate that, good to know I'm not alone. I could use a friend right now. Want to connect on socials?"
  ];

  const handleSendMessage = () => {
    if (inputMessage.trim() !== '') {
      // Immediately add the user's message to the messages array
      setMessages(currentMessages => [...currentMessages, { sender: 'User', text: inputMessage }]);
  
      // Update the connection meter by 10% for the user's message
      setConnectionMeter(prevMeter => Math.min(100, prevMeter + 10));
  
      // Determine the index for Squiggly's response based on the future messages length
      const futureMessageCount = messages.length + 1; // Including the new user message
      const squigglyIndex = Math.floor(futureMessageCount / 2);
  
      if (squigglyIndex < squigglyResponses.length) {
        setTimeout(() => {
          setMessages(currentMessages => [...currentMessages, { sender: 'Squiggly McWobblepants', text: squigglyResponses[squigglyIndex] }]);
          // Update the connection meter by 10% for Squiggly's response inside setTimeout
          setConnectionMeter(prevMeter => Math.min(100, prevMeter + 10));
        }, 1000); // 1-second delay for Squiggly's response
      }
  
      setInputMessage(''); // Clear the input field after sending a message
      setInitialMessageSent(true); // Mark the initial message as sent
    }
  };
  
  

  const handleConnect = () => {
    setShowSocialPopup(true); // This will now trigger the Social popup to be shown
  };

  const handleExit = () => {
    // Placeholder function for exiting the chat
    alert('Exit feature is not implemented yet.');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const handleConfirmSocialShare = () => {
    // Logic to handle confirmation
    setShowSocialPopup(false);
    alert('Social media information shared!');
  };
  
  const handleCancelSocialShare = () => {
    setShowSocialPopup(false);
  };
  

  return (
    <div className="chat-container">
            <Social
      isVisible={showSocialPopup}
      onConfirm={handleConfirmSocialShare}
      onCancel={handleCancelSocialShare}
    />
      <div className="special-message">
        <FaCat className="chat-icon" />
        <span className="username">Squiggly McWobblepants</span>&nbsp; is sad today. Cheer them up!
      </div>
      <div className='m-text'>CONNECTION METER</div>
      <div className="connection-meter">
    <div className="meter-fill" style={{ width: `${connectionMeter}%` }}></div>
  </div>
      <div className="chat-window">
        {messages.map((message, index) => (
          // Remove the sender prefix from the messages
          <div key={index} className={`message ${message.sender === 'User' ? 'user' : 'friend'}`}>
            {message.text}
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          placeholder={!initialMessageSent ? "Start by saying how YOUR day is going!" : ""}
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
        />
        <button onClick={handleSendMessage}>SEND</button>
      </div>
      <div className="chat-actions">
        <button onClick={handleConnect}>CONNECT SOCIALS</button>
        <button onClick={handleExit}>EXIT CHAT</button>
      </div>
    </div>
  );
}

export default Chat;
