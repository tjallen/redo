import { v4 } from 'uuid';
import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from './../constants';

// action creators
export const addTodo = (text) => ({
   type: ADD_TODO, text, id: v4(),
});

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO, id,
});

export const removeTodo = (id) => ({
  type: REMOVE_TODO, id,
});
