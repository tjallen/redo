import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import rootReducer from './reducers';

const thunk = (store) => (next) => (action) =>
  typeof(action) === 'function'
  ? action(store.dispatch, store.getState)
  : next(action);

const configureStore = () => {
  const middleware = [
    thunk,
    logger,
  ];
  return createStore(
    rootReducer,
    composeWithDevTools(
      applyMiddleware(...middleware),
    ),
  );
}

export default configureStore;