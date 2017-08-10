import React from 'react';
import Todo from './Todo';
import TodoInput from './TodoInput';
import VisibilityMenu from './VisibilityMenu';
import TodoCount from './TodoCount';

const TodoList = ({
  todos,
  onToggleCompletedClick,
  onRemoveTodoClick,
  onFilterClick,
  onEditTodoComplete,
  onClearCompletedClick,
}) => {
  return (
    <div>
      <TodoInput />
      <TodoCount todos={todos} />
      <button onClick={onClearCompletedClick}>Clear completed</button>
      <VisibilityMenu
        onFilterClick={onFilterClick}
      />
      <ul>
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
}  

export default TodoList;
