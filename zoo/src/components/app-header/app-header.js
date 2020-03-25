import React, { Component } from 'react';
import Hamburger from '../hamburger';

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
            <a className='app-header__logo--nav-home' href='/'>
              Super zoo
            </a>
          </div>
          <ul className={`app-header__list ${show ? 'show' : ''}`}>
            <li className='app-header__item'>
              <a className='app-header__nav-link' href='/'>
                Home
              </a>
            </li>
            <li className='app-header__item'>
              <a className='app-header__nav-link' href='/'>
                Animals
              </a>
            </li>
            <li className='app-header__item'>
              <a className='app-header__nav-link' href='/'>
                News
              </a>
            </li>
            <li className='app-header__item'>
              <a className='app-header__nav-link' href='/'>
                About Zoo
              </a>
            </li>
          </ul>
          <Hamburger onToggleNav={this.onToggleNav} show={show} />
        </nav>
      </header>
    );
  }
}
