import React from 'react';
import TodoCount from './TodoCount';
import VisibilityMenu from './VisibilityMenu';
import ClearCompletedButton from './ClearCompletedButton';

const Footer = ({
  todos,
  onClearCompletedClick,
}) => {
  const completeIds = todos.filter(t => t.completed).map(t => t.id);
  const completeCount = todos.reduce((acc, t) => 
    t.completed ? acc + 1 : acc, 0);
  return (
    <div>
      <VisibilityMenu />
      <TodoCount count={todos.length - completeCount} />
      {completeCount > 0 ?
        <ClearCompletedButton
          count={completeCount}
          onClearCompletedClick={() => onClearCompletedClick(completeIds)}
          >Clear completed
        </ClearCompletedButton>
        : null
      }
    </div>
  );
};

export default Footer;
