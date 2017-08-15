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

// load persisted todos state from localStorage
const preloadedState = loadState();

const middleware = applyMiddleware(logger);
const store = createStore(
  rootReducer,
  preloadedState,
  composeWithDevTools(middleware),
);

// on store change, save todos to localStorage
store.subscribe(() => {
  saveState({
    todos: store.getState().todos
  });
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();
