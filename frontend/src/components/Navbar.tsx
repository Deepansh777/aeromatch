import React, { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import logoUrl from "../assets/aeromatcher_logo.png"; // vite resolves this to a public url

// all comments in lowercase

type NavTab = {
  key: string;
  label: string;
  to: string;
};

const TABS: NavTab[] = [
  { key: "why", label: "Why AeroMatcher", to: "/why-aeromatcher" },
  { key: "match", label: "Find My Jet", to: "/match" },
  { key: "explore", label: "Explore Jets", to: "/explore" },
  { key: "about", label: "About", to: "/about" },
];

const Navbar: React.FC = () => {
  // useState stores whether we show the elevated shadow on scroll
  const [elevated, setElevated] = useState(false);

  useEffect(() => {
    // useEffect registers a scroll listener and cleans it up on unmount
    const onScroll = () => setElevated(window.scrollY > 2);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`${styles.nav} ${elevated ? styles.elevated : ""}`}>
      <div className={styles.inner}>
        {/* brand on the left */}
        <Link to="/" className={styles.brand} aria-label="aeromatcher home">
          <img
            src={logoUrl}
            alt="AeroMatcher logo"
            className={styles.logoImg}
          />
        </Link>

        {/* centered tabs using navlink so we can style the active one */}
        <nav className={styles.tabs} aria-label="primary">
          {TABS.map((t) => (
            <NavLink
              key={t.key}
              to={t.to}
              className={({ isActive }) =>
                `${styles.tabItem} ${styles.tabText} ${
                  isActive ? styles.tabItemActive : ""
                }`
              }
            >
              {t.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
