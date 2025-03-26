import React from "react";
import "./panels.css";
import HoverCircle from "../components/hoverCircle1.1";
import ArrowBounce from "../components/arrowBounce";

const Panel25 = () => {
  return (
    <div className="panel-container">
      {/* Background Image */}
      <img src="/assets/BG25.svg" alt="Panel 25 BG" className="panel-bg" />
      {/* Interactive Elements (Without White Panel) */}
      <HoverCircle 
      textSrc="/assets/Text4.svg"
      style={{ top: "54vh", left: "20vw" }}
      textStyle={{ top: "-20vh", left: "35vw", width: "32vw" }}/>
      <HoverCircle 
      textSrc="/assets/Text5.svg"
      style={{ top: "50vh", left: "80vw" }}
      textStyle={{ top: "-20vh", left: "-10vw", width: "28vw" }}/>
      <ArrowBounce 
      style={{ top: "80vh", left: "80vw" }}
      to="/panel3"/>
      <ArrowBounce 
      style={{ top: "8vh", left: "5vw", transform: "rotate(-90deg)"}}
      to="/panel2"/>
    

    </div>
  );
};

export default Panel25;
