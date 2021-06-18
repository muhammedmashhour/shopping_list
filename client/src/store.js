import { createStore, applyMiddleware, compose } from 'redux';

import thunk from 'redux-thunk';

import rootReducer from './reducers'

const thunkMiddleware = [thunk];

const store = createStore(rootReducer, {}, compose(
  applyMiddleware(...thunkMiddleware))
)

export default store;
