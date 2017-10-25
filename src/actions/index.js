import { normalize } from 'normalizr';
import * as schema from './schema';
import * as api from '../api';
import { getIsFetching } from '../reducers';

// constants
export const FETCH_TODOS_REQUEST = 'FETCH_TODOS_REQUEST';
export const FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS';
export const FETCH_TODOS_FAILURE = 'FETCH_TODOS_FAILURE';
export const ADD_TODO = 'ADD_TODO';
export const ADD_TODO_SUCCESS = 'ADD_TODO_SUCCESS';
export const EDIT_TODO_SUCCESS = 'EDIT_TODO_SUCCESS';
export const REMOVE_TODO = 'REMOVE_TODO';
export const REMOVE_TODO_SUCCESS = 'REMOVE_TODO_SUCCESS';
export const REMOVE_TODOS_SUCCESS = 'REMOVE_TODOS_SUCCESS';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const TOGGLE_TODO_SUCCESS = 'TOGGLE_TODO_SUCCESS';
export const SET_VISIBLE_TODOS = 'SET_VISIBLE_TODOS';

// actions
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

export const toggleTodo = (id) => (dispatch) =>
  api.toggleTodo(id).then(response => {
    dispatch({
      type: TOGGLE_TODO_SUCCESS,
      response: normalize(response, schema.todo),
    })
  })

export const removeTodo = (id) => (dispatch) =>
  api.removeTodo(id).then(response => {
    dispatch({
      type: REMOVE_TODO_SUCCESS,
      response: normalize(response, schema.todo),
    })
  })

export const removeTodos = (ids) => (dispatch) => {
  return new Promise(resolve => {
    const removeOps = ids.map(id => api.removeTodo(id));
    const results = Promise.all(removeOps);
    results.then(response => {
      dispatch({
       type: REMOVE_TODOS_SUCCESS,
       response: normalize(response, schema.arrayOfTodos),
      })
    })
  })
}
