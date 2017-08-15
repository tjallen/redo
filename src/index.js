import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import rootReducer from './reducers';
import { loadState, saveState } from './localStorage';
import throttle from 'lodash/throttle';

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

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();
