import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import rootReducer from './reducers';

const thunk = (store) => (next) => (action) =>
  typeof(action) === 'function'
  ? action(store.dispatch)
  : next(action);

const configureStore = () => {
  const middleware = [
    logger,
    thunk
  ];
  return createStore(
    rootReducer,
    composeWithDevTools(
      applyMiddleware(...middleware),
    ),
  );
}

export default configureStore;