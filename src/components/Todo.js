import React from 'react';

const Todo = ({
  text,
  id,
  completed,
  onToggleCompletedClick,
  onRemoveTodoClick,
}) => (
  <div>
    <li>
      <span style={{textDecoration: completed ? 'line-through' : 'none'}}>{text}</span> <input type="checkbox" onChange={onToggleCompletedClick} checked={completed}></input> <span onClick={onRemoveTodoClick}>X</span>
    </li>
  </div>
);

export default Todo;
