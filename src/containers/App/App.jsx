import React, { Component } from "react";
import styles from "./App.module.scss";
import NavBar from "../../components/NavBar";
import Header from "../../components/Header";
import Routes from "../../routes/Routes";
import firebase, { provider } from "../../firebase";
import { navigate } from "@reach/router";
import googleIcon from "../../static/images/google-icon.png";

class App extends Component {
  // value for menuOpen is passed as props to NavBar component
  state = {
    menuOpen: false,
    user: null
  };

  // reference to this setState function is passed as props to Header component
  toggleMenu = () => {
    this.setState({
      menuOpen: !this.state.menuOpen
    });
  };

  closeMenu = () => {
    this.setState({
      menuOpen: false
    });
  };

  signIn = () => {
    console.log("sign in");
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(result => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        //var token = result.credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // ...
        console.log(user);
        this.setState({
          user
        });
        navigate("/private/mycards");
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
        navigate("/login");
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
      <div className={styles.app}>
        <div className={styles.headerContainer}>
          <Header toggleMenu={this.toggleMenu} />
          <NavBar toggleMenu={this.toggleMenu} menuOpen={this.state.menuOpen} />
        </div>
        <main>
          <Routes user={this.state.user} signIn={this.signIn} signOut={this.signOut} />
        </main>
      </div>
    );
  }
}

export default App;
