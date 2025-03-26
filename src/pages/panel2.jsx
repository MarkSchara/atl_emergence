import React from "react";
import "./panel2.css";
import HoverCircle from "../components/hoverCircle1.1";
import ArrowBounce from "../components/arrowBounce";

const Panel2 = () => {
  return (
    <div className="panel-container">
      {/* Background Image */}
      <img src="/assets/BG2.svg" alt="Panel 2 BG" className="panel-bg" />
      {/* Interactive Elements (Without White Panel) */}
      <HoverCircle 
      textSrc="/assets/Text3.svg"
      style={{ top: "74vh", left: "40vw" }}
      textStyle={{ top: "-10vh", left: "20vw", width: "55vw" }}/>
      <ArrowBounce 
      style={{ top: "80vh", left: "5vw", transform: "rotate(90deg)" }}
      to="/panel25"/>
      <ArrowBounce 
      style={{ top: "8vh", left: "5vw", transform: "rotate(-90deg)"}}
      to="/panel15"/>
    

    </div>
  );
};

export default Panel2;
