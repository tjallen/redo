import React from 'react';
import Todo from './Todo';
import TodoInput from './TodoInput';

const TodoList = ({
  todos,
  onTodoClick,
  onButtonClick,
}) => (
  <ul>
    <TodoInput />
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
