import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

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