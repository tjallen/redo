import React from 'react';
import TodoCount from './TodoCount';
import VisibilityMenu from './VisibilityMenu';

const Footer = ({ todos, onFilterClick, onClearCompletedClick }) => {
  return (
    <div>
      <TodoCount todos={todos} />
      <VisibilityMenu
        onFilterClick={onFilterClick}
      />
      <button onClick={onClearCompletedClick}>Clear completed</button>
    </div>
  );
};

export default Footer;
