import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Animation from "./components/Animations/svgComponent";

function App() {
  return (
    <div className="App">
      <Animation />
      <header className="App-header">
        <img src={logo} className="App-logo animate" alt="logo" />
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

export default App;
