import React from 'react';
import Todo from './Todo';
import TodoInput from './TodoInput';
import VisibilityMenu from './VisibilityMenu';

const TodoList = ({
  todos,
  onToggleCompletedClick,
  onRemoveTodoClick,
  onFilterClick,
  onEditTodoComplete,
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
          onEditTodoComplete={onEditTodoComplete}
        />
      )}
    </ul>
  </div>
);

export default TodoList;
