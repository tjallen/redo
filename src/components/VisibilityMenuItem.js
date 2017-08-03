import React from 'react';

const VisibilityMenuItem = ({ readableText, filterText, onFilterClick }) => {
  const itemStyles = {
    'display': 'inline',
    'margin': '0 5px 0 0',
  };
  return (
    <li
      style={itemStyles}
      onClick={() => onFilterClick(filterText)}
    >
      {readableText}
    </li>
  );
}

export default VisibilityMenuItem;