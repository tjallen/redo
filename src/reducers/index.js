import { combineReducers } from 'redux';
import settings from './settings';
import todos, * as fromTodos from './todos';

const rootReducer = combineReducers({
  todos,
  settings
});

export default rootReducer;
// named export selector
export const getVisibleTodos = (state, filter) => {
  console.log(`getVisibleTodos`)
  console.log(state);
  return fromTodos.getVisibleTodos(state.todos, filter)
}

