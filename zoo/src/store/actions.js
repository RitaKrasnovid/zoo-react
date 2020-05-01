import ApiService from '../services/api-service';
import * as types from '../constants/actionsType';

const apiService = new ApiService();

const receiveAnimals = animals => ({
  type: types.RECEIVE_ANIMALS,
  animals,
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

export const getAllNews = () => dispatch => {
  apiService.getAllNews().then(data => {
    dispatch(receiveNews(data));
  });
}
