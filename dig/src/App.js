import "./App.css";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Demo from "./Components/Demo/Demo";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Patents from "./Components/Patents/Patents";
import Sponsors from "./Components/Sponsors/Sponsors";
import Team from "./Components/Team/Team";
import animationDatas from "../src/lotties/mosquito.json";
import settingsdata from "../src/lotties/settings.json";
import Lottie from "react-lottie";
import React from "react";
import AnimatedCursor from "react-animated-cursor";
import { AiTwotoneMessage } from "react-icons/ai";

// import Chatbot from "../src/Components/Chatbot/Chatbot";
import ChatBot from "../src/Components/Chatbot/Chatbot";

function App() {
  const [isChatOpen, setIsChatOpen] = React.useState(false);
  const [isThemeSelectorOpen, setIsThemeSelectorOpen] = React.useState(false);
  return (
    <div className="App">
      <Navbar />
      <About />

      <Demo />
      <Team />
      <Sponsors />
      <Patents />
      <Contact />
      <Footer />
      {settingsdata && (
        <a onClick={() => setIsThemeSelectorOpen(true)}>
          <div
            style={{
              width: "4%",
              position: "fixed",
              bottom: 50,
              left: 20,
              backgroundColor: "#DDD9D9",
              borderRadius: "50%",
              padding: 10,
              zIndex: 1,
            }}
            onMouseEnter={() =>
              setIsThemeSelectorOpen((prevState) => !prevState)
            }
          >
            <Lottie
              options={{ animationData: settingsdata }}
              eventListeners={[{}]}
            />
          </div>
        </a>
      )}
      {isThemeSelectorOpen && (
        <div
          style={{
            height: 220,
            width: 50,
            backgroundColor: "#C3E0F6",
            position: "fixed",
            bottom: 100,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            left: 30,
            zIndex: 0,
          }}
          onMouseLeave={() => setIsThemeSelectorOpen(false)}
        >
          <div
            style={{
              backgroundColor: "black",
              height: 20,
              width: 20,
              padding: "auto",
              margin: "auto",
              marginBottom: 20,
              marginTop: 40,
              borderRadius: "50%",
            }}
          ></div>
          <div
            style={{
              backgroundColor: "#5C8AAE",
              height: 20,
              width: 20,
              padding: "auto",
              margin: "auto",
              marginBottom: 20,
              borderRadius: "50%",
            }}
          ></div>
          <div
            style={{
              backgroundColor: "purple",
              height: 20,
              width: 20,
              padding: "auto",
              margin: "auto",
              marginBottom: 20,
              borderRadius: "50%",
            }}
          ></div>
          <div
            style={{
              backgroundColor: "white",
              height: 20,
              width: 20,
              padding: "auto",
              margin: "auto",
              marginBottom: 20,
              borderRadius: "50%",
            }}
          ></div>
        </div>
      )}
      {animationDatas && (
        <a>
          <div
            style={{
              width: "160px",
              height: "160px",
              position: "fixed",
              bottom: 0,
              // zIndex: "1",
              padding: 10,
              borderRadius: "50%",
              // backgroundColor: "#DDD9D9",
              right: 20,
            }}
            onClick={() => setIsChatOpen(true)}
          >
            <AiTwotoneMessage size={120} color="#5C8AAE" />
            <div
              style={{ position: "absolute", top: 10, left: 30, width: 100 }}
            >
              <Lottie
                options={{ animationData: animationDatas }}
                eventListeners={[{}]}
              />
            </div>
          </div>
        </a>
      )}
      {isChatOpen && (
        <ChatBot setIsChatOpen={setIsChatOpen} isChatOpen={isChatOpen} />
      )}
    </div>
  );
}

export default App;
