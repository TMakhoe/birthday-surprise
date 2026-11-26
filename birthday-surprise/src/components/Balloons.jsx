import { useState } from "react";

const COLORS = ["#ff6b8b", "#ffb3c6", "#c44569", "#ff9a76", "#f8d26a", "#b892ff", "#ff4d6d"];
const BALLOON_COUNT = 18;

function makeBalloons() {
  return Array.from({ length: BALLOON_COUNT }, (_, i) => ({
    id: i,
    left: Math.random() * 95,
    color: COLORS[i % COLORS.length],
    delay: Math.random() * 1.2,
    duration: 3.5 + Math.random() * 2.5,
    size: 0.7 + Math.random() * 0.6,
    sway: Math.random() > 0.5 ? 1 : -1,
  }));
}

function Balloons() {
  // Random positions are created once, when the balloons first appear
  const [balloons] = useState(makeBalloons);

  return (
    <div className="balloons" aria-hidden="true">
      {balloons.map((b) => (
        <div
          key={b.id}
          className="balloon"
          style={{
            left: `${b.left}%`,
            "--color": b.color,
            "--size": b.size,
            "--sway": b.sway,
            animationDelay: `${b.delay}s`,
            animationDuration: `${b.duration}s`,
          }}
        />
      ))}
    </div>
  );
}

export default Balloons;
