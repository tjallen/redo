import React from 'react';

const Todo = ({ onTodoClick, completed, text, onButtonClick, id }) => (
  <div>
    <li
      onClick={onTodoClick}
      style={{
        textDecoration: completed ? 'line-through' : 'none'
      }}
    >
      {text}
    </li>
    <button onClick={onButtonClick}>X</button>
  </div>
);

export default Todo;
