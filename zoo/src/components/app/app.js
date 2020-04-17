import React, { Component } from "react";
import AppHeader from "../app-header";
import HomePage from "../../pages/home";
import AnimalsPage from "../../pages/animals";
import NewsPage from "../../pages/news";

import { BrowserRouter as Router, Route } from "react-router-dom";

import "../../assets/styles/_normalize.scss";
import "./app.scss";

export default class App extends Component {
  state = {
    news: [
      {
        id: "1",
        date: '2020-04-17',
        title: "Рождение слоненка",
        description:
          "В нашем зоопарке впервые родился новый член слоновей семьи. Маленький Элик родился в ночь с субботы на воскресенье."
      },
      { id: "2", title: "Second" },
      { id: "3", title: "Second" },
    ]
  };
  render() {
    const { news } = this.state;

    return (
      <div className="app">
        <Router>
          <AppHeader />
          <Route path="/" component={HomePage} exact />
          <Route path="/animals" component={AnimalsPage} />
          <Route path="/news" render={() => <NewsPage news={ news } />} />
        </Router>
      </div>
    );
  }
}
