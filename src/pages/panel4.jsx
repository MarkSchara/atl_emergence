import React from "react";
import "./panels.css";
import HoverCircle from "../components/hoverCircle1.1";
import ArrowBounce from "../components/arrowBounce";

const Panel2 = () => {
  return (
    <div className="panel-container">
      {/* Background Image */}
      <img src="/assets/BG4.svg" alt="Panel 4 BG" className="panel-bg" />
      {/* Interactive Elements (Without White Panel) */}
      <HoverCircle 
      textSrc="/assets/Text9.svg"
      style={{ top: "7vh", left: "25vw" }}
      textStyle={{ top: "25vh", left: "12vw", width: "32vw" }}/>
      <HoverCircle 
      textSrc="/assets/Text10.svg"
      style={{ top: "15vh", left: "55vw" }}
      textStyle={{ top: "20vh", left: "-5vw", width: "65vw" }}/>
      <HoverCircle 
      textSrc="/assets/Text11.svg"
      style={{ top: "27vh", left: "83vw" }}
      textStyle={{ top: "15vh", left: "-35vw", width: "68vw" }}/>
      <ArrowBounce 
      style={{ top: "80vh", left: "80vw" }}
      to="/panel5"/>
      <ArrowBounce 
      style={{ top: "8vh", left: "5vw", transform: "scaleX(-1)"}}
      to="/panel3"/>
    

    </div>
  );
};

export default Panel2;
