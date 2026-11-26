import { useEffect, useState } from "react";
import Envelope from "./components/Envelope.jsx";
import Balloons from "./components/Balloons.jsx";
import Letter from "./components/Letter.jsx";
import FloatingHearts from "./components/FloatingHearts.jsx";
import ImageAutoSlider from "./components/ui/ImageAutoSlider.jsx";
import "./App.css";

// How long the balloons float before the letter appears (ms)
const LETTER_DELAY = 2600;

function App() {
  // closed -> balloons -> letter
  const [stage, setStage] = useState("closed");

  useEffect(() => {
    if (stage !== "balloons") return;
    const timer = setTimeout(() => setStage("letter"), LETTER_DELAY);
    return () => clearTimeout(timer);
  }, [stage]);

  const isOpen = stage !== "closed";

  return (
    <div className="birthday-container">
      <FloatingHearts />

      <h1>Happy Birthday, My Love ❤️</h1>

      <p className="subtitle">I have something special for you...</p>

      <Envelope
        isOpen={isOpen}
        onToggle={() => setStage(isOpen ? "closed" : "balloons")}
      />

      <p className="instruction">
        {isOpen
          ? "Your surprise is waiting for you ❤️"
          : "Click the envelope to open your surprise 💌"}
      </p>

      <ImageAutoSlider />

      {isOpen && <Balloons />}
      {stage === "letter" && <Letter onClose={() => setStage("closed")} />}
    </div>
  );
}

export default App;
