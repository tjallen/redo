import { v4 } from 'uuid';
import { ADD_TODO, EDIT_TODO, REMOVE_TODO, TOGGLE_TODO, REMOVE_TODOS } from './../constants';

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