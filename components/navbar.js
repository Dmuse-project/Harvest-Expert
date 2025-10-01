"use client";
import { useState, useEffect } from "react";
import styles from "../styles/components/_navbar.module.scss";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        {/* Logo */}
        <div className={styles.logo}>
          <span>Harvest</span> Expert LTD
        </div>

        {/* Desktop Menu */}
        <nav className={styles.desktopMenu}>
          <ul>
            <li><Link href="#hero"  className={`${scrolled ? styles.link : ""}`}>Home</Link></li>
            <li><Link href="#services"  className={`${scrolled ? styles.link : ""}`}>Services</Link></li>
            <li><Link href="#about"  className={`${scrolled ? styles.link : ""}`}>About</Link></li>
            <li><Link href="#testimonials" className={`${scrolled ? styles.link : ""}`}>Testimonials</Link></li>
            <li><Link href="https://wa.link/c80h8r"  className={`${scrolled ? styles.link : ""}`}>Contact</Link></li>
          </ul>
        </nav>

        {/* CTA Button */}
        <button className={styles.cta}>
            <Link href="#cta"> Book Now</Link>
          </button>

        {/* Hamburger */}
        <div
          className={`${styles.hamburger} ${menuOpen ? styles.active : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            className={`${styles.mobileMenu} ${menuOpen ? styles.active: ""}`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <ul>
              <li><Link href="#hero" onClick={toggleMenu}>Home</Link></li>
              <li><Link href="#services" onClick={toggleMenu}>Services</Link></li>
              <li><Link href="#about" onClick={toggleMenu}>About</Link></li>
              <li><Link href="#testimonials" onClick={toggleMenu}>Testimonials</Link></li>
              <li><Link href="#contact" onClick={toggleMenu}>Contact</Link></li>
            </ul>
            <button className={styles.mobileCTA}><Link href="#cta">
            </Link>Book Now</button>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}