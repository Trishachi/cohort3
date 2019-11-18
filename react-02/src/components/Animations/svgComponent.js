import React from "react";
import welcome from "./welcome.svg";
import tictactoe from "./tictactoe.svg";
import "./svgComponent.css";

const Animation = props => {
  return (
    <div id="Header" className="Navigation">
      <img
        src={welcome}
        className="svg-image animate"
        alt="svg1"
        onMouseOver={props.mouseOverEvent}
        onMouseLeave={props.mouseOutEvent}
      />
      <img
        src={tictactoe}
        className="svg-image animate1"
        alt="svg2"
        onMouseOver={props.mouseOverEvent}
        onMouseLeave={props.mouseOutEvent}
      />
      <img
        src={welcome}
        className="svg-image animate2"
        alt="svg3"
        onMouseOver={props.mouseOverEvent}
        onMouseLeave={props.mouseOutEvent}
      />
      <img
        src={tictactoe}
        className="svg-image animate3"
        alt="svg4"
        onMouseOver={props.mouseOverEvent}
        onMouseLeave={props.mouseOutEvent}
      />
    </div>
  );
};

export default Animation;
