import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import rootReducer from './reducers';

// returns a configured store instance
const configureStore = () => {

  const middleware = applyMiddleware(logger);
  const store = createStore(
    rootReducer,
    composeWithDevTools(middleware),
  );
  
  return store;
}

export default configureStore;