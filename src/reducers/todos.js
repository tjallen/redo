import {
  ADD_TODO,
  EDIT_TODO,
  REMOVE_TODO,
  TOGGLE_TODO,
  // CLEAR_COMPLETED
} from './../constants';
import { combineReducers } from 'redux';
import todo from './todo';

const allIds = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO: { 
      return [...state, action.id];
    }
    case REMOVE_TODO: {
      return state.filter(id => id !== action.id);
    }
    default:
      return state;
  }
}

function byId(state = {}, action) {
  switch (action.type) {
    case ADD_TODO:
    case EDIT_TODO:
    case TOGGLE_TODO:
      return {
        ...state,
        [action.id]: todo(state[action.id], action),
      }
      case REMOVE_TODO: {
        const copied = Object.assign({}, state);
        delete copied[action.id];
        return copied;
      }
    // case CLEAR_COMPLETED : {
    //   return state.filter((todo) => todo.completed === false);
    // }
    default:
      return state;
  }
}

const todosReducer = combineReducers({
  byId,
  allIds,
});

const getAllTodos = (state) =>
  state.allIds.map(id => state.byId[id]);

export default todosReducer;
// named export selector
export const getVisibleTodos = (state, filter) => {
  const allTodos = getAllTodos(state);
  switch (filter) {
    case 'all': return allTodos;
    case 'active': return allTodos.filter(todo => !todo.completed);
    case 'completed': return allTodos.filter(todo => todo.completed);
    default:
      console.log(
        `trying to filter state (todos) by unknown or erroneous filter: ${filter}`
      )
      return allTodos;
  }
};