import React from "react";
import "./panels.css";
import HoverCircle from "../components/hoverCircle1.1";
import ArrowBounce from "../components/arrowBounce";

const Panel6 = () => {
  return (
    <div className="panel-container">
      {/* Background Image */}
      <img src="/assets/BG6.svg" alt="Panel 6 BG" className="panel-bg" />
      {/* Interactive Elements (Without White Panel) */}
      <HoverCircle 
      textSrc="/assets/Text16.svg"
      style={{ top: "80vh", left: "25vw" }}
      textStyle={{ top: "-40vh", left: "15vw", width: "55vw" }}/>
      <HoverCircle 
      textSrc="/assets/Text17.svg"
      style={{ top: "70vh", left: "55vw" }}
      textStyle={{ top: "-40vh", left: "10vw", width: "55vw" }}/>
      <ArrowBounce 
      style={{ top: "15vh", left: "80vw", transform: "rotate(-90deg)" }}
      to="/panel7"/>
      <ArrowBounce 
      style={{ top: "8vh", left: "5vw", transform: "scaleX(-1)"}}
      to="/panel5"/>
    

    </div>
  );
};

export default Panel6;
