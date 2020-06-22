import React, { Component } from 'react';
import Hamburger from '../hamburger';

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
          </ul>
          <Hamburger onToggleNav={this.onToggleNav} show={show} />
        </nav>
      </header>
    );
  }
}
