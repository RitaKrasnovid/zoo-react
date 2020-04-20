import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./card.scss";

export default class Card extends Component {
  state = {
    imageUrl: './images/default-image.png',
  };

  constructor() {
    super();

  }

  // if (images[0].data.data) {
  //   const blob = new Blob(images[0].data.data, { type: 'image/jpg' });

  //   const reader = new FileReader();
  //   reader.readAsDataURL(blob);

  //   reader.onload = () => {
  //     this.setState(({imageUrl}) => {
  //       return {
  //         imageUrl: reader.result,
  //       }
  //     });
  //   };
  // }

  render() {
    const { imageUrl } = this.state;
    const { id, name } = this.props;

    return (
      <Link className="card" to={`/animals/${id}`}>
        <img src={imageUrl} alt={name} className="card__image" id="image" />
        <header className="card__title">{name}</header>
      </Link>
    );
  }
}

