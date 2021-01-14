import React, { Component } from "react";
import { connect } from 'react-redux';
import { getAuthData } from '../../store/actions';
import SectionLayout from "../../components/section-layout";

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
        <SectionLayout className="home__section">
          <h1 className="home__greeting">
            {userName}
            <div>Welcome to Super ZOO</div>
          </h1>
          <img alt="tiger" src="./images/tiger.jpg" className="home__image"/>
        </SectionLayout>
      </div>
    );
  }
};

const mapStateToProps = state => ({
  user: state.auth.getUser,
});

export default connect(mapStateToProps)(HomePage);
