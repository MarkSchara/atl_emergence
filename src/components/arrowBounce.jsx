import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./arrowBounce.css";

// Arrow assets
const arrowImages = [
  "/assets/AB1.svg",
  "/assets/AB2.svg",
  "/assets/AB3.svg",
];

const ArrowBounce = ({style, to}) => {
  const [currentArrow, setCurrentArrow] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true); // Controls animation state
  const navigate = useNavigate(); // Hook to navigate

  useEffect(() => {
    let interval;
    if (isAnimating) {
      interval = setInterval(() => {
        setCurrentArrow((prevIndex) => (prevIndex + 1) % arrowImages.length);
      }, 300);
    }

    // Stop animation after 4 cycles (3 images * 4 cycles = 12 frames)
    const timeout = setTimeout(() => setIsAnimating(false), 3600);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [isAnimating]);

  // Restart animation on hover
  const handleMouseEnter = () => {
    setIsAnimating(true);
  };

  const handleMouseLeave = () => {
    setTimeout(() => setIsAnimating(false), 3600); // Stop after 4 cycles
  };

  const handleClick = () => {
    if (to) {
      console.log(`Navigating to ${to}`);
      navigate(to);
    }
  };

  return (
    <div
      className="arrow-bounce"
      onClick={handleClick}
      style={style}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src={arrowImages[currentArrow]}
        alt="Bouncing Arrow"
        className="arrow"
      />
    </div>
  );
};

export default ArrowBounce;
