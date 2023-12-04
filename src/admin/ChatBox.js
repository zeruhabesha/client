import React, { useState } from 'react';

function ChatBox() {
  const [chatLogs, setChatLogs] = useState([]);
  const [message, setMessage] = useState('');

  const sendMessage = (e) => {
    e.preventDefault();
    if (message.trim() === '') {
      return;
    }
    generateMessage(message, 'self');
    setTimeout(() => {
      generateMessage(message, 'user');
    }, 1000);
    setMessage('');
  };

  const generateMessage = (msg, type) => {
    const chatLog = {
      msg,
      type,
    };
    setChatLogs((prevLogs) => [...prevLogs, chatLog]);
  };

  return (
    <div id="body">
      <div id="chat-circle" className="btn btn-raised">
        <div id="chat-overlay"></div>
        <i className="material-icons">speaker_phone</i>
      </div>
      <div className="chat-box">
        <div className="chat-box-header">
          ChatBot
          <span className="chat-box-toggle">
            <i className="material-icons">close</i>
          </span>
        </div>
        <div className="chat-box-body">
          <div className="chat-box-overlay"></div>
          <div className="chat-logs">
            {chatLogs.map((log, index) => (
              <div
                key={index}
                className={`chat-msg ${log.type === 'self' ? 'self' : 'user'}`}
              >
                <span className="msg-avatar">
                  <img src="https://image.crisp.im/avatar/operator/196af8cc-f6ad-4ef7-afd1-c45d5231387c/240/?1483361727745" />
                </span>
                <div className="cm-msg-text">{log.msg}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="chat-input">
          <form onSubmit={sendMessage}>
            <input
              type="text"
              id="chat-input"
              placeholder="Send a message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button type="submit" className="chat-submit" id="chat-submit">
              <i className="material-icons">send</i>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ChatBox;