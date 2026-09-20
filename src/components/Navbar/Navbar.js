import { NavLink } from "react-router-dom";
import "./Navbar.css";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/search", label: "Search" },
  { to: "/favorites", label: "Favorites" },
];

function Navbar() {
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
      </div>
    </header>
  );
}

export default Navbar;
