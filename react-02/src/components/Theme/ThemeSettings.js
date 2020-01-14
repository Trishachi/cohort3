import React from "react";
import "../../App.css";
import { ThemeContext } from "./ThemeContext.js";
import { Form } from "react-bootstrap";

class ThemeApp extends React.Component {
  static contextType = ThemeContext;
  render() {
    return (
      <React.Fragment>
        <h2 className="spacer">Select Theme Settings</h2>
        <Form.Control
          as="select"
          id="dropdown-basic-button"
          title="Select Theme"
          value={this.context.fontColor}
          onChange={this.context.changeFont}
          className="theme-form"
        >
          <option value="white">Default Theme</option>
          <option value="light">Light Theme</option>
        </Form.Control>
      </React.Fragment>
    );
  }
}

export default ThemeApp;
