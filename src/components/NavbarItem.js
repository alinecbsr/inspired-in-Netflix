import React from 'react';
import { NavLink } from 'react-router-dom';

const NavbarItem = (props) => (
   <NavLink className="navbar__list--link" exact={props.exact}
      to={props.link}>{props.children}</NavLink>
)

export default NavbarItem;