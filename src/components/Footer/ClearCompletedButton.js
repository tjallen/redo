import React from 'react';

const ClearCompletedButton = ({ onClearCompletedClick, count }) => {
  return (
    <button onClick={onClearCompletedClick}>clear {count} completed</button>
  );
};
export default ClearCompletedButton;
