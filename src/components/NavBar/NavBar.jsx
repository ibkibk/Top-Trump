import React, { Component } from "react";
import styles from "./NavBar.module.scss";
import { CSSTransition } from "react-transition-group";
import "./transition.css";
import PropTypes from "prop-types";
import NavItem from "../NavItem";

class NavBar extends Component {
  render() {
    return (
      <CSSTransition
        in={this.props.menuOpen}
        timeout={400}
        classNames="navShown"
        unmountOnExit
      >
        <nav>
          <ul className={styles.navList}>
            <NavItem name="Cards" />
            <NavItem name="Trainers" />
            <NavItem name="Students" />
          </ul>
        </nav>
      </CSSTransition>
    );
  }
}

NavBar.propTypes = {
  menuOpen: PropTypes.bool.isRequired
};

export default NavBar;
