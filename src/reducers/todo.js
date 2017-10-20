import {
  ADD_TODO,
  EDIT_TODO,
  // REMOVE_TODO,
  TOGGLE_TODO,
  // CLEAR_COMPLETED
} from './../constants';

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
      if (state.id !== action.id) {
        return state;
      }
      return {
        ...state,
        completed: !state.completed,
      }
    }
    case EDIT_TODO: {
      if (state.id !== action.id) {
        return state;
      }
      return {
        ...state,
        text: action.text,
      }
    }
    default:
      return state;
  }
}

export default todo;
