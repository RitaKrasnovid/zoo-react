import { combineReducers } from 'redux';
import { RECEIVE_NEWS, ADD_NEWS, DELETE_NEWS } from '../../constants/actionsType';

const getAll = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_NEWS:
      return action.news.map(news => {
        return {
          date: news.updatedAt,
          ...news,
        };
      });

    case ADD_NEWS:
      return state.concat([action.news]);

    case DELETE_NEWS:
      return state.filter(news => news.id !== action.news.id);

    default:
      return state;
  }
};

export default combineReducers({
  getAll,
})
