import { combineReducers } from 'redux';
import { RECEIVE_NEWS, ADD_NEWS, DELETE_NEWS, EDIT_NEWS, RECEIVE_NEWS_DETAIL } from '../../constants/actionsType';

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
    
    case EDIT_NEWS:
      return state.map(news => {
        if(news.id === action.news.id) {
          return {
             ...news,
             title: action.data.title,
             description: action.data.description,
          }
        } else return news;
      })

    default:
      return state;
  }
};

const getNewsById = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_NEWS_DETAIL:
      const { news } = action;

      return {
        ...news,
      };
    default:
      return state;
  }
};

export default combineReducers({
  getAll,
  getNewsById,
})
