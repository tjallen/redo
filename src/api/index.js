import { v4 } from 'uuid';

// This is a fake in-memory implementation of something
// that would be implemented by calling a REST server.

const fakeDatabase = {
  todos: [{
    id: v4(),
    text: 'hey',
    completed: true,
  }, {
    id: v4(),
    text: 'ho',
    completed: true,
  }, {
    id: v4(),
    text: 'let’s go',
    completed: false,
  }],
};

const delay = (ms = 500) =>
  new Promise(resolve => setTimeout(resolve, ms));

export const fetchTodos = (filter) =>
  delay().then(() => {
    switch(filter) {
      case 'all':
        return fakeDatabase.todos;
      case 'active':
        return fakeDatabase.todos.filter(t => !t.completed);
      case 'completed':
        return fakeDatabase.todos.filter(t => t.completed);
      default:
        throw new Error(`fakeDb filter error ${filter}`);
    }
  })

export const addTodo = (text) =>
  delay().then(() => {
    const todo = {
      id: v4(),
      text,
      completed: false,
    };
    fakeDatabase.todos.push(todo);
    return todo;
  });

export const toggleTodo = (id) =>
  delay().then(() => {
    const todo = fakeDatabase.todos.find(t => t.id === id);
    todo.completed = !todo.completed;
    return todo;
  });

export const editTodo = (id, text) =>
  delay().then(() => {
    const todo = fakeDatabase.todos.find(t => t.id === id);
    todo.text = text;
    return todo;
  });

export const removeTodo = (id) =>
  delay().then(() => {
    const todoIndex = fakeDatabase.todos.findIndex(t => t.id === id);
    const todo = fakeDatabase.todos.find(t => t.id === id);
    fakeDatabase.todos.splice(todoIndex, 1);
    return todo;
  });

  window.todos = fakeDatabase.todos;