import React from 'react';
import Todo from './Todo';
import TodoInput from './TodoInput';

const TodoList = ({ todos, onTodoClick, onButtonClick, onTodoInputSubmit }) => (
  <ul>
    <TodoInput
      onTodoInputSubmit={() => onTodoInputSubmit(`test ${Date.now()}`)}
    />
    {todos.map(todo =>
      <Todo
        key={todo.id}
        {...todo}
        onTodoClick={() => onTodoClick(todo.id)}
        onButtonClick={() => onButtonClick(todo.id)}
      />
    )}
  </ul>
);

export default TodoList;
