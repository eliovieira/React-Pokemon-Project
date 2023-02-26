import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <div className="navBar">
        {/* <Link to="/">Home</Link>
  <Link to="/about">Sobre</Link> */}
        {/* 8 - active link */}
        <NavLink
          className={({ isActive }) => (isActive ? "active" : undefined)}
          to="/"
          style={({ isActive }) =>
            isActive
              ? {
                  textDecoration: "none",
                }
              : {
                  textDecoration: "none",
                }
          }
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : undefined)}
          to="/about"
          style={({ isActive }) =>
            isActive
              ? {
                  textDecoration: "none",
                }
              : {
                  textDecoration: "none",
                }
          }
        >
          Sobre
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
