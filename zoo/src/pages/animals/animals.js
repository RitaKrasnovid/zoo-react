import React, { Component } from "react";
import AnimalsList from '../../components/animals-list';

import './animals.scss';

export default class AnimalsPage extends Component {
  animals = [{id: 1, name: 'First'}, {id: 2, name: 'Second'}, {id: 3, name: 'Second'}, {id: 4, name: 'Second'}, {id: 5, name: 'Second'}];

  render() {
    return(
      <div className="animals">
        <h1 className="animals__title">Animals of our ZOO</h1>
        <AnimalsList animals={this.animals}/>
      </div>
    );
  }
}

