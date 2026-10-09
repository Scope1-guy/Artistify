import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="page-container footer__inner">
        <div className="footer__brand">
          <span className="footer__brand-name">Artistify</span>
          <p className="footer__tagline">
            Search, discover and keep track of the artists you love.
          </p>
        </div>

        <div className="footer__column">
          <h3 className="footer__heading">Navigate</h3>
          <ul className="footer__list">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/search">Search</Link>
            </li>
            <li>
              <Link to="/favorites">Favorites</Link>
            </li>
          </ul>
        </div>

        <div className="footer__column">
          <h3 className="footer__heading">About</h3>
          <ul className="footer__list">
            <li>Artist data by Last.fm</li>
            <li>Built with React</li>
          </ul>
        </div>
      </div>

      <div className="page-container footer__bottom">
        <p>
          &copy; {new Date().getFullYear()} Artistify. Built by Samuel Eniola
          Olalekan.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
