/* eslint-disable no-underscore-dangle */
import { createStore, applyMiddleware, compose } from 'redux';
import ajax from 'src/middlewares/ajax';
import refreshToken from 'src/middlewares/refreshToken';
import reducer from 'src/reducers';

const middlewares = applyMiddleware(ajax, refreshToken);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancers = composeEnhancers(middlewares);

const store = createStore(reducer, enhancers);

export default store;
