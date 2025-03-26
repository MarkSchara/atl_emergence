import React, { useState, useEffect } from "react";
import "./hoverBubble.css";

const bubbleImages = [
  "/assets/BB1.svg",
  "/assets/BB2.svg",
  "/assets/BB3.svg",
];

const HoverBubble = ({ style }) => {
  const [currentBubble, setCurrentBubble] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    let interval;
    if (isAnimating) {
      interval = setInterval(() => {
        setCurrentBubble((prev) => (prev + 1) % bubbleImages.length);
      }, 300); // 300ms per frame
    }

    return () => clearInterval(interval);
  }, [isAnimating]);

  return (
    <div
      className="bubble-animation"
      style={style}
      onMouseEnter={() => setIsAnimating(true)}
      onMouseLeave={() => setTimeout(() => setIsAnimating(false), 3600)}
    >
      <img
        src={bubbleImages[currentBubble]}
        alt="Bubble Animation"
        className="bubble"
      />
    </div>
  );
};

export default HoverBubble;

