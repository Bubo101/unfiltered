import React, { useState } from 'react';
import { FaCat } from 'react-icons/fa'; // Importing the cat icon from react-icons
import './Chat.css';

function Chat({ emotion }) {
  const [inputMessage, setInputMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const squigglyResponses = [
    "Hi there. Today has been a bit rough for me, you know? Just feeling a bit overwhelmed with everything going on.",
    "Thanks for asking. It's just a lot of stuff piling up and my cat is sick...I'm not sure how to handle it all.",
    "That's really nice of you to share that. I'm not sure I trust the current vet and wanted a second opinion anyway.",
    "I really appreciate that, good to know I'm not alone. I could use a friend right now. Want to connect on socials?"
  ];

  const handleSendMessage = () => {
    if (inputMessage.trim() !== '') {
      // Add the user's message to the messages array
      const updatedMessages = [...messages, { sender: 'User', text: inputMessage }];

      // Determine the index for Squiggly's response based on the updated message list length
      const squigglyIndex = Math.floor((updatedMessages.length - 1) / 2);

      // Check if it's time for Squiggly to send a message
      if (squigglyIndex < squigglyResponses.length) {
        setTimeout(() => {
          setMessages([...updatedMessages, { sender: 'Squiggly McWobblepants', text: squigglyResponses[squigglyIndex] }]);
        }, 500); // Wait half a second to simulate typing
      }

      setInputMessage(''); // Clear the input field after sending a message
      setMessages(updatedMessages); // Update state with new message
    }
  };

  const handleConnect = () => {
    // Placeholder function for connecting
    alert('Connect feature is not implemented yet.');
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

  return (
    <div className="chat-container">
      <div className="special-message">
        <FaCat className="chat-icon" />
        <span className="username">Squiggly McWobblepants</span>&nbsp; is sad today. Cheer them up!
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
          placeholder="Start by saying how YOUR day is going!"
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
