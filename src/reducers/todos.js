import { v4 } from 'uuid';
import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from './../constants';

const initialState = [
    { id: v4(), text: 'foo', completed: false },
    { id: v4(), text: 'bar', completed: true },
    { id: v4(), text: 'baz', completed: false },
];

function todosReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO: {
      return state.concat({
        id: action.id,
        text: action.text,
        completed: false,
      });
    }
    case REMOVE_TODO: {
      return state;
    }
    case TOGGLE_TODO: {
      return state;
    }
    default:
      return state;
  }
}

export default todosReducer;
