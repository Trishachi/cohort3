import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Animation from "./components/Animations/svgComponent";
import { Square, Board, Game } from "./components/Tictactoe/tictactoe.js";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      myState: "Display Action"
    };
  }

  onMouseOver = evt => {
    // console.log(evt.target.id);
    this.setState({
      myState: `Moused Over ${evt.target.id}`
    });
  };

  onMouseOut = () => {
    this.setState({
      myState: "Display Action"
    });
  };

  render() {
    return (
      <div className="App">
        <Animation
          mouseOverEvent={this.onMouseOver}
          mouseOutEvent={this.onMouseOut}
        />
        <header className="App-header">
          <p id="hoverStatus">{this.state.myState}</p>
          <img src={logo} className="App-logo animate" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <Game />
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
