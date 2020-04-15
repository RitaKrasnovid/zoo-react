import React, { Component } from 'react';
import Hamburger from '../hamburger';

import { Link } from 'react-router-dom';

import './app-header.scss';

export default class AppHeader extends Component {
  state = {
    show: false,
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

    return (
      <header className='app-header'>
        <nav className='app-header__nav'>
          <div className='app-header__logo'>
            <Link className='app-header__logo--nav-home' to='/'>
              Super zoo
            </Link>
          </div>
          <ul className={`app-header__list ${show ? 'show' : ''}`}>
            <li className='app-header__item'>
              <Link className='app-header__nav-link' to="/">
                Home
              </Link>
            </li>
            <li className='app-header__item'>
              <Link className='app-header__nav-link' to="/animals">
                Animals
              </Link>
            </li>
            <li className='app-header__item'>
              <Link className='app-header__nav-link' to="/news">
                News
              </Link>
            </li>
            <li className='app-header__item'>
              <Link className='app-header__nav-link' to="/about">
                About Zoo
              </Link>
            </li>
          </ul>
          <Hamburger onToggleNav={this.onToggleNav} show={show} />
        </nav>
      </header>
    );
  }
}
