import React, { Component } from "react";
import SectionLayout from "../section-layout";
import ApiService from '../../services/api-service';

import "./animal-details.scss";

export default class AnimalDetails extends Component {
  apiService = new ApiService();

  state = {
    animal: {},
  };

  constructor() {
    super();
    this.updateAnimalInfo(3);
  }

  updateAnimalInfo(id) {  // TODO: temp solution, data will get from store
    this.apiService.getAnimalById(id).then(data => {
      this.setState(() => {
        return {
          animal: {
            name: data.title,
            ...data,
          },
        }
      });
    })
  };

  render() {
    const { animal } = this.state;
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
}
