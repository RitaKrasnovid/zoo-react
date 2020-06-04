import React from "react";

import "./hamburger.scss";

const Hamburger = ({ onToggleNav, show }) => {
  return (
    <button className='toggle' onClick={() => onToggleNav()}>
      <div className={`toggle__hamburger ${show ? 'cross' : ''}`}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </button>
  );
};

export default Hamburger;
