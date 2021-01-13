import React, { Component } from "react";
import AppHeader from "../../components/app-header";
import HomePage from '../home';
import AnimalsPage from '../animals';
import AnimalDetails from '../../components/animal-details';
import NewsPage from "../news";
import NewsForm from "../news-form";

import { BrowserRouter as Router, Route } from "react-router-dom";
import GuardedRoute from '../../routerGuard';

import "../../assets/styles/_normalize.scss";
import "./app.scss";

export default class App extends Component {
  state = {
    authenticated: false,
    user: {},
  }

  componentDidMount() {
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

    return (
      <div className="app">
        <Router>
          <AppHeader authenticated={authenticated}/>
          <Route path="/" component={HomePage} exact user={user} />
          <Route path="/animals" component={AnimalsPage} exact />
          <Route path="/animals/:id" component={AnimalDetails} exact />
          <Route path="/news" component={NewsPage} />
          <GuardedRoute path='/news_form' component={NewsForm} auth={authenticated} />
        </Router>
      </div>
    );
  }
}
