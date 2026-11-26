function Envelope({ isOpen, onToggle }) {
  return (
    <div
      className={`envelope-container ${isOpen ? "open" : ""}`}
      onClick={onToggle}
      role="button"
      tabIndex={0}
      aria-label={isOpen ? "Close the envelope" : "Open the envelope"}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onToggle();
        }
      }}
    >
      <div className="envelope">
        <div className="letter">
          <p className="letter-title">To My Love ❤️</p>
        </div>
        <div className="envelope-flap"></div>
        <div className="envelope-front">
          <div className="envelope-bottom"></div>
        </div>
      </div>
    </div>
  );
}

export default Envelope;
