import ApiService from '../services/api-service';
import * as types from '../constants/actionsType';

const apiService = new ApiService();

const receiveAnimals = animals => ({
  type: types.RECEIVE_ANIMALS,
  animals,
});

export const getAllAnimals = () => dispatch => {
  apiService.getAllAnimals().then(data => {
    dispatch(receiveAnimals(data));
  });
}
