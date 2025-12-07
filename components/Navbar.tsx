"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Navbar.module.scss";
import { useTheme } from "@/app/context/ThemeContext";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const handleLogoClick = (e: React.MouseEvent) => {
    if (pathname === "/") {
      e.preventDefault();
      if (theme === "green") setTheme("red");
      else if (theme === "red") setTheme("purple");
      else setTheme("green");
    }
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Skills", href: "/skills" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
    { name: "Playground", href: "/playground" },
  ];

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo} onClick={handleLogoClick}>
          <span>Saurabh</span> <span>Maske</span>
        </Link>

        {/* Desktop Menu */}
        <div className={styles.desktopMenu}>
          {navLinks
            .filter((link) => link.name !== "Home")
            .map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`${styles.navLink} ${
                  pathname === link.href ? styles.active : ""
                }`}
              >
                {link.name}
              </Link>
            ))}
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className={styles.mobileButton}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className={styles.hamburgerIcon}>
            <motion.span
              animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className={styles.hamburgerLine}
            />
            <motion.span
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              className={styles.hamburgerLine}
            />
            <motion.span
              animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className={styles.hamburgerLine}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className={styles.mobileMenu}
          >
            {/* Circular Gradient Background */}
            <div className={styles.mobileMenuGradient} />

            <div className={styles.mobileLinksContainer}>
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`${styles.mobileLink} ${
                    pathname === link.href ? styles.active : ""
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link href="/resume.pdf" className={styles.mobileLink}>
                Resume
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
