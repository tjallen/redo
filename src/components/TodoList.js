import React from 'react';
import Todo from './Todo';
import TodoInput from './TodoInput';
import VisibilityMenu from './VisibilityMenu';

const TodoList = ({
  todos,
  onToggleCompletedClick,
  onRemoveTodoClick,
  onFilterClick,
  onEditTodoClick,
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
          onToggleCompletedClick={() => onToggleCompletedClick(todo.id)}
          onRemoveTodoClick={() => onRemoveTodoClick(todo.id)}
          onEditTodoClick={() => onEditTodoClick(todo.id, todo.text)}
        />
      )}
    </ul>
  </div>
);

export default TodoList;
