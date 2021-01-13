import { combineReducers } from 'redux';
import animals from './animals';
import news from './news';
import auth from './auth';

export default combineReducers({
  animals,
  news,
  auth,
})
