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

const receiveNewsDetails = news => ({
  type: types.RECEIVE_NEWS_DETAIL,
  news,
});

const addNews = news => ({
  type: types.ADD_NEWS,
  news,
});

const deleteNews = news => ({
  type: types.DELETE_NEWS,
  news,
});

const editNews = news => ({
  type: types.EDIT_NEWS,
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

export const getNewsById = id => dispatch => {
  apiService.getNewsById(id).then(data => {
    dispatch(receiveNewsDetails(data));
  });
}

export const createNews = body => dispatch => {
  apiService.createNews(body).then(data => {
    dispatch(addNews(data));
  });
}

export const removeNews = id => dispatch => {
  apiService.deleteNews(id).then(data => {
    dispatch(deleteNews(data));
  });
}

export const updateNews = body => dispatch => {
  apiService.updateNews(body).then(data => {
    dispatch(editNews(data));
  });
}

export const getAuthData = () => dispatch => {
  apiAuth.loginSuccess().then(data => {
    dispatch(receiveAuth(data));
  });
}
