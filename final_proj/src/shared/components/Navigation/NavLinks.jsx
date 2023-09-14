/* eslint-disable react/prop-types */

import { NavLink } from "react-router-dom";
import "./NavLinks.css";
const NavLinks = (props) => {
  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/">All Users</NavLink>
      </li>
      <li>
        <NavLink to={`/${props.id}/places`}>My Places</NavLink>
      </li>
      <li>
        <NavLink to="/places/new">Add Places</NavLink>
      </li>
      <li>
        <NavLink to="/auth">Authenticate</NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
