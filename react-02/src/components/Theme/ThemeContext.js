import React from "react";

export const ThemeContext = React.createContext();

class ThemeProvider extends React.Component {
  constructor() {
    super();
    this.state = {
      fontColor: "white"
    };
  }

  changeFont = event => {
    this.setState({ fontColor: event.target.value });
  };

  render() {
    return (
      <ThemeContext.Provider
        value={{
          ...this.state,
          changeFont: this.changeFont
        }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

export default ThemeProvider;
