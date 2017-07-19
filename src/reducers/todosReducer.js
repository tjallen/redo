import { ADD_TODO, REMOVE_TODO } from './../constants';

const initialState = {
  todos: [],
};

function todosReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO: {
      return state;
    }
    case REMOVE_TODO: {
      return state;
    }
    default:
      return state;
  }
}

export default todosReducer;
