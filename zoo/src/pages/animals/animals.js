import React, { Component } from "react";
import SectionLayout from "../../components/section-layout";
import AnimalsList from "../../components/animals-list";
import RoundButton from "../../components/round-button";
import ApiService from '../../services/api-service';

import "./animals.scss";

export default class AnimalsPage extends Component {
  apiService = new ApiService();

  state = {
    animals: [],
  };

  constructor() {
    super();
    this.updateAnimalsList();
  };

  updateAnimalsList() {
    this.apiService.getAllAnimals().then(data => {
      this.setState(() => {
        return {
          animals: data.map(animal => {
            return {
              name: animal.title,
              ...animal,
            }
          })
        }
      });
    })
  };

  render() {
    const { animals } = this.state;

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
