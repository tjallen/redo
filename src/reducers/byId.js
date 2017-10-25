import {
  FETCH_TODOS_SUCCESS,
  EDIT_TODO_SUCCESS,
  TOGGLE_TODO_SUCCESS,
  REMOVE_TODO_SUCCESS,
  REMOVE_TODOS_SUCCESS,
} from '../actions';

const byId = (state = {}, action) => {
  if (action.response) {
    switch (action.type) {
      case FETCH_TODOS_SUCCESS:
      case EDIT_TODO_SUCCESS:
      case TOGGLE_TODO_SUCCESS:
        return {
          ...state,
          ...action.response.entities.todos,
        };
      case REMOVE_TODO_SUCCESS:
      case REMOVE_TODOS_SUCCESS:
        const ids = action.response.result;
        const stateCopy = Object.assign({}, state);
        const filtered = Object.keys(stateCopy)
          .filter(key => !ids.includes(key))
          .reduce((obj, key) => {
            obj[key] = stateCopy[key];
            return obj;
          }, {});
        return {
          ...filtered
        };
      default: {
        console.log(
          `byId reached default case
          ${JSON.stringify(state)}
          ${JSON.stringify(action)}
          `);
        return state;
      }
    }

  }
  return state;
}

export default byId;

export const getTodo = (state, id) => state[id];