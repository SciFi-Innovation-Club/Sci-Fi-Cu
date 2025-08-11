'use client';
import Link from 'next/link';
import { useState } from 'react';
import styles from '../styles/Navbar.module.css';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.flexContainer}>
          {/* Logo */}
          <div className={styles.logo}>
            <Link href="/" className={styles.logoLink}>
              <span className={styles.logoText}>
                Sci-Fi CU
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className={styles.desktopNav}>
            <div className={styles.navContainer}>
              <Link
                href="/"
                className={styles.navLink}
              >
                Home
              </Link>
              <Link
                href="/about"
                className={styles.navLink}
              >
                About
              </Link>
              <Link
                href="/timeline"
                className={styles.navLink}
              >
                Events
              </Link>
              <Link
                href="/team"
                className={styles.navLink}
              >
                Team
              </Link>
            </div>
          </div>

          {/* Apply Now Button */}
          <div className={styles.desktopNav}>
            <Link
              href="/join"
              className={styles.navLink}
              style={{
                background: '#3b82f6',
                color: 'white',
                padding: '0.5rem 1.5rem'
              }}
            >
              Join Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className={styles.mobileMenuButton}>
            <button
              onClick={toggleMenu}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0.5rem',
                borderRadius: '0.375rem',
                color: '#9ca3af',
                border: 'none',
                background: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
            >
              <span style={{ position: 'absolute', width: '1px', height: '1px', padding: 0, margin: '-1px', overflow: 'hidden', clip: 'rect(0, 0, 0, 0)', whiteSpace: 'nowrap', borderWidth: 0 }}>Open main menu</span>
              {!isMenuOpen ? (
                <svg style={{ display: 'block', height: '1.5rem', width: '1.5rem' }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg style={{ display: 'block', height: '1.5rem', width: '1.5rem' }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className={styles.mobileMenu}>
            <div className={styles.mobileNavContainer}>
              <Link
                href="/"
                className={styles.mobileNavLink}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className={styles.mobileNavLink}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/timeline"
                className={styles.mobileNavLink}
                onClick={() => setIsMenuOpen(false)}
              >
                Events
              </Link>
              <Link
                href="/team"
                className={styles.mobileNavLink}
                onClick={() => setIsMenuOpen(false)}
              >
                Team
              </Link>
              <Link
                href="/contact"
                className={styles.mobileNavLink}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Link
                href="/join"
                className={styles.mobileNavLink}
                onClick={() => setIsMenuOpen(false)}
                style={{
                  background: '#3b82f6',
                  color: 'white',
                  textAlign: 'center'
                }}
              >
                Join Now
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
