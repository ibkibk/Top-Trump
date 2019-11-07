import React, { Component } from "react";
import styles from "./App.module.scss";
import NavBar from "../../components/NavBar";
import Header from "../../components/Header";
import Routes from "../Routes/Routes";

class App extends Component {
  // value for menuOpen is passed as props to NavBar component
  state = {
    menuOpen: false
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

  render() {
    return (
      <div className={styles.app}>
        <div className={styles.headerContainer}>
          <Header toggleMenu={this.toggleMenu} />
          <NavBar toggleMenu={this.toggleMenu} menuOpen={this.state.menuOpen} />
        </div>
        <main>
          <Routes />
        </main>
      </div>
    );
  }
}

export default App;
