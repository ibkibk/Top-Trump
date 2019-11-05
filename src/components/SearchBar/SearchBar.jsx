import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./SearchBar.module.scss";

class SearchBar extends Component {
  render() {
    return (
      <input
        className={styles.searchBar}
        onChange={this.props.setSearchText}
        placeholder="Search cards..."
        value={this.props.searchText}
        type="text"
      />
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  setSearchText: PropTypes.func.isRequired
};

export default SearchBar;
