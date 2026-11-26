import { useState } from "react";

const COLORS = ["#e88ca8", "#d96d91", "#ffb3c6", "#c44569", "#ff8fab"];
const HEART_COUNT = 26;

function makeHearts() {
  return Array.from({ length: HEART_COUNT }, (_, i) => {
    const duration = 12 + Math.random() * 14;
    return {
      id: i,
      left: Math.random() * 100,
      size: 14 + Math.random() * 30,
      color: COLORS[i % COLORS.length],
      opacity: 0.18 + Math.random() * 0.3,
      duration,
      // negative delay = the heart is already part-way up when the page loads
      delay: -Math.random() * duration,
      sway: 20 + Math.random() * 50,
      swayDuration: 3 + Math.random() * 3,
    };
  });
}

function FloatingHearts() {
  const [hearts] = useState(makeHearts);

  return (
    <div className="floating-hearts" aria-hidden="true">
      {hearts.map((h) => (
        <div
          key={h.id}
          className="floating-heart"
          style={{
            left: `${h.left}%`,
            animationDuration: `${h.duration}s`,
            animationDelay: `${h.delay}s`,
          }}
        >
          <svg
            viewBox="0 0 24 24"
            width={h.size}
            height={h.size}
            style={{
              "--sway": `${h.sway}px`,
              opacity: h.opacity,
              animationDuration: `${h.swayDuration}s`,
            }}
          >
            <path
              fill={h.color}
              d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
            />
          </svg>
        </div>
      ))}
    </div>
  );
}

export default FloatingHearts;
