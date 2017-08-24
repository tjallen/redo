import React from 'react';
import TodoCount from './TodoCount';
import VisibilityMenu from './VisibilityMenu';
import ClearCompletedButton from './ClearCompletedButton';

const Footer = ({
  todos,
  onClearCompletedClick,
  completedTodosPresent,
}) => {
  const completed = todos.reduce((acc, todo) => {
    return todo.completed ? acc + 1 : acc
  }, 0);
  return (
    <div>
      <VisibilityMenu />
      <TodoCount count={todos.length - completed} />
      {completedTodosPresent &&
        <ClearCompletedButton
          count={completed}
          onClearCompletedClick={onClearCompletedClick}
          >Clear completed
        </ClearCompletedButton>
      }
    </div>
  );
};

export default Footer;
