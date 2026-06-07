"use client";

import Link from "next/link";
import { useState } from "react";
import styles from "@/styles/styles.module.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header} role="banner">
      <div className={styles.headerContainer}>

        {/* Logo */}
        <Link href="/" className={styles.logo} aria-label="Dishcovery home">
          <span className={styles.logoIcon} aria-hidden="true">🍽️</span>
          <span className={styles.logoText}>Dish<span className={styles.logoAccent}>covery</span></span>
        </Link>

        {/* Desktop Navigation */}
        <nav className={styles.nav} aria-label="Main navigation">
          <ul className={styles.navList} role="list">
            <li>
              <Link href="/restaurants" className={styles.navLink}>
                Restaurants
              </Link>
            </li>
            <li>
              <Link href="/markets" className={styles.navLink}>
                Markets
              </Link>
            </li>
            <li>
              <Link href="/recipes" className={styles.navLink}>
                Recipes
              </Link>
            </li>
            <li>
              <Link href="/about" className={styles.navLink}>
                About
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile menu button */}
        <button
          className={styles.menuButton}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span aria-hidden="true">{menuOpen ? "✕" : "☰"}</span>
        </button>

      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`${styles.mobileMenu} ${menuOpen ? styles.open : ""}`}
        aria-hidden={!menuOpen}
      >
        <nav aria-label="Mobile navigation">
          <ul className={styles.mobileNavList} role="list">
            <li>
              <Link
                href="/restaurants"
                className={styles.mobileNavLink}
                onClick={() => setMenuOpen(false)}
              >
                Restaurants
              </Link>
            </li>
            <li>
              <Link
                href="/markets"
                className={styles.mobileNavLink}
                onClick={() => setMenuOpen(false)}
              >
                Markets
              </Link>
            </li>
            <li>
              <Link
                href="/recipes"
                className={styles.mobileNavLink}
                onClick={() => setMenuOpen(false)}
              >
                Recipes
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={styles.mobileNavLink}
                onClick={() => setMenuOpen(false)}
              >
                About
              </Link>
            </li>
          </ul>
        </nav>
      </div>

    </header>
  );
}