import { combineReducers } from 'redux';
import { RECEIVE_ANIMALS } from '../../constants/actionsType';

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
})

export const getAnimal = (state, id) => {
  if(id) {
    return state.getAll.find(element => element.id === id);
  }

  return {};
}

export const getAnimalByClass = (state) =>
  state.animalsOrder.map(order => order);
