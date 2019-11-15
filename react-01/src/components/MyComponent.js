import React from "react";

const MyComponent = props => {
  return (
    <div>
      <h1>Hello World from MyComp {props.whatToSay}</h1>
      <button onClick={props.buttonClicked}>Push Me</button>
    </div>
  );
};

export default MyComponent;
