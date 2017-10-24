import { normalize } from 'normalizr';
import * as schema from './schema';
import {
  FETCH_TODOS_REQUEST,
  FETCH_TODOS_SUCCESS,
  FETCH_TODOS_FAILURE,
  EDIT_TODO_SUCCESS,
  ADD_TODO_SUCCESS,
  REMOVE_TODO,
  TOGGLE_TODO_SUCCESS,
  REMOVE_TODOS
} from './../constants';
import * as api from '../api';
import { getIsFetching } from '../reducers';

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
      console.log(
        'normalized response',
        normalize(response, schema.arrayOfTodos)
      )
      dispatch({
        type: FETCH_TODOS_SUCCESS,
        filter,
        response: normalize(response, schema.arrayOfTodos),
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

export const addTodo = (text) => (dispatch) =>
  api.addTodo(text).then(response => {
    console.log(
      'normalized resp',
      normalize(response, schema.todo)
    )
    dispatch({
      type: ADD_TODO_SUCCESS,
      response: normalize(response, schema.todo),
    });
  });

export const editTodo = (id, text) => (dispatch) => {
  api.editTodo(id, text).then(response => {
    dispatch({
      type: EDIT_TODO_SUCCESS,
      response: normalize(response, schema.todo),
    });
  });
}
// export const editTodo = (id, text) => ({
//    type: EDIT_TODO, id, text,
// });

export const toggleTodo = (id) => (dispatch) =>
  api.toggleTodo(id).then(response => {
    dispatch({
      type: TOGGLE_TODO_SUCCESS,
      response: normalize(response, schema.todo),
    })
  })

export const removeTodo = (id) => ({
  type: REMOVE_TODO, id,
});

export const removeTodos = (ids) => ({
  type: REMOVE_TODOS,
  ids,
});