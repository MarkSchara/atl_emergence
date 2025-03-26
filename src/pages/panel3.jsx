import React from "react";
import "./panels.css";
import HoverCircle from "../components/hoverCircle1.1";
import ArrowBounce from "../components/arrowBounce";

const Panel3 = () => {
  return (
    <div className="panel-container">
      {/* Background Image */}
      <img src="/assets/BG3.svg" alt="Panel 3 BG" className="panel-bg" />
      {/* Interactive Elements (Without White Panel) */}
      <HoverCircle 
      textSrc="/assets/Text6.svg"
      style={{ top: "80vh", left: "25vw" }}
      textStyle={{ top: "-40vh", left: "0vw", width: "32vw" }}/>
      <HoverCircle 
      textSrc="/assets/Text7.svg"
      style={{ top: "70vh", left: "55vw" }}
      textStyle={{ top: "-50vh", left: "-5vw", width: "32vw" }}/>
      <HoverCircle 
      textSrc="/assets/Text8.svg"
      style={{ top: "10vh", left: "83vw" }}
      textStyle={{ top: "0vh", left: "-28vw", width: "78vw" }}/>
      <ArrowBounce 
      style={{ top: "80vh", left: "80vw" }}
      to="/panel4"/>
      <ArrowBounce 
      style={{ top: "8vh", left: "5vw", transform: "scaleX(-1)"}}
      to="/panel25"/>
    

    </div>
  );
};

export default Panel3;
