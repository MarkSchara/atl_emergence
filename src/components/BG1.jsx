import React from "react";
import "./BG1.css";

const BackgroundImage = ({ src, alt = "Background", children }) => {
  return (
    <div
      className="background-image"
      style={{ backgroundImage: `url(${src})` }}
      aria-label={alt}
    >
      {children}
    </div>
  );
};

export default BackgroundImage;
