import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { logOut } from "../../services/firebase";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/search", label: "Search" },
  { to: "/favorites", label: "Favorites" },
  // { to: "/signup", label: "Sign Up / Log In" },
];

function Navbar() {
  const { currentUser } = useContext(AuthContext);

  return (
    <header className="navbar">
      <div className="navbar__inner page-container">
        <NavLink to="/" className="navbar__brand">
          <span className="navbar__brand-mark">A</span>
          <span className="navbar__brand-name">Artistify</span>
        </NavLink>

        <nav className="navbar__links" aria-label="Main navigation">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                isActive ? "navbar__link navbar__link--active" : "navbar__link"
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {currentUser ? (
          <div>
            <span className="navbar__user">{currentUser.email}</span>
            <button onClick={logOut}>Log Out</button>
          </div>
        ) : (
          <NavLink to="/signup" className="navbar__link">
            Sign Up / Log In
          </NavLink>
        )}
      </div>
    </header>
  );
}

export default Navbar;
