import {
  ADD_TODO,
  EDIT_TODO,
  // REMOVE_TODO,
  TOGGLE_TODO,
  // CLEAR_COMPLETED
} from './../constants';

const updateTodo = (state, action, prop, val) => {
  if (state.id !== action.id) {
    return state;
  }
  return {
    ...state,
    [prop]: val
  }
}

const todo = (state, action) => {
  switch (action.type) {
    case ADD_TODO: {
      return {
        id: action.id,
        text: action.text,
        completed: false,
      }
    }
    case TOGGLE_TODO: {
      return updateTodo(state, action, 'completed', !state.completed);
    }
    case EDIT_TODO: {
      return updateTodo(state, action, 'text', action.text);
    }
    default:
      return state;
  }
}

export default todo;
