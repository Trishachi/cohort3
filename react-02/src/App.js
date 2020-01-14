import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import Animation from "./components/Animations/svgComponent";
import Game from "./components/Tictactoe/tictactoe.js";
// import { Square, Board } from "./components/Tictactoe/tictactoe.js";
import DefaultApp from "./components/DefaultApp/DefaultApp.js";
import AccountComp from "./components/Accounts/Account.js";
import City from "./components/City/City.js";
import LinkedListApp from "./components/Lists/LinkedListApp.js";
import ThemeApp from "./components/Theme/ThemeSettings.js";
import ThemeProvider from "./components/Theme/ThemeContext.js";
import ThemeContext from "./components/Theme/ThemeContext.js";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      myState: "Hover on menu icon to display App Name",
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
      myState: "Hover on menu icon to display App Name"
    });
  };

  onButtonClick = evt => {
    // console.log(evt.target.id + " Button Clicked");
    this.setState({
      currentIcon: evt.target.id
    });
  };

  static contextType = ThemeContext;
  render() {
    return (
      <ThemeProvider>
        <div className="App">
          <Animation
            mouseOverEvent={this.onMouseOver}
            mouseOutEvent={this.onMouseOut}
            ButtonClicked={this.onButtonClick}
          />
          <header
            className={
              this.context.fontColor === "white"
                ? "App-header"
                : "App-header-light"
            }
          >
            {this.state.currentIcon === "Home" && (
              <DefaultApp myState={this.state.myState} />
            )}
            {this.state.currentIcon === "Tictactoe" && (
              <Game className="active" />
            )}
            {this.state.currentIcon === "Accounts" && <AccountComp />}
            {this.state.currentIcon === "Cities" && <City />}
            {this.state.currentIcon === "Lists" && <LinkedListApp />}
            {this.state.currentIcon === "Settings" && <ThemeApp />}
          </header>
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
