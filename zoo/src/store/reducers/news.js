import { combineReducers } from 'redux';
import { RECEIVE_NEWS } from '../../constants/actionsType';

const getAll = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_NEWS:
      return action.news.map(news => {
        return {
          date: news.updatedAt,
          ...news,
        };
      });
    default:
      return state;
  }
};

export default combineReducers({
  getAll,
})
