import React from 'react';
import TodoCount from './TodoCount';
import VisibilityMenu from './VisibilityMenu';
import ClearCompletedButton from './ClearCompletedButton';

const Footer = ({
  todos,
  onFilterClick,
  onClearCompletedClick,
  completedTodosPresent,
  currentActiveFilter,
}) => {
  const total = todos.length;
  const completed = todos.reduce((acc, todo) => {
    return todo.completed ? acc + 1 : acc
  }, 0);
  const remaining = total - completed;
  const active = remaining > 0 ? `${remaining} remaining` : `All done!`;
  return (
    <div>
      <TodoCount count={active} />
      <VisibilityMenu
        onFilterClick={onFilterClick}
        currentActiveFilter={currentActiveFilter}
      />
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
