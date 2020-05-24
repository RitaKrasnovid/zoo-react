import React, { Component } from "react";
import AppHeader from "../app-header";
import HomePage from '../../pages/home';
import AnimalsPage from '../../pages/animals';
import AnimalDetails from '../animal-details';
import NewsPage from "../../pages/news";

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
          <Route path="/animals" component={AnimalsPage} exact/>
          <Route path="/animals/:id"
            render={({ match }) => {
              return <AnimalDetails id={match.params.id} />
            }}

          />
          <Route path="/news" component={NewsPage} />
        </Router>
      </div>
    );
  }
}
