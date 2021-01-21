import { combineReducers } from 'redux';
import { RECEIVE_ANIMALS, RECEIVE_ANIMAL_DETAIL } from '../../constants/actionsType';

const initialState = {
  animals: [{
    id: '',
    name: '',
    order: '',
    family: '',
    description: '',
    images: [],
  }]
};

const getAll = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_ANIMALS:
      return action.animals.map(animal => {
         return {
          name: animal.title,
          ...animal,
        }
      });
    default:
      return state;
  }
};

const getAnimal = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_ANIMAL_DETAIL:
      const { animal } = action;

      return {
        name: animal.title,
        ...animal,
      };
    default:
      return state;
  }
};

const animalsOrder = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_ANIMALS:
      return action.animals.map(animal => animal.order);
    default:
      return state;
  }
};

export default combineReducers({
  getAll,
  animalsOrder,
  getAnimal,
})
