import React from 'react';
import TodoCount from './TodoCount';
import VisibilityMenu from './VisibilityMenu';
import ClearCompletedButton from './ClearCompletedButton';

const Footer = ({
  todos,
  onClearCompletedClick,
}) => {
  const completed = todos.reduce((acc, todo) => {
    return todo.completed ? acc + 1 : acc
  }, 0);
  console.log(todos);
  
  return (
    <div>
      <VisibilityMenu />
      <TodoCount count={todos.length - completed} />
      {completed > 0 ?
        <ClearCompletedButton
          count={completed}
          onClearCompletedClick={onClearCompletedClick}
          >Clear completed
        </ClearCompletedButton>
        : null
      }
    </div>
  );
};

export default Footer;
