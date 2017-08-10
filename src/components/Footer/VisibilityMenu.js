import React from 'react';
import VisibilityMenuItem from './VisibilityMenuItem';

const VisibilityFilterMenu = ({ onFilterClick }) => (
  <ul style={{ 'listStyleType': 'none', 'margin': 0, 'padding': 0}}>
    <VisibilityMenuItem
      onFilterClick={onFilterClick}
      readableText='All'
      filterText='DISPLAY_ALL'
    />
    <VisibilityMenuItem
      onFilterClick={onFilterClick}
      readableText='Active'
      filterText='DISPLAY_ACTIVE'
    />
    <VisibilityMenuItem
      onFilterClick={onFilterClick}
      readableText='Completed'
      filterText='DISPLAY_COMPLETED'
    />
  </ul>
);

export default VisibilityFilterMenu;