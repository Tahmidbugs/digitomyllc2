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
import Lottie from "react-lottie";

function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      {animationDatas && (
        <a>
          <div
            style={{
              width: "8%",
              position: "fixed",
              bottom: 50,
              zIndex: "1",
              right: 20,
            }}
            // onClick={() => setIsChatOpen(true)}
          >
            <Lottie
              options={{ animationData: animationDatas }}
              eventListeners={[{}]}
            />
          </div>
        </a>
      )}
      <Demo />
      <Team />
      <Sponsors />
      <Patents />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
