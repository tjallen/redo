import React from 'react';

const TodoCount = ({ todos }) => {
  const total = todos.length;
  const remaining = total - todos.reduce((acc, todo) => {
    return todo.completed ? acc + 1 : acc
  }, 0);
  const count = remaining > 0 ? `${remaining} remaining` : `All done!`;
  return (
    <div>
      <p><i>{count}</i></p>
    </div>
  );
};
export default TodoCount;
