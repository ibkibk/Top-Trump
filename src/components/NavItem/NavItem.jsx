import React, { Component } from "react";
import styles from "./NavItem.module.scss";
import PropTypes from "prop-types";

class NavItem extends Component {
  render() {
    return <li className={styles.navItem}>{this.props.name}</li>;
  }
}

NavItem.propTypes = {
  name: PropTypes.string.isRequired
};

export default NavItem;
