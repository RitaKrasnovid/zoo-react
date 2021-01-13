import React, { Component } from 'react';
import Hamburger from '../hamburger';
import LoginButton from '../../components/login-button';

import { Link } from 'react-router-dom';

import './app-header.scss';

const navigations = [
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
  }
];

export default class AppHeader extends Component {
  state = {
    show: false,
    user: {},
    error: null,
    authenticated: false,
  }

  onToggleNav = () => {
    this.setState(({ show }) => {
      return {
        show: !show,
      }
    });
  };

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
    const { show, authenticated } = this.state;

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
              <LoginButton
                authenticated={authenticated}
                handleNotAuthenticated={this._handleNotAuthenticated}
              />
            </li>
          </ul>
          <Hamburger onToggleNav={this.onToggleNav} show={show} />
        </nav>
      </header>
    );
  }
}
