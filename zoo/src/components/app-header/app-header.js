import React from 'react';

import './app-header.scss';

const AppHeader = () => {
  return (
    <header className="app-header">
      <nav className="app-header_nav">
        <div className="app-header__logo">
          <a className="app-header__logo--nav-home" href="#">Super zoo</a>
        </div>
        <ul className="app-header__list">
          <li className="app-header__item">
            <a className="app-header__nav-link" href="#">Home</a>
          </li>
          <li className="app-header__item">
            <a className="app-header__nav-link" href="#">Animals</a>
          </li>
          <li className="app-header__item">
            <a className="app-header__nav-link" href="#">News</a>
          </li>
          <li className="app-header__item">
            <a className="app-header__nav-link" href="#">About Zoo</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default AppHeader;
