import React, { Component } from "react";
import ApiService from '../../services/api-service';
import LoginButton from '../../components/login-button';

import './home.scss';

const apiService = new ApiService();

export default class HomePage extends Component {
  state = {
    user: {},
    error: null,
    authenticated: false
  };

  componentDidMount() {
    // check loggined user or not i think better do it in app.
    fetch("http://localhost:8080/api/auth/login/success", {
      method: "GET",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true,
      }
    })
      .then(response => {
        if (response.status === 200) return response.json();
        throw new Error("failed to authenticate user");
      })
      .then(responseJson => {
        this.setState({
          authenticated: true,
          user: responseJson.user,
        });
      })
      .catch(error => {
        this.setState({
          authenticated: false,
          error: "Failed to authenticate user",
        });
      });
  }

  _handleNotAuthenticated = () => {
    this.setState({ authenticated: false });
  };

  render() {
    const { authenticated, user } = this.state;
    console.log(user)

    const greeting = authenticated ? `${user.name}` : '';

    return (
      <div className="home">
        <LoginButton
          authenticated={authenticated}
          handleNotAuthenticated={this._handleNotAuthenticated}
        />
        <h1 className="home__greeting">
          { greeting } Welcome to Super ZOO
        </h1>
        <img alt="tiger" src="./images/tiger.jpg" className="home__image"/>
      </div>
    );
  }
};
