import React from "react";

import "./round-button.scss";

const RoundButton = ({ onToggle, name }) => {
  return (
    <button
      className={`round-button ${name}`}
      onClick={() => onToggle()}
    ></button>
  );
};

export default RoundButton;
