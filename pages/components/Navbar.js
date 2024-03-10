// components/Navbar.js
import React, { useState } from 'react';
import Link from 'next/link';
import styles from '../../styles/Navbar.module.css';
import { useRouter } from 'next/router';

const Navbar = () => {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutMenuOpen, setAboutMenuOpen] = useState(false);
  const [productsMenuOpen, setProductsMenuOpen] = useState(false);

  const handleHome = () => {
    setMenuOpen(false);
    setAboutMenuOpen(false);
    setProductsMenuOpen(false);
  };

  const handleAbout = () => {
    setMenuOpen(false);
    setAboutMenuOpen(!aboutMenuOpen);
    setProductsMenuOpen(false);
  };

  const handleProducts = () => {
    setMenuOpen(false);
    setAboutMenuOpen(false);
    setProductsMenuOpen(!productsMenuOpen);
  };

  const handleContact = () => {
    setMenuOpen(false);
    setAboutMenuOpen(false);
    setProductsMenuOpen(false);
  };

  return (
    <div className={styles.navMainContainer}>
      <div className={styles.navInnerContainer}>
        <h1>E-learning Platform</h1>
        <div className={styles.menu} onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={menuOpen ? styles.open : ''}>
          <li>
            <Link href="/">
              <a onClick={handleHome}>Home</a>
            </Link>
          </li>
          <li>
            <a onClick={handleAbout}>About</a>
            <ul className={aboutMenuOpen ? styles.open : ''}>
              <li>
                <Link href="/about/team">
                  <a onClick={handleAbout}>Meet Our Team</a>
                </Link>
              </li>
              <li>
                <Link href="/about/impact">
                  <a onClick={handleAbout}>Impact</a>
                </Link>
              </li>
              <li>
                <Link href="/about/terms">
                  <a onClick={handleAbout}>Terms of Use</a>
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <a onClick={handleProducts}>Products</a>
            <ul className={productsMenuOpen ? styles.open : ''}>
              <li>
                <Link href="/productlist/art">
                  <a onClick={handleProducts}>Art</a>
                </Link>
              </li>
              <li>
                <Link href="/productlist/history">
                  <a onClick={handleProducts}>History</a>
                </Link>
              </li>
              <li>
                <Link href="/productlist/girlhood">
                  <a onClick={handleProducts}>Memories of Girlhood</a>
                </Link>
              </li>
              <li>
                <Link href="/productlist/politics">
                  <a onClick={handleProducts}>Politics</a>
                </Link>
              </li>
              <li>
                <Link href="/productlist/environment">
                  <a onClick={handleProducts}>Environment</a>
                </Link>
              </li>
              <li>
                <Link href="/productlist/festival">
                  <a onClick={handleProducts}>Festival</a>
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="/contact">
              <a onClick={handleContact}>Contact</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
