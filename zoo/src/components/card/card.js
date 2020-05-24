import React, { Component } from "react";
import { Link } from "react-router-dom";
import Image from "../image/";

import "./card.scss";

export default class Card extends Component {
  render() {
    const { id, name, images } = this.props;

    return (
      <Link className="card" to={`/animals/${id}`}>
        <Image src={images[0]} className="card__image" />
        <header className="card__title">{name}</header>
      </Link>
    );
  }
}

