import React from 'react';
import TodoCount from './TodoCount';
import VisibilityMenu from './VisibilityMenu';
import ClearCompletedButton from './ClearCompletedButton';

const Footer = ({
  todos,
  onClearCompletedClick,
  isAllTabActive,
}) => {
  const completeIds = todos.filter(t => t.completed).map(t => t.id);
  const completeCount = completeIds.length;
  return (
    <div>
      <VisibilityMenu />
      {isAllTabActive &&
        <TodoCount count={todos.length - completeCount} />
      }
      {isAllTabActive && completeCount > 0 ?
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
