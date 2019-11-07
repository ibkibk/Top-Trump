import React, { Component } from "react";
import { Router, Redirect, globalHistory } from "@reach/router";
import Cards from "../Cards";
import PrivateRoutes from "../../components/PrivateRoutes";
import Login from "../Login";
import MyCards from "../MyCards";
import firebase, { provider } from "../../firebase";
import googleIcon from "../../static/images/google-icon.png";

const NotFound = () => <h2>Not Found</h2>;

class Routes extends Component {
  state = {
    user: null
  };

  signIn = () => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(result => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        //var token = result.credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        this.setState({
          user
        });
        globalHistory.navigate("/private/mycards");
      })
      .catch(error => {
        // An error happened.
        console.log(error);
      });
  };

  signOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        // Sign-out successful.
        this.setState({
          user: null
        });
        globalHistory.navigate("/login");
      })
      .catch(function(error) {
        // An error happened.
        console.log(error);
      });
  };

  getSignOutBtn = () => {
    return this.state.user ? (
      <div className="google" onClick={this.signOut}>
        <img src={googleIcon} alt="" />
        <button>Sign out</button>
      </div>
    ) : null;
  };

  render() {
    return (
      <Router>
        <Redirect noThrow from="/" to="cards" />
        <Cards path="cards" />
        <Login path="login" signIn={this.signIn} />
        <PrivateRoutes path="private" user={this.state.user}>
          <MyCards path="mycards" />
        </PrivateRoutes>
        <NotFound default />
      </Router>
    );
  }
}

export default Routes;
