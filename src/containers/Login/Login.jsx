import * as React from "react";
import styles from "./Login.module.scss";
import googleIcon from "../../static/images/google-icon.png";

class Login extends React.Component {
  render() {
    return (
      <div onClick={this.props.signIn} className={styles.google}>
        <img src={googleIcon} alt="" />
        <button>Sign in with google</button>
      </div>
    );
  }
}

export default Login;
