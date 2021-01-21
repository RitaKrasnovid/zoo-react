import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Hamburger from '../hamburger';
import LoginButton from '../../components/login-button';
import { getAuthData } from '../../store/actions';

import './app-header.scss';

const publicNavigations = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'Animals',
    path: '/animals',
  },
  {
    name: 'News',
    path: '/news',
  },
  {
    name: 'About Zoo',
    path: '/about'
  },
];

const privateNavigations = [
  {
    name: 'News Form',
    path: '/news_form',
  }
];

class AppHeader extends Component {
  state = {
    show: false,
  }

  componentDidMount() {
    const { dispatch } = this.props;

    dispatch(getAuthData());
  }

  onToggleNav = () => {
    this.setState(({ show }) => {
      return {
        show: !show,
      }
    });
  };

  render() {
    const { show } = this.state;
    const { isLoggedIn, user } = this.props;
    let navigations = publicNavigations;

    if(isLoggedIn && user.role === 'admin') {
      navigations = [...publicNavigations, ...privateNavigations];
    }

    const navigationLinks = navigations.map(nav => {
      const { name, path } = nav;

      return (
        <li className='app-header__item' key={name}>
          <Link className='app-header__nav-link' to={path}>
            {name}
          </Link>
        </li>
      );
    });

    return (
      <header className='app-header'>
        <nav className='app-header__nav'>
          <div className='app-header__logo'>
            <Link className='app-header__logo--nav-home' to='/'>
              Super zoo
            </Link>
          </div>
          <ul className={`app-header__list ${show ? 'show' : ''}`}>
            {navigationLinks}
            <li className='app-header__item'>
              <LoginButton authenticated={isLoggedIn} />
            </li>
          </ul>
          <Hamburger onToggleNav={this.onToggleNav} show={show} />
        </nav>
      </header>
    );
  }
}

const mapStateToProps = state => ({
  isLoggedIn: state.auth.isLoggedIn,
  user: state.auth.getUser,
});

export default connect(mapStateToProps)(AppHeader);
