import { ADD_TODO, REMOVE_TODO } from './../constants';

const initialState = {
  todos: [
    { text: 'foo' },
    { text: 'bar' },
    { text: 'baz' },
  ],
};

function todosReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO: {
      return Object.assign({}, state, {
        todos: state.todos.concat({ text: action.text }),
      });
    }
    case REMOVE_TODO: {
      return state;
    }
    default:
      return state;
  }
}

export default todosReducer;
