import React from 'react';

const Todo = ({
  text,
  id,
  completed,
  onToggleCompletedClick,
  onRemoveTodoClick,
  onEditTodoClick,
}) => (
  <div>
    <li>
      <span onClick={onEditTodoClick} style={{textDecoration: completed ? 'line-through' : 'none'}}>{text}</span> <input type="checkbox" onChange={onToggleCompletedClick} checked={completed}></input> <span onClick={onRemoveTodoClick}>X</span>
    </li>
  </div>
);

export default Todo;
