import { combineReducers } from 'redux';
import { RECEIVE_AUTH } from '../../constants/actionsType';

const isLoggedIn = (state = false, action) => {
  switch (action.type) {
    case RECEIVE_AUTH:
      const { data } = action;

      return data.success;
    default:
      return state;
  }
};

const getUser = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_AUTH:
      const { data } = action;
      const user = data.user;

      return {
        ...user,
      };
    default:
      return state;
  }
};

export default combineReducers({
  isLoggedIn,
  getUser,
})
