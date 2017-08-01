import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

const TodoInput = ({ dispatch }) => {
  let inputField;
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(inputField.value));
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          ref={el => inputField = el}
          name="Add"
        ></input>
        <input type="submit" />
      </form>
    </div>
  );
};
export default connect()(TodoInput);
