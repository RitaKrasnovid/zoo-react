import React, { Component } from "react";
import { connect } from 'react-redux';
import SectionLayout from "../section-layout";
import { getAnimalById } from '../../store/actions';
import { getAnimal } from '../../store/reducers/animals';

import "./animal-details.scss";

class AnimalDetails extends Component {
  componentDidMount() {
    const { dispatch, id } = this.props;

    dispatch(getAnimalById(id));
  }


  render() {
    const { animal } = this.props;

    return (
      <div className="details">
        <SectionLayout>
          <header className="details__header">{animal.name}</header>
          <article className="details__description">{animal.description}</article>
        </SectionLayout>
      </div>
    );
  }
}

AnimalDetails.defaultProps = {
  animal: {name: 'Animal not found'},
};

const mapStateToProps = (state, { id }) => ({
  animal: state.animals.getAnimal,
});

export default connect(mapStateToProps)(AnimalDetails);
