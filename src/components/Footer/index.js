import React from 'react';
import TodoCount from './TodoCount';
import VisibilityMenu from './VisibilityMenu';

const Footer = ({ allTodos, todos, onFilterClick, onClearCompletedClick }) => {
  return (
    <div>
      <TodoCount todos={allTodos} />
      <VisibilityMenu
        onFilterClick={onFilterClick}
      />
      <button onClick={onClearCompletedClick}>Clear completed</button>
    </div>
  );
};

export default Footer;
