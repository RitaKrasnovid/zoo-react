import React, { Component } from 'react';
import PropTypes from "prop-types";

import "./login-button.scss";

export default class LoginButton extends Component {
  static propTypes = {
    authenticated: PropTypes.bool.isRequired,
  };

  _handleSignInClick = () => {
    window.open("http://localhost:8080/api/auth/google", "_self");
  };

  _handleLogoutClick = () => {
    window.open("http://localhost:8080/api/auth/logout", "_self");
    this.props.handleNotAuthenticated();
  };

  render() {
    const { authenticated } = this.props;
    const callback = authenticated ? this._handleLogoutClick : this._handleSignInClick;
    const buttonText = authenticated ? 'Logout' : 'Login';

    return (
      <div className="login">
        <button onClick={callback} className="login__button">
          <img src="./images/google-icon.png" alt="google icon" className="login__image"/>
          <span className="login__text">{buttonText}</span>
        </button>
      </div>
    );
  }
}
