import React, { Component } from "react";
import { Router, Redirect } from "@reach/router";
import Cards from "../containers/Cards";
import PrivateRoutes from "../components/PrivateRoutes";
import Login from "../containers/Login";
import MyCards from "../containers/MyCards";

const NotFound = () => <h2>Not Found</h2>;

class Routes extends Component {
  render() {
    return (
      <Router>
        <Redirect noThrow from="/" to="cards" />
        <Cards path="cards" />
        <Login path="login" />
        <PrivateRoutes path="private" user={this.props.user}>
          <MyCards path="mycards" signIn={this.props.signIn} />
        </PrivateRoutes>
        <NotFound default />
      </Router>
    );
  }
}

export default Routes;
