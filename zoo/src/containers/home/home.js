import React, { Component } from "react";

import './home.scss';

export default class HomePage extends Component {
  render() {
    return (
      <div className="home">
        <h1 className="home__greeting">
           Welcome to Super ZOO
        </h1>
        <img alt="tiger" src="./images/tiger.jpg" className="home__image"/>
      </div>
    );
  }
};
