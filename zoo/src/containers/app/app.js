import React, { Component } from "react";
import AppHeader from "../../components/app-header";
import HomePage from '../home';
import AnimalsPage from '../animals';
import AnimalDetails from '../../components/animal-details';
import NewsPage from "../news";

import { BrowserRouter as Router, Route } from "react-router-dom";

import "../../assets/styles/_normalize.scss";
import "./app.scss";

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <AppHeader />
          <Route path="/" component={HomePage} exact />
          <Route path="/animals" component={AnimalsPage} exact />
          <Route path="/animals/:id" component={AnimalDetails} exact />
          <Route path="/news" component={NewsPage} />
        </Router>
      </div>
    );
  }
}
