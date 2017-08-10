import React from 'react';
import TodoCount from './TodoCount';
import VisibilityMenu from './VisibilityMenu';

const Footer = ({
  allTodos,
  todos,
  onFilterClick,
  onClearCompletedClick,
  completedTodosPresent,
}) => {
  return (
    <div>
      <TodoCount todos={allTodos} />
      <VisibilityMenu
        onFilterClick={onFilterClick}
      />
      {completedTodosPresent && <button onClick={onClearCompletedClick}>Clear completed</button>}
    </div>
  );
};

export default Footer;
