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
import { v4 } from 'uuid';

const preloadedState = {
  todos: [
      { id: v4(), text: 'foo', editing: false, completed: false },
      { id: v4(), text: 'bar', editing: false, completed: true },
      { id: v4(), text: 'baz', editing: false, completed: false },
  ]
} 

const middleware = applyMiddleware(logger);
const store = createStore(
  rootReducer,
  preloadedState,
  composeWithDevTools(middleware),
);

window.store = store;

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();
