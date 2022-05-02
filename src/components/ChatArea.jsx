import React, { useState } from "react";

const ChatArea = ({ chat }) => {
  const [message, setMessage] = useState("");
  const [userMessages, setUserMessages] = useState([]);

  const handleSendMessage = () => {
    setUserMessages((state) => [...state, message]);
    setMessage("");
  };

  return (
    <div className="chat-area">
      <div className="chat-title-bar">
        <img src={chat.imageURL} alt="product" />
        <p>{chat.title}</p>
      </div>
      <div
        style={{
          width: "80%",
          height: "60vh",
          overflowY: "scroll",
          paddingInline: "1rem",
        }}>
        {chat.messageList.length ? (
          chat.messageList.map((messageObj) => (
            <p
              key={messageObj.timestamp}
              style={{
                marginLeft: messageObj.sender === "BOT" ? 0 : "auto",
                padding: "1rem",
                width: "fit-content",
                backgroundColor:
                  messageObj.sender === "USER" ? "skyblue" : "rgba(0,0,0,.1)",
                borderRadius: "0.5rem",
              }}>
              {messageObj.message}
            </p>
          ))
        ) : (
          <p style={{ textAlign: "center" }}>
            Send a message to start chatting
          </p>
        )}
        {userMessages.length
          ? userMessages.map((message) => (
              <p
                style={{
                  marginLeft: "auto",
                  width: "fit-content",
                  backgroundColor: "skyblue",
                  padding: "1rem",
                  borderRadius: "0.5rem",
                }}>
                {message}
              </p>
            ))
          : null}
      </div>
      <div className="message-input">
        <input
          type="text"
          value={message}
          className="message-box"
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit" onClick={handleSendMessage}>
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatArea;
