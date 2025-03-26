import React from "react";
import "./panels.css";
import HoverCircle from "../components/hoverCircle1.1";
import ArrowBounce from "../components/arrowBounce";

const Panel7 = () => {
  return (
    <div className="panel-container">
      {/* Background Image */}
      <img src="/assets/BG7.svg" alt="Panel 7 BG" className="panel-bg" />
      {/* Interactive Elements (Without White Panel) */}
      <HoverCircle 
      textSrc="/assets/Text18.svg"
      style={{ top: "75vh", left: "25vw" }}
      textStyle={{ top: "-57vh", left: "20vw", width: "32vw" }}/>
      <HoverCircle 
      textSrc="/assets/Text19.svg"
      style={{ top: "45vh", left: "70vw" }}
      textStyle={{ top: "-30vh", left: "-5vw", width: "36vw" }}/>
      <ArrowBounce 
      style={{ top: "8vh", left: "5vw", transform: "rotate(90deg)"}}
      to="/panel6"/>
    

    </div>
  );
};

export default Panel7;
