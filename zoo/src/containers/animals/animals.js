import React, { Component } from "react";
import { connect } from 'react-redux';
import { getAllAnimals } from '../../store/actions';

import SectionLayout from "../../components/section-layout";
import AnimalsList from "../../components/animals-list";
import RoundButton from "../../components/round-button";

import "./animals.scss";

class AnimalsPage extends Component {
  componentDidMount() {
    const { dispatch } = this.props;

    dispatch(getAllAnimals());
  }

  render() {
    const { animals } = this.props;

    return (
      <div className="animals">
        <SectionLayout>
          <h1 className="animals__title">Animals of our ZOO</h1>
          <header className="animals__sectionHeader">
            <div className="animals__headerButton" onClick={() => console.log('bird')}>
              <RoundButton name={"bird"} />
                Birds
              </div>
            <div className="animals__headerButton" onClick={() => console.log('mammal')}>
              <RoundButton name={"mammal"} />
                Mammals
              </div>
            <div className="animals__headerButton" onClick={() => console.log('fish')}>
              <RoundButton name={"fish"} />
                Fish
              </div>
            <div className="animals__headerButton" onClick={() => console.log('reptile')}>
              <RoundButton name={"reptile"} />
                Reptiles
              </div>
          </header>
          <AnimalsList animals={animals} />
        </SectionLayout>
      </div>
    );
  }
}

AnimalsPage.defaultProps = {
  animals: [],
};

const mapStateToProps = state => ({
  animals: state.animals.getAll,
});

export default connect(mapStateToProps)(AnimalsPage);
