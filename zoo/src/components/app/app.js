import React, { Component } from "react";
import AppHeader from "../app-header";
import HomePage from '../home';

import '../../assets/styles/_normalize.scss';
import './app.scss';

export default class App extends Component {
  render() {
    return(
      <div className="app">
        <AppHeader />
        <HomePage />
      </div>
    );
  }
}
