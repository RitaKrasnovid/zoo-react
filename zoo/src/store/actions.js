import ApiService from '../services/api-service';
import * as types from '../constants/actionsType';

const apiService = new ApiService();

const receiveAnimals = animals => ({
  type: types.RECEIVE_ANIMALS,
  animals,
});

const receiveAnimalDetails = animal => ({
  type: types.RECEIVE_ANIMAL_DETAIL,
  animal,
});

const receiveNews = news => ({
  type: types.RECEIVE_NEWS,
  news,
});

export const getAllAnimals = () => dispatch => {
  apiService.getAllAnimals().then(data => {
    dispatch(receiveAnimals(data));
  });
}

export const getAnimalById = id => dispatch => {
  apiService.getAnimalById(id).then(data => {
    dispatch(receiveAnimalDetails(data));
  });
}

export const filterAnimalsByOrder = (order) => dispatch => {
  apiService.getAnimalsByOrder(order).then(data => {
    dispatch(receiveAnimals(data));
  });
}

export const getAllNews = () => dispatch => {
  apiService.getAllNews().then(data => {
    dispatch(receiveNews(data));
  });
}
