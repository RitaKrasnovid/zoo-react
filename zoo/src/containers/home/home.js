import React, { Component } from "react";

import './home.scss';

export default class HomePage extends Component {
  render() {
    const { user } = this.props;
    let userName = '';

    if(user) {
      userName = user.name; // TODO doesn't reactive update in the parent
    }

    return (
      <div className="home">
        <h1 className="home__greeting">
          {userName} Welcome to Super ZOO
        </h1>
        <img alt="tiger" src="./images/tiger.jpg" className="home__image"/>
      </div>
    );
  }
};
