import React, { Component } from "react";
import AppHeader from "../app-header";
import HomePage from '../../pages/home';
import AnimalsPage from '../../pages/animals';
import NewsPage from '../../pages/news';


import { BrowserRouter as Router, Route } from 'react-router-dom';

import '../../assets/styles/_normalize.scss';
import './app.scss';

export default class App extends Component {
  render() {
    return(
      <div className="app">
        <Router>
          <AppHeader />
          <Route path="/" component={HomePage} exact/>
          <Route path="/animals" component={AnimalsPage} />
          <Route path="/news" component={NewsPage} />
        </Router>
      </div>
    );
  }
}
