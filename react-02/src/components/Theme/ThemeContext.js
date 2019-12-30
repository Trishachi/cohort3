import React from "react";

export const themes = {
  default: {},
  other: {}
};

const ThemeContext = React.createContext(themes.default);
// const ThemeProvider = ThemeContext.Provider();
// const ThemeConsumer = ThemeContext.Consumer();

// export { ThemeProvider, ThemeConsumer };
