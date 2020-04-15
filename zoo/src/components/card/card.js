import React from "react";
import { Link } from "react-router-dom";
import "./card.scss";

const Card = ({id, name}) => {
  return (
    <Link className="card" to={`/${id}`}>
      <img src="./images/tiger.jpg" alt={name} className="card__image" />
      <header className="card__title">{name}</header>
    </Link>
  );
};

export default Card;
