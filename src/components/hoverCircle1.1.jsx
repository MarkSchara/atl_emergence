import React, { useState, useEffect } from "react";
import "./hoverCircle1.1.css";

const HoverCircle = ({ style, textSrc, textStyle }) => {
  const [animateOnLoad, setAnimateOnLoad] = useState(true); // State for page load animation
  const [hovered, setHovered] = useState(false); // State to track hover status

  useEffect(() => {
    const timeout = setTimeout(() => setAnimateOnLoad(false), 3000); // 3s duration
    return () => clearTimeout(timeout); // Cleanup the timeout
  }, []);

  const handleMouseEnter = () => {
    setHovered(true); // Start the hover animation
  };

  const handleMouseLeave = () => {
    setHovered(false); // Reset hover animation
  };

  return (
    <div
      className="hover-circle"
      style = {style}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src="/assets/HC1.svg"
        alt="Dense Yellow Dot"
        className={`circle hc1 ${animateOnLoad ? "animate-on-load" : ""} ${
            hovered ? "hovered" : ""}`}
      />
      <img
        src="/assets/HC2.svg"
        alt="Larger Opaque Yellow Dot"
        className={`circle hc2 ${animateOnLoad ? "animate-on-load" : ""} ${
            hovered ? "hovered" : ""}`}
      />

      {/* Text fades in when hovered */}
      {hovered && <img 
      src= {textSrc} 
      style={textStyle}
      alt="Hover Text" 
      className="hover-text1" />}
    </div>
  );
};

export default HoverCircle;

