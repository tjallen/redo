import React from 'react';
import VisibilityMenuItem from './VisibilityMenuItem';

const VisibilityFilterMenu = ({ onFilterClick, currentActiveFilter }) => (
  <ul style={{ 'listStyleType': 'none', 'margin': 0, 'padding': 0}}>
    <VisibilityMenuItem
      onFilterClick={onFilterClick}
      readableText='All'
      filterText='DISPLAY_ALL'
      currentActiveFilter={currentActiveFilter}
    />
    <VisibilityMenuItem
      onFilterClick={onFilterClick}
      readableText='Active'
      filterText='DISPLAY_ACTIVE'
      currentActiveFilter={currentActiveFilter}
    />
    <VisibilityMenuItem
      onFilterClick={onFilterClick}
      readableText='Completed'
      filterText='DISPLAY_COMPLETED'
      currentActiveFilter={currentActiveFilter}
    />
  </ul>
);

export default VisibilityFilterMenu;