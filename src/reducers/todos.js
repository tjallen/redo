import { v4 } from 'uuid';
import { ADD_TODO, EDIT_TODO, REMOVE_TODO, TOGGLE_TODO } from './../constants';

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
    case EDIT_TODO: { // TODO placeholder
      return state;
    }
    case REMOVE_TODO: {
      // filter todos array to include all but the id passed in action
      return state.filter((todo) => todo.id !== action.id); 
    }
    case TOGGLE_TODO: {
      // map over all todos. ignore if id doesn't match, else return toggled
      return state.map((todo) => {
        if (todo.id !== action.id) {
          return todo;
        }
        return {
          ...todo,
          completed: !todo.completed,
        }
      })
    }
    default:
      return state;
  }
}

export default todosReducer;
