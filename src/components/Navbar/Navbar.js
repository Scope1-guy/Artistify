import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import logo from "../../assets/logo.png";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/search", label: "Search" },
  { to: "/favorites", label: "Favorites" },
];

function Navbar() {
  const { currentUser } = useContext(AuthContext);

  return (
    <header className="navbar">
      <div className="navbar__inner page-container">
        <NavLink to="/" className="navbar__brand">
          <img src={logo} alt="Artistify Logo" className="navbar__logo" />
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
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              isActive
                ? "navbar__profile navbar__profile--active"
                : "navbar__profile"
            }
            aria-label="Go to your profile"
          >
            <span className="navbar__avatar">
              {currentUser.photoURL ? (
                <img
                  src={currentUser.photoURL}
                  alt=""
                  referrerPolicy="no-referrer"
                />
              ) : (
                currentUser.email[0].toUpperCase()
              )}
            </span>
            {/* <span className="navbar__username">
              {currentUser.displayName || currentUser.email.split("@")[0]}
            </span> */}
          </NavLink>
        ) : (
          <NavLink to="/signup" className="navbar__signup">
            Sign Up / Log In
          </NavLink>
        )}
      </div>
    </header>
  );
}

export default Navbar;
