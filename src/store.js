import { createStore, applyMiddleware, combineReducers, compose } from "redux";

import firebase from "./reducers/firebase";

export default function configureStore() {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  return createStore(
    combineReducers({
      firebase
    }),
    composeEnhancers()
  );
}
