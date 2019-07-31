import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import { logger } from 'redux-logger';
import rootSaga from './sagas';
import createSagaMiddleware from 'redux-saga';

import firebase from "./reducers/firebase";

export default function configureStore() {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    combineReducers({
      firebase
    }),
    applyMiddleware(sagaMiddleware, logger)
  );
  sagaMiddleware.run(rootSaga);
}
