import React, { Component } from "react";
import styles from "./NavBar.module.scss";
import { CSSTransition } from "react-transition-group";
import "./transition.css";
import PropTypes from "prop-types";
import NavItem from "./NavItem";

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
            <NavItem
              toggleMenu={this.props.toggleMenu}
              route="/cards"
              name="Cards"
            />
            <NavItem
              toggleMenu={this.props.toggleMenu}
              route="/login"
              name="Login"
            />
          </ul>
        </nav>
      </CSSTransition>
    );
  }
}

NavBar.propTypes = {
  menuOpen: PropTypes.bool.isRequired,
  toggleMenu: PropTypes.func.isRequired
};

export default NavBar;
