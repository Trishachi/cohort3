import React from "react";
import "../Accounts/Account.css";
import { DropdownButton, Dropdown } from "react-bootstrap";

class ThemeApp extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <React.Fragment>
        <h1 className="spacer">Select Theme Settings</h1>
        <DropdownButton id="dropdown-basic-button" title="Select Theme">
          <Dropdown.Item href="#/action-1">Default Theme</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Light Theme</Dropdown.Item>
        </DropdownButton>
      </React.Fragment>
    );
  }
}

export default ThemeApp;
