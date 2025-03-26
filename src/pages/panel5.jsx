import React from "react";
import "./panels.css";
import HoverCircle from "../components/hoverCircle1.1";
import ArrowBounce from "../components/arrowBounce";
import HoverBubble from "../components/hoverBubble";

const Panel5 = () => {
  return (
    <div className="panel-container">
      {/* Background Image */}
      <img src="/assets/BG5.svg" alt="Panel 5 BG" className="panel-bg" />
      {/* Interactive Elements (Without White Panel) */}
      <HoverCircle 
      textSrc="/assets/Text12.svg"
      style={{ top: "15vh", left: "15vw" }}
      textStyle={{ top: "10vh", left: "50vw", width: "50vw" }}/>
      <HoverCircle 
      textSrc="/assets/Text13.svg"
      style={{ top: "37vh", left: "37vw" }}
      textStyle={{ top: "10vh", left: "17vw", width: "52vw" }}/>
      <HoverCircle 
      textSrc="/assets/Text14.svg"
      style={{ top: "25vh", left: "66vw" }}
      textStyle={{ top: "0vh", left: "-15vw", width: "50vw" }}/>
       <HoverCircle 
      textSrc="/assets/Text15.svg"
      style={{ top: "53vh", left: "83vw" }}
      textStyle={{ top: "-50vh", left: "-35vw", width: "45vw" }}/>
      <ArrowBounce 
      style={{ top: "80vh", left: "80vw" }}
      to="/panel6"/>
      <ArrowBounce 
      style={{ top: "80vh", left: "5vw", transform: "rotate(180deg)"}}
      to="/panel4"/>
      <HoverBubble
      style={{top: "15vh", left: "15vw" }}
      />
      <HoverBubble
      style={{top: "37vh", left: "37vw" }}
      />
      <HoverBubble
      style={{top: "25vh", left: "66vw" }}
      />
      <HoverBubble
      style={{top: "53vh", left: "83vw" }}
      />
    

    </div>
  );
};

export default Panel5;
