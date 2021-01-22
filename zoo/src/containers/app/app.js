import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from 'react-redux';
import AppHeader from "../../components/app-header";
import HomePage from '../home';
import AnimalsPage from '../animals';
import AnimalDetails from '../../components/animal-details';
import NewsPage from "../news";
import NewsForm from "../news-form";
import AboutZooPage from "../about-zoo";

import GuardedRoute from '../../routerGuard';
import { getAuthData } from '../../store/actions';

import "../../assets/styles/_normalize.scss";
import "./app.scss";

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;

    dispatch(getAuthData());
  }

  render() {
    const { isLoggedIn } = this.props;

    return (
      <div className="app">
        <Router>
          <AppHeader />
          <Route path="/" component={HomePage} exact />
          <Route path="/animals" component={AnimalsPage} exact />
          <Route path="/animals/:id" component={AnimalDetails} exact />
          <Route path="/news" component={NewsPage} />
          <Route path="/about" component={AboutZooPage} />
          <GuardedRoute path='/news_form' component={NewsForm} auth={isLoggedIn} exact />
          <GuardedRoute path='/news_form/:id' component={NewsForm} auth={isLoggedIn} exact />
        </Router>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoggedIn: state.auth.isLoggedIn,
});

export default connect(mapStateToProps)(App);
