import React from "react";
import Card from "../card";

import "./animals-list.scss";

const AnimalsList = ({ animals }) => {
  const elements = animals.map(item => {
    const { id } = item;

    return (
      <li key={id} className="animals-list__card">
        <Card { ...item } />
      </li>
    );
  });

  return <ul className="animals-list">{elements}</ul>;
};

export default AnimalsList;
