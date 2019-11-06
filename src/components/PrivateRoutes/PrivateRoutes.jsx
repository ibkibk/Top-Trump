import * as React from "react";
import PropTypes from "prop-types";
import { globalHistory } from "@reach/router";

class PrivateRoutes extends React.Component {
  render() {
    if (!this.props.user) {
      // Using global history sets transitioning to false. Otherwise pushState is not used in reach router
      globalHistory.navigate("/login");
      //window.history.pushState({}, null, "/login");
      return null;
    } else {
      return this.props.children;
    }
  }
}

PrivateRoutes.propTypes = {
  user: PropTypes.object
};

export default PrivateRoutes;
