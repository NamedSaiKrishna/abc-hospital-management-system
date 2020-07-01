import React, { Component } from "react";
import "./App.css";
import Routes from "./Routes";
import { Provider } from 'react-redux';
import store from './redux/store';
import { loadUser } from './redux/actions';
import AlertTemplate from 'react-alert-template-basic';
import { ThemeProvider } from "@material-ui/styles";
import theme from "./theme";
import { Provider as AlertProvider } from 'react-alert';

const alertOptions = {
  timeout: 5000,
  position: 'bottom center'
}

export default class App extends Component {

  componentDidMount(){
    store.dispatch(loadUser());
  }

  render() {
    return (
      <ThemeProvider theme={theme} template={AlertTemplate} {...alertOptions}>
        <Provider store={store}>
          <AlertProvider>
            <Routes />
          </AlertProvider>
        </Provider>
      </ThemeProvider>
    );
  }
}
