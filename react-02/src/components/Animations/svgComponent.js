import React from "react";
import welcome from "./welcome.svg";
import tictactoe from "./tictactoe.svg";
import "./svgComponent.css";

const Animation = () => {
  return (
    <div id="Header" className="Navigation">
      <img src={welcome} className="svg-image animate" alt="svg1" />
      <img src={tictactoe} className="svg-image animate1" alt="svg2" />
      <img src={welcome} className="svg-image animate2" alt="svg3" />
      <img src={tictactoe} className="svg-image animate3" alt="svg4" />
    </div>
  );
};

export default Animation;
