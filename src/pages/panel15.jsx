import React from "react";
import "./panels.css";
import HoverCircle from "../components/hoverCircle1.1";
import ArrowBounce from "../components/arrowBounce";

const Panel15 = () => {
  return (
    <div className="panel-container">
      {/* Background Image */}
      <img src="/assets/BG15.svg" alt="Panel 15 BG" className="panel-bg" />

      {/* Interactive Elements (Without White Panel) */}
      <HoverCircle 
      textSrc="/assets/Text2.svg"
      style={{ top: "33vh", left: "70vw" }}
      textStyle={{ top: "-20vh", left: "-10vw", width: "50vw" }}/>
      <ArrowBounce
      to="/panel2"/>
      <ArrowBounce 
      style={{ top: "8vh", left: "5vw", transform: "scaleX(-1)"}}
      to="/panel1"/>
    </div>
  );
};

export default Panel15;
