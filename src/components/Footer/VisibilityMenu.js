import React from 'react';
import { default as VMI } from './VisibilityMenuItem';

const VisibilityFilterMenu = () => (
  <ul style={{ 'listStyleType': 'none', 'margin': 0, 'padding': 0}}>
      <ul className="nav-filters">
        <VMI filter='all'>All</VMI>
        <VMI filter='active'>Active</VMI>
        <VMI filter='completed'>Completed</VMI>
      </ul>
  </ul>
);

export default VisibilityFilterMenu;