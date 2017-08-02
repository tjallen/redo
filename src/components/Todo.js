import React from 'react';

const Todo = ({ onTodoClick, completed, text, onButtonClick, id }) => (
  <div>
    <li
      onClick={onTodoClick}
      style={{
        cursor: 'pointer',
        textDecoration: completed ? 'line-through' : 'none'
      }}
    >
      {text} <span onClick={onButtonClick}>X</span>
    </li>
  </div>
);

export default Todo;
