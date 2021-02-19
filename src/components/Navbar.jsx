import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <NavLink to="/Planets" activeClassName="active_nav">Planets</NavLink>
      <NavLink to="/people" activeClassName="active_nav">People</NavLink>
    </nav>
  );
};

export default Navbar;
