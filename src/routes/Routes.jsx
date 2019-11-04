import React, { Component } from "react";
import { Router, Redirect } from "@reach/router";
import Cards from "../containers/Cards";
import Login from "../containers/Login";

const NotFound = () => <h2>Not Found</h2>;

class Routes extends Component {
  render() {
    return (
      <Router>
        <Redirect noThrow from="/" to="cards" />
        <Cards path="cards" />
        <Login path="login" />
        <NotFound default />
      </Router>
    );
  }
}

export default Routes;
