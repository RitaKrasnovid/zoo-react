import React from "react";

import "./round-button.scss";

const RoundButton = ({ name }) => {
  return (
    <button className={`round-button ${name}`}></button>
  );
};

export default RoundButton;
