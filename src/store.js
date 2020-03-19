import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import { logger } from 'redux-logger';

import { firebaseReducer } from 'react-redux-firebase';

export default function configureStore() {
  const rootReducer = combineReducers({
    firebase: firebaseReducer
  });

  const store = createStore(
    rootReducer,
    applyMiddleware(logger)
  );

  return store;
}
