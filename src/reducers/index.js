import { combineReducers } from 'redux';
import todos from './todos';
import settings from './settings';

const rootReducer = combineReducers({
  todos,
  settings
});

export default rootReducer;

