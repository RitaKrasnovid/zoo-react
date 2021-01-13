import React, { Component } from "react";
import { connect } from 'react-redux';
import { getAuthData } from '../../store/actions';

import './home.scss';

class HomePage extends Component {
  componentDidMount() {
    const { dispatch } = this.props;

    dispatch(getAuthData());
  }

  render() {
    const { user } = this.props;

    let userName = '';

    if(user) {
      userName = user.name;
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

const mapStateToProps = state => ({
  user: state.auth.getUser,
});

export default connect(mapStateToProps)(HomePage);
