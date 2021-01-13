import React, { Component } from 'react';
import PropTypes from "prop-types";
import ApiAuth from '../../services/api-auth';

import "./login-button.scss";

const apiAuth = new ApiAuth();

export default class LoginButton extends Component {
  static propTypes = {
    authenticated: PropTypes.bool.isRequired,
  };

  _handleSignInClick = () => {
    apiAuth.login();
  };

  _handleLogoutClick = () => {
    apiAuth.logout();
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
