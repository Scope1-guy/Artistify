import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./MobileTabBar.css";

const tabs = [
  {
    to: "/",
    label: "Home",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M3 11l9-8 9 8v9a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    to: "/search",
    label: "Search",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.8" />
        <path
          d="M20 20l-3.5-3.5"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    to: "/favorites",
    label: "Favorites",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M12 20.5s-7.5-4.6-10-9.3C0.4 7.9 2 4.5 5.4 4C7.6 3.7 9.7 4.8 12 7.1c2.3-2.3 4.4-3.4 6.6-3.1c3.4 0.5 5 3.9 3.4 7.2c-2.5 4.7-10 9.3-10 9.3Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

function MobileTabBar() {
  const { currentUser } = useContext(AuthContext);

  if (!currentUser) return null;

  return (
    <>
      <div className="tabbar-spacer" />
      <nav className="tabbar" aria-label="Mobile navigation">
        {tabs.map((tab) => (
          <NavLink
            key={tab.to}
            to={tab.to}
            end={tab.to === "/"}
            className={({ isActive }) =>
              isActive ? "tabbar__item tabbar__item--active" : "tabbar__item"
            }
          >
            {tab.icon}
            <span>{tab.label}</span>
          </NavLink>
        ))}
      </nav>
    </>
  );
}

export default MobileTabBar;
