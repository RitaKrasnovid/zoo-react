import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import animals from './animals';
import news from './news';
import auth from './auth';

export default combineReducers({
  animals,
  news,
  auth,
  form: formReducer,
})
