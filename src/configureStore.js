import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import rootReducer from './reducers';

const addPromiseSupportToDispatch = (store) => {
  const rawDispatch = store.dispatch;
  return (action) => {
    if (typeof action.then === 'function') {
      return action.then(rawDispatch);
    }
    return rawDispatch(action);
  }
}
// returns a configured store instance
const configureStore = () => {

  const middleware = applyMiddleware(logger);
  const store = createStore(
    rootReducer,
    composeWithDevTools(middleware),
  );

  store.dispatch = addPromiseSupportToDispatch(store);
  
  return store;
}

export default configureStore;