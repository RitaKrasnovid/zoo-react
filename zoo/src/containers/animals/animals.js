import React, { Component } from "react";
import { connect } from 'react-redux';
import { getAllAnimals, filterAnimalsByOrder } from '../../store/actions';

import SectionLayout from "../../components/section-layout";
import AnimalsList from "../../components/animals-list";
import RoundButton from "../../components/round-button";

import "./animals.scss";

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const animalOrders = ['bird', 'mammal', 'fish', 'reptile'];

class AnimalsPage extends Component {
  componentDidMount() {
    const { dispatch } = this.props;

    dispatch(getAllAnimals());
  }

  filter = (type) => {
    const { dispatch } = this.props;

    dispatch(filterAnimalsByOrder(type))
  }

  render() {
    const { animals } = this.props;
    const headerButtons = animalOrders.map(type => {
      const order = capitalizeFirstLetter(type);

      return (
        <div className="animals__header-button" onClick={() => this.filter(order)} key={type}>
          <RoundButton name={type} />
           {order}
        </div>
      );
    });

    return (
      <div className="animals">
        <SectionLayout>
          <h1 className="animals__title">Animals of our ZOO</h1>
          <header className="animals__section-header">
            {headerButtons}
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
