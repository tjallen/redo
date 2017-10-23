import { v4 } from 'uuid';
import {
  REQUEST_TODOS,
  RECEIVE_TODOS,
  ADD_TODO,
  EDIT_TODO,
  REMOVE_TODO,
  TOGGLE_TODO,
  REMOVE_TODOS
} from './../constants';
import * as api from '../api';

// async action creators
export const fetchTodos = (filter) => (dispatch) => {
  dispatch(requestTodos(filter));

  return api.fetchTodos(filter).then(response => {
    dispatch(receiveTodos(filter, response));
  });
};

// action creators
const requestTodos = (filter) => ({
  type: REQUEST_TODOS,
  filter,
});
const receiveTodos = (filter, response) => ({
  type: RECEIVE_TODOS,
  filter,
  response,
})
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