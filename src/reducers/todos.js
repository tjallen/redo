import { ADD_TODO, EDIT_TODO, REMOVE_TODO, TOGGLE_TODO, CLEAR_COMPLETED } from './../constants';

function todosReducer(state = [], action) {
  switch (action.type) {
    case ADD_TODO: {
      return state.concat({
        id: action.id,
        text: action.text,
        completed: false,
      });
    }
    case EDIT_TODO: {
      return state.map((todo) => {
        if (todo.id !== action.id) {
          return todo;
        }
        return {
          ...todo,
          text: action.text,
        }
      })
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
    case CLEAR_COMPLETED : {
      return state.filter((todo) => todo.completed === false);
    }
    default:
      return state;
  }
}

export default todosReducer;
// named export selector
export const getVisibleTodos = (state, filter) => {
  switch (filter) {
    case 'all': return state;
    case 'active': return state.filter(todo => !todo.completed);
    case 'completed': return state.filter(todo => todo.completed);
    default:
      console.log(
        `trying to filter state (todos) by unknown or erroneous filter: ${filter}`
      )
      return state;
  }
};