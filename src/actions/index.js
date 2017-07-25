import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from './../constants';

// action creators
export function addTodo(text) {
  return { type: ADD_TODO, text };
}

export function toggleTodo(id) {
  return { type: TOGGLE_TODO, id };
}

export function removeTodo(id) {
  return { type: REMOVE_TODO, id };
}
