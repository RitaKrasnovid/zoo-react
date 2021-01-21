import React, { Component } from "react";
import { connect } from 'react-redux';
import SectionLayout from "../section-layout";
import YouTubeVideo from '../video-player';
import { getAnimalById } from '../../store/actions';

import "./animal-details.scss";

class AnimalDetails extends Component {
  componentDidMount() {
    const { dispatch, match } = this.props;
    const {
      params: { id },
    } = match;

    dispatch(getAnimalById(id));
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

const mapStateToProps = state => ({
  animal: state.animals.getAnimal,
});

export default connect(mapStateToProps)(AnimalDetails);
