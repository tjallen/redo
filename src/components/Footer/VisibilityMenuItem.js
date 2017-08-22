import React from 'react';
import { NavLink } from 'react-router-dom';

const VisibilityMenuItem = ({
  location,
  filter,
  children
}) => {
  const itemStyles = {
    'display': 'inline',
    'margin': '10px 0',
    'padding': '5px',
    'backgroundColor': '#999',
    'color': '#000'
  };
  return (
    <NavLink
      to={filter === 'all' ? '' : filter}
      style={itemStyles}
    >
      {children}
    </NavLink>
  );
}

export default VisibilityMenuItem;