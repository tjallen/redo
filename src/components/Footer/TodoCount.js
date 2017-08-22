import React from 'react';

const TodoCount = ({ count }) => {
  let rest = count === 1 ? 'todo remaining' : 'todos remaining';
  let text = count > 0 ? `${count} ${rest}` : 'all done';
  return (
    <div>
      <p><i>{text}</i></p>
    </div>
  );
};
export default TodoCount;
