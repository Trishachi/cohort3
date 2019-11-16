import React from "react";
import logo from "./logo.svg";
import "./App.css";
import MyComponent from "./components/MyComponent";
import EvenComponent from "./components/EvenComponent";
import OddComponent from "./components/OddComponent";

class App extends React.Component {
  constructor() {
    super();
    this.counter = 21;
    // this.onPushMe = this.onPushMe.bind(this);
    this.state = {
      myState: "TBD" //Initialization of the state
    };
  }

  onPushMe = () => {
    console.log("You pushed me");
    this.counter++;
    console.log(this.counter);
    this.setState({
      myState: "now: " + this.counter
    });
  };

  render() {
    const whatToSay = "WhatEver";
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>
            Welcome to my React App. My name is Chisom {this.state.myState}
          </h1>
          <button onClick={this.onPushMe}>Push Me</button>
          <MyComponent whatToSay={whatToSay} buttonClicked={this.onPushMe} />
          {this.counter % 2 == 0 ? <EvenComponent /> : <OddComponent />}
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
