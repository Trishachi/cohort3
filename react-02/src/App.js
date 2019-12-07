import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import Animation from "./components/Animations/svgComponent";
import Game from "./components/Tictactoe/tictactoe.js";
import { Square, Board } from "./components/Tictactoe/tictactoe.js";
import DefaultApp from "./components/DefaultApp/DefaultApp.js";
import AccountComp from "./components/Accounts/Account.js";
import City from "./components/City/City.js";
import "bootstrap/dist/css/bootstrap.min.css";

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
      myState: `${evt.target.id} Exercise`
    });
  };

  onMouseOut = () => {
    this.setState({
      myState: "Display Action"
    });
  };

  onButtonClick = evt => {
    // console.log(evt.target.id + " Button Clicked");
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
          {this.state.currentIcon === "Accounts" && <AccountComp />}
          {this.state.currentIcon === "Cities" && <City />}
        </header>
      </div>
    );
  }
}

export default App;
