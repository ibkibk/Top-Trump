import React, { Component } from "react";
import { Link } from "@reach/router";
import styles from "./NavItem.module.scss";
import PropTypes from "prop-types";

// React-router uses <NavLink> tags to change between paths
class NavItem extends Component {
  render() {
    const isActive = ({ isCurrent }) => {
      return isCurrent ? { className: styles.active } : null;
    };
    return (
      <li className={styles.navItem} onClick={this.props.toggleMenu}>
        <Link getProps={isActive} to={this.props.route}>
          {this.props.name}
        </Link>
      </li>
    );
  }
}

NavItem.propTypes = {
  name: PropTypes.string.isRequired,
  route: PropTypes.string.isRequired,
  toggleMenu: PropTypes.func.isRequired
};

export default NavItem;
