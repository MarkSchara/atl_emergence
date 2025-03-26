import React, { useState, useEffect } from "react";
import "./flashingMeteor.css";

// Meteor assets
const meteorImages = [
  "/assets/FM1.svg",
  "/assets/FM2.svg",
  "/assets/FM3.svg",
];

const FlashingMeteor = ({ className }) => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % meteorImages.length);
    }, 200); // Change every 300ms

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className={`flashing-meteor ${className}`}>
      <img src={meteorImages[currentImage]} alt="Flashing Meteor" className="meteor-image" />
    </div>
  );
};

export default FlashingMeteor;
