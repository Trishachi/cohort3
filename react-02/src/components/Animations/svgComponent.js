import React from "react";
import welcome from "./welcome.svg";
import tictactoe from "./tictactoe.svg";
import "./svgComponent.css";

const Animation = () => {
  return (
    <div className="Navigation">
      <img src={welcome} className="svg-image" alt="svg1" />
      <img src={tictactoe} className="svg-image" alt="svg2" />
      <img src={welcome} className="svg-image" alt="svg3" />
      <img src={tictactoe} className="svg-image" alt="svg4" />
    </div>
  );
};

export default Animation;
