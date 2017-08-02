import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

const TodoInput = ({ dispatch }) => {
  let inputField;
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(inputField.value));
    inputField.value = '';
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          ref={el => inputField = el}
          name="Add"
          placeholder="What do I need to do?"
        ></input>
        <input type="submit" value="Add to list" />
      </form>
    </div>
  );
};
export default connect()(TodoInput);
