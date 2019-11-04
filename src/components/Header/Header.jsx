import React, { Component } from "react";
import styles from "./Header.module.scss";
import PropTypes from "prop-types";

// imports for relevant FontAwesome packages
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Header extends Component {
  render() {
    return (
      <header className={styles.appHeader}>
        <h1>_nology Top Trumps</h1>
        <span className={styles.bars}>
          {/* on click of the FontAwesome the setState function passed in through
          props is called */}
          <FontAwesomeIcon icon={faBars} onClick={this.props.toggleMenu} />
        </span>
      </header>
    );
  }
}

Header.propTypes = {
  toggleMenu: PropTypes.func.isRequired
};

export default Header;
