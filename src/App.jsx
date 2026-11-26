
import { useState } from "react";
import "./App.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const handleEnvelopeClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="birthday-container">

      <h1>Happy Birthday, MaMakhoe ❤️</h1>

      <p className="subtitle">
        I have something special for you...
      </p>

      <div
        className={`envelope-container ${isOpen ? "open" : ""}`}
        onClick={handleEnvelopeClick}
      >
        <div className="envelope">

          <div className="letter">
            <p>To My Love ❤️</p>
          </div>

          <div className="envelope-flap"></div>

          <div className="envelope-front"></div>

        </div>
      </div>


      <p className="instruction">
        {isOpen
          ? "Your surprise is waiting for you ❤️"
          : "Click the envelope to open your surprise 💌"}
      </p>

    </div>
  );
}

export default App;
