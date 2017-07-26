import React from 'react';

const TodoInput = ({ onTodoInputSubmit }) => {
  return (
    <div>
      <form onSubmit={onTodoInputSubmit}>
        <label>Add a todo</label>
        <br />
        <input type="text" name="Add"></input>
        <hr />
      </form>
      debug add <button onClick={onTodoInputSubmit}>+</button>
      <hr />
    </div>
  );
};
export default TodoInput;
