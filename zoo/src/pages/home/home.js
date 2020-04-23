import React from "react";

import './home.scss';

const HomePage = () => {
  return (
    <div className="home">
      <h1 className="home__greeting">Welcome to Super ZOO</h1>
      <img alt="tiger" src="./images/tiger.jpg" className="home__image"/>
    </div>
  );
};

export default HomePage;
