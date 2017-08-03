import { SET_VISIBLE_TODOS } from './../constants';

const initialState = {
  filter: 'DISPLAY_ALL',
};

function settingsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_VISIBLE_TODOS: return {
      ...initialState,
      filter: action.filter,
    };
    default:
      return state;
  }
}

export default settingsReducer;
