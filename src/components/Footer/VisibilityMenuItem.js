import React from 'react';

const VisibilityMenuItem = ({
  readableText,
  filterText,
  currentActiveFilter,
  onFilterClick
}) => {
  const active = filterText === currentActiveFilter;
  const itemStyles = {
    'display': 'inline',
    'margin': '10px 0',
    'padding': '5px',
    'backgroundColor': active ? '#000' : '#999',
    'color': active ? '#fff' : '#000'
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