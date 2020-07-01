import React, { Component } from "react";
import "./App.css";
import Routes from "./Routes";

//MUI
import { ThemeProvider } from "@material-ui/styles";
import theme from "./theme";

export default class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    );
  }
}
