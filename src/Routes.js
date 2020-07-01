import React, { Component } from "react";
import Alerts from './components/Alerts';
//Router
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

//Views
import {
  Login as LoginView,
  NotFound as NotFoundView,
  Dashboard as DashboardView,
} from "./views";

//Components
import { Navbar } from "./components";

export default class Routes extends Component {
  render() {
    return (
      <div className="content">
        <Router>
          <Navbar />
          <Alerts/>
          <Switch>
            <Route exact path="/" component={LoginView} />
            <Route exact path="/dashboard" component={DashboardView} />
            <Route component={NotFoundView} exact path="/not-found" />
            <Redirect to="/not-found" />;
          </Switch>
        </Router>
      </div>
    );
  }
}
