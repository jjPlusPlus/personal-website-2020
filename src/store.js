import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import rootSaga from './sagas';
import { logger } from 'redux-logger';

import firebase from "./reducers/firebase";

import createSagaMiddleware from 'redux-saga';
const sagaMiddleware = createSagaMiddleware();

export default function configureStore() {

  const store = createStore(
    firebase,
    applyMiddleware(sagaMiddleware, logger)
  );

  sagaMiddleware.run(rootSaga);
  return store;
}
