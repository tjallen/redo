import React from 'react';
import Todo from './Todo';
import TodoInput from './TodoInput';
import VisibilityMenu from './VisibilityMenu';

const TodoList = ({
  todos,
  onTodoClick,
  onButtonClick,
  onFilterClick,
}) => (
  <div>
    <ul>
      <TodoInput />
      <VisibilityMenu
        onFilterClick={onFilterClick}
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
  </div>
);

export default TodoList;
