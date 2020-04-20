import React, { Component } from "react";
import AnimalsList from "../../components/animals-list";
import RoundButton from "../../components/round-button";

import "./animals.scss";

export default class AnimalsPage extends Component {
  render() {
    const { animals } = this.props;

    return (
      <div className="animals">
        <h1 className="animals__title">Animals of our ZOO</h1>
        <section className="animals__section">
          <header className="animals__sectionHeader">
            <div className="animals__sectionLink">
              <RoundButton name={"bird"} onToggle={() => console.log("bird")} />
              Birds
            </div>
            <div className="animals__sectionLink">
              <RoundButton
                name={"mammal"}
                onToggle={() => console.log("mammal")}
              />
              Mammals
            </div>
            <div className="animals__sectionLink">
              <RoundButton name={"fish"} onToggle={() => console.log("fish")} />
              Fish
            </div>
            <div className="animals__sectionLink">
              <RoundButton
                name={"reptile"}
                onToggle={() => console.log("reptile")}
              />
              Reptiles
            </div>
          </header>
          <AnimalsList animals={animals} />
        </section>
      </div>
    );
  }
}
