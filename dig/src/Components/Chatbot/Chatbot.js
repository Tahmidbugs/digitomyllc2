import React, { useRef } from "react";
import { FaTimes } from "react-icons/fa";
import { BiPaperPlane } from "react-icons/bi";
import "./chatbot.css";
import axios from "axios";
const ChatBot = ({ setIsChatOpen, isChatOpen }) => {
  const [message, setMessage] = React.useState("");
  const [messages, setMessages] = React.useState([
    { message: "Hello! How may I be of service?", sender: "bot" },
  ]);
  const [isTyping, setIsTyping] = React.useState(false);
  const messageContainerRef = useRef(null);
  const handleMessage = (event) => {
    setMessage(event.target.value);
  };
  React.useEffect(() => {
    if (messageContainerRef.current) {
      messageContainerRef.current.scrollTop =
        messageContainerRef.current.scrollHeight;
    }
  }, [messages]);

  async function handleSubmit() {
    // Add the user's message to the messages state immediately
    setMessages([...messages, { message: message, sender: "user" }]);
    console.log(messages);
    setIsTyping(true);

    try {
      const response = await axios.post(
        "https://digitomy.onrender.com/detectIntent",
        {
          userInput: message,
          languageCode: "en-US",
        }
      );
      console.log(messages);
      setIsTyping(false);
      setMessages([
        ...messages,
        { message: message, sender: "user" },
        { message: response.data.message, sender: "bot" },
      ]);
      console.log(messages);
      console.log("SUCCESSFUL");

      setMessage("");
    } catch (error) {
      console.error("ERRORRR:", error);
      setIsTyping(false);
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
            <div className="message-container" ref={messageContainerRef}>
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
            {isTyping && (
              <div className="bot-message" style={{ width: 40 }}>
                <div className="bot-typing-animation">
                  <div className="dot1"></div>
                  <div className="dot2"></div>
                  <div className="dot3"></div>
                </div>
              </div>
            )}
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
