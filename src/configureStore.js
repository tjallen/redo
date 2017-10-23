import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import promise from 'redux-promise';
import rootReducer from './reducers';

const configureStore = () => {
  const middleware = [
    logger,
    promise
  ];
  return createStore(
    rootReducer,
    composeWithDevTools(
      applyMiddleware(...middleware),
    ),
  );
}

export default configureStore;