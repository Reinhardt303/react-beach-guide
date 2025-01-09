import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
            <NavLink
        to="/"
        className="nav-link"
      >
        Home
      </NavLink>
      <NavLink
        to="/beaches"
        className="nav-link"
      >
        Beaches
      </NavLink>
      <NavLink
        to="/form"
        className="nav-link"
      >
        Add a Beach
      </NavLink>
    </nav>
    );
};

export default NavBar;