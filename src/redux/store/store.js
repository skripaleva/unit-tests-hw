import { applyMiddleware, createStore } from 'redux';
import reducer from '../rootReducer';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const store = createStore(reducer, applyMiddleware(logger, thunk));

export default store;
