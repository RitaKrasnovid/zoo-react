import React, { Component } from 'react';
import PropTypes from "prop-types";

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

    return (
      <div>
        {authenticated ? (
          <button onClick={this._handleLogoutClick}>Logout</button>
        ) : (
          <button onClick={this._handleSignInClick}>Login with Google</button>
        )}
      </div>
    );
  }
}
