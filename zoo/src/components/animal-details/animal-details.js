import React from "react";
import { connect } from 'react-redux';
import SectionLayout from "../section-layout";
import { getAnimal } from '../../store/reducers/animals';

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
}

const mapStateToProps = (state, { id }) => ({
  animal: getAnimal(state.animals, id),
});

export default connect(mapStateToProps)(AnimalDetails);
