import React from 'react';
import { NavLink } from 'react-router-dom';

const VisibilityMenuItem = ({
  filter,
  children
}) => {
  return (
    <NavLink
      to={filter === 'all' ? '/' : `/${filter}`}
      activeClassName='filter--active'
    >
      {children}
    </NavLink>
  );
}

export default VisibilityMenuItem;