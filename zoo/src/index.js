import React from 'react';
import ReactDom from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './store/reducers';
import App from './containers/app';

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));
