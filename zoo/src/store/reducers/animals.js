import { combineReducers } from 'redux';
import { RECEIVE_ANIMALS } from '../../constants/actionsType';

const initialState = {
  animals: [{
    id: '',
    name: '',
    order: '',
    family: '',
    description: '',
  }]
};

const animals = (state = initialState.animals, action) => {
  switch (action.type) {
    case RECEIVE_ANIMALS:
      return state.map(animal => {
        return {
          name: animal.title,
          ...animal,
        }
      });
    default:
      return state;
  }
};

const byId = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_ANIMALS:
      return {
        ...state,
        ...action.animals.reduce((obj, animal) => {
          obj[animal.id] = {
            name: animal.title,
            ...animal,
          };

          return obj;
        }, {})
      }

    default:
      const { animalId } = action;

      if (animalId) {
        return {
          ...state,
          [animalId]: animals(state[animalId], action)
        }
      }

      return state;
  }
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

const animalsOrder = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_ANIMALS:
      return action.animals.map(animal => animal.order);
    default:
      return state;
  }
};

export default combineReducers({
  getAll,
  byId,
  animalsOrder,
})

export const getAnimal = (state, id) => {
  return id ? state.byId[id] : {};
}

export const getAnimalByClass = (state) =>
  state.animalsOrder.map(order => order);
