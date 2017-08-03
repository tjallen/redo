import React from 'react';
const listItem = {
  'display': 'inline',
  'margin': '0 5px 0 0'
}
const VisibilityFilterMenu = ({ onFilterClick }) => (
  <ul style={{ 'listStyleType': 'none', 'margin': 0, 'padding': 0}}>
    <li style={listItem}
      onClick={() => onFilterClick('DISPLAY_ALL')}>All</li>
    <li style={listItem}
      onClick={() => onFilterClick('DISPLAY_ACTIVE')}>Active</li>
    <li style={listItem}
      onClick={() => onFilterClick('DISPLAY_COMPLETED')}>Completed</li>
  </ul>
);

export default VisibilityFilterMenu;