import ApiService from '../services/api-service';
import ApiAuth from '../services/api-auth';

import * as types from '../constants/actionsType';

const apiService = new ApiService();
const apiAuth = new ApiAuth();

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

const receiveAuth = data => ({
  type: types.RECEIVE_AUTH,
  data,
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

export const getCurrentNews = limit => dispatch => {
  apiService.getCurrentNews(limit).then(data => {
    dispatch(receiveNews(data));
  });
}

export const getAuthData = () => dispatch => {
  apiAuth.loginSuccess().then(data => {
    dispatch(receiveAuth(data));
  });
}
