import { v4 } from 'uuid';
import {
  FETCH_TODOS_REQUEST,
  FETCH_TODOS_SUCCESS,
  FETCH_TODOS_FAILURE,
  ADD_TODO,
  EDIT_TODO,
  REMOVE_TODO,
  TOGGLE_TODO,
  REMOVE_TODOS
} from './../constants';
import * as api from '../api';
import { getIsFetching } from '../reducers';

// async action creators
export const fetchTodos = (filter) => (dispatch, getState) => {
  if (getIsFetching(getState(), filter)) {
    return Promise.resolve();
  }
  dispatch({
    type: FETCH_TODOS_REQUEST,
    filter,
  });

  return api.fetchTodos(filter).then(
    response => {
      dispatch({
        type: FETCH_TODOS_SUCCESS,
        filter,
        response,
      });
    },
    error => {
      dispatch({
        type: FETCH_TODOS_FAILURE,
        filter,
        message: error.message || 'Some error',
      }
    );
  });
};

// action creators
export const addTodo = (text) => ({
   type: ADD_TODO, text, id: v4(),
});

export const editTodo = (id, text) => ({
   type: EDIT_TODO, id, text,
});

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO, id,
});

export const removeTodo = (id) => ({
  type: REMOVE_TODO, id,
});

export const removeTodos = (ids) => ({
  type: REMOVE_TODOS,
  ids,
});