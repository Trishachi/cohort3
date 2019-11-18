import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import Animation from "./components/Animations/svgComponent";
import { Square, Board, Game } from "./components/Tictactoe/tictactoe.js";
import DefaultApp from "./components/DefaultApp/DefaultApp.js";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      myState: "Display Action",
      currentIcon: "Home"
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

  onButtonClick = evt => {
    console.log(evt.target.id + " Button Clicked");
    this.setState({
      currentIcon: evt.target.id
    });
  };

  render() {
    return (
      <div className="App">
        <Animation
          mouseOverEvent={this.onMouseOver}
          mouseOutEvent={this.onMouseOut}
          ButtonClicked={this.onButtonClick}
        />
        <header className="App-header">
          {this.state.currentIcon === "Home" && (
            <DefaultApp myState={this.state.myState} />
          )}
          {this.state.currentIcon === "Tictactoe" && <Game />}
        </header>
      </div>
    );
  }
}

export default App;
