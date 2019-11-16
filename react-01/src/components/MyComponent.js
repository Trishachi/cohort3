import React from "react";

const MyComponent = props => {
  return (
    <div>
      <h2>Hello World from MyComp {props.whatToSay}</h2>
      <button onClick={props.buttonClicked}>Push Me</button>
    </div>
  );
};

export default MyComponent;
