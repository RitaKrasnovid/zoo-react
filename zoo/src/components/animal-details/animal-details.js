import React from "react";
import SectionLayout from "../section-layout";

import "./animal-details.scss";

const AnimalDetails = ({ animal }) => {
  const { name, description } = animal;

  return (
    <div className="details">
      <SectionLayout>
        <header className="details__header">{name}</header>
        <article className="details__description">{description}</article>
      </SectionLayout>
    </div>
  );
};

export default AnimalDetails;
