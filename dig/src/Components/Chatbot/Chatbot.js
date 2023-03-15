import React from "react";
import { FaTimes } from "react-icons/fa";
import { BiPaperPlane } from "react-icons/bi";
import "./chatbot.css";
import axios from "axios";
const ChatBot = ({ setIsChatOpen, isChatOpen }) => {
  const [message, setMessage] = React.useState("");
  const [messages, setMessages] = React.useState([
    { message: "Hello! How may I be of service?", sender: "bot" },
  ]);

  const handleMessage = (event) => {
    setMessage(event.target.value);
    if (event.key === "Enter") {
      handleSubmit();
    }
  };
  console.log(messages);
  async function handleSubmit() {
    try {
      const response = await axios.post("http://localhost:8800/detectIntent", {
        userInput: message,
        languageCode: "en-US",
      });

      setMessages([
        ...messages,
        { message: message, sender: "user" },
        { message: response.data.message, sender: "bot" },
      ]);
      console.log("SUCCESSFUL");

      setMessage("");
    } catch (error) {
      console.error("ERRORRR:", error);
      // Handle the error here
    }
  }

  return (
    <div className={`chat-container ${isChatOpen ? "glow" : ""}`}>
      {isChatOpen && (
        <>
          <div className="chat-header">
            <h5>Digitomy_Bot</h5>
            <a>
              <FaTimes
                onClick={() => {
                  setIsChatOpen(!isChatOpen);
                }}
                size={30}
                style={{ cursor: "pointer" }}
              />
            </a>
          </div>
          <div className="chat-body">
            <div className="message-container">
              {messages.map((item, index) => (
                <div
                  className={`${
                    item.sender === "user" ? "user-message" : "bot-message"
                  }`}
                  key={index}
                >
                  <p>{item.message}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="chat-footer">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <input
                type="text"
                value={message}
                autoFocus
                onChange={handleMessage}
                placeholder="Type your message"
                style={{
                  width: "90%",
                  color: "black",
                  height: 20,
                  marginRight: 20,
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleSubmit();
                  }
                }}
              />
              <a>
                <BiPaperPlane
                  size={40}
                  style={{ marginBottom: 20, cursor: "pointer" }}
                  class="icon"
                  onClick={handleSubmit}
                />
              </a>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ChatBot;
