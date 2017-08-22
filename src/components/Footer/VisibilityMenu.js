import React from 'react';
import VisibilityMenuItem from './VisibilityMenuItem';

const VisibilityFilterMenu = () => (
  <ul style={{ 'listStyleType': 'none', 'margin': 0, 'padding': 0}}>
    <VisibilityMenuItem filter='all'>All</VisibilityMenuItem>
    <VisibilityMenuItem filter='active'>Active</VisibilityMenuItem>
    <VisibilityMenuItem filter='completed'>Completed</VisibilityMenuItem>
  </ul>
);

export default VisibilityFilterMenu;