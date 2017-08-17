import React from 'react';
import TodoCount from './TodoCount';
import VisibilityMenu from './VisibilityMenu';
import ClearCompletedButton from './ClearCompletedButton';
import { Link } from 'react-router-dom';

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
      <p>rrv4 filters:</p>
      <Link to='/'>all</Link>
      { ' ' }
      <Link to='/active'>active</Link>
      { ' ' }
      <Link to='/completed'>completed</Link>
      <TodoCount count={active} />
      <p>old filters to replace:</p>
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
