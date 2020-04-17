import React, { Component } from "react";
import AppHeader from "../app-header";
import HomePage from '../../pages/home';
import AnimalsPage from '../../pages/animals';
import AnimalDetails from '../animal-details';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import '../../assets/styles/_normalize.scss';
import './app.scss';

export default class App extends Component {
  state = {
    animals: [
      {
        id: '1',
        name: "Крылатка-зебра",
        description:
          "Астахов Д.А., Попонов С.Ю., Попонова В.Р. 2003. Некоторые аспекты длительного содержания морских рыб в искусственных условиях. Сообщение 5. Семейство Scorpaenidae (Actinopterygii, Scorpaeniformes) // Научные исследования в зоологических парках. Вып. 16. С. 42-49."
      },
      { id: '2', name: "Second" },
      { id: '3', name: "Second" },
      { id: '4', name: "Second" },
      { id: '5', name: "Second" }
    ],
  }
  render() {
    const {animals} = this.state;

    return(
      <div className="app">
        <Router>
          <AppHeader />
          <Route path="/" component={HomePage} exact />
          <Route path="/animals" exact render={() => <AnimalsPage animals={animals}/>}/>
          <Route path="/animals/:id"
            render={({match}) => {
              const id = match.params.id;
              const animal = animals.filter(an => an.id === id); //TODO temp solution

              return <AnimalDetails animal={animal[0]} />
            }}
          
          />
        </Router>
      </div>
    );
  }
}
