import {
  FETCH_TODOS_SUCCESS,
  EDIT_TODO_SUCCESS,
  TOGGLE_TODO_SUCCESS,
  REMOVE_TODO_SUCCESS
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
        const copy = Object.assign({}, state);
        delete copy[action.response.result];
        return { ...copy };
      default: {
        console.log(`byId reached default case ${JSON.stringify(state)} ${JSON.stringify(action)}`);
        return state;
      }
    }

  }
  return state;
}

export default byId;

export const getTodo = (state, id) => state[id];