import React from 'react';
import Todo from './Todo';
import TodoInput from './TodoInput';

const TodoList = ({
  todos,
  onToggleCompletedClick,
  onRemoveTodoClick,
  onFilterClick,
  onEditTodoComplete,
}) => {
  return (
    <div>
      <TodoInput />
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
