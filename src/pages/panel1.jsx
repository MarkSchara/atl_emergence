import React from "react";
import "./panel1.css";
import HoverCircle from "../components/hoverCircle1.1";
import ArrowBounce from "../components/arrowBounce";
import FlashingMeteor from "../components/flashingMeteor";

const Panel1 = () => {
  return (
    <div className="panel-container">
      {/* Background Image */}
      <img src="/assets/BG1.svg" alt="Panel 1 BG" className="panel-bg" />

      {/* Interactive Elements (Without White Panel) */}
      <HoverCircle 
       textSrc="/assets/Text1.svg"
       style={{ top: "50vh", left: "80vw" }}
       textStyle={{ top: "-20vh", left: "-10vw", width: "47vw" }}/>
      {/* Two Flashing Meteor Instances */}
      <FlashingMeteor className="flashing-meteor-large" />
      <FlashingMeteor className="flashing-meteor-small" />
      <ArrowBounce
      to="/panel15"/>
    </div>
  );
};

export default Panel1;
