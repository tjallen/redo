import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import rootReducer from './reducers';
import { loadState, saveState } from './localStorage';
import throttle from 'lodash/throttle';

// returns a configured store instance
const configureStore = () => {
  // load persisted todos state from localStorage
  const preloadedState = loadState();

  const middleware = applyMiddleware(logger);
  const store = createStore(
    rootReducer,
    preloadedState,
    composeWithDevTools(middleware),
  );

  // on store change, save todos to localStorage
  store.subscribe(throttle(() => {
    saveState({
      todos: store.getState().todos
    });
  }, 1000));
  
  return store;
}

export default configureStore;