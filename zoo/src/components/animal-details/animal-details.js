import React, { Component } from "react";
import { connect } from 'react-redux';
import SectionLayout from "../section-layout";
import { getAllAnimals } from '../../store/actions';
import { getAnimal } from '../../store/reducers/animals';
import YouTubeVideo from '../video-player';

import "./animal-details.scss";

class AnimalDetails extends Component {
  componentDidMount() {
    const { dispatch, id } = this.props;

    dispatch(getAllAnimals());

    getAnimal(id);
  }


  render() {
    const { animal } = this.props;
    const showVideo = !!animal.videoId;

    let iframe;

    if(showVideo) {
      iframe = <YouTubeVideo id={animal.videoId} />
    }

    return (
      <div className="details">
        <SectionLayout>
          <header className="details__header">{animal.name}</header>
          <article className="details__description">{animal.description}</article>
          {iframe}
        </SectionLayout>
      </div>
    );
  }
}

AnimalDetails.defaultProps = {
  animal: {name: 'Animal not found'},
};

const mapStateToProps = (state, { id }) => ({
  animal: getAnimal(state.animals, id),
});

export default connect(mapStateToProps)(AnimalDetails);
