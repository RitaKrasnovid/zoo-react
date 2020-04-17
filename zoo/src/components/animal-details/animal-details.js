import React from "react";

import "./animal-details.scss";

const AnimalDetails = ({ animal }) => {
  const {name, description} = animal;

  return (
    <div className="details">
      <div className="details__content">
        <section className="details__section">
          <header className="details__header">{name}</header>
          <article className="details__description">{description}</article>
        </section>
      </div>
    </div>
  );
};

export default AnimalDetails;
