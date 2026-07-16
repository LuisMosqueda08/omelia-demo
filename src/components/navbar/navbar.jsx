import { useEffect, useState } from "react";
import logo from "../../assets/logo/logo.jpg";
import styles from "./navbar.module.css";

const links = [
  { label: "Inicio", href: "#inicio" },
  { label: "Historia", href: "#historia" },
  { label: "Menú", href: "#menu" },
  { label: "Galería", href: "#galeria" },
  { label: "Contacto", href: "#contacto" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(() => window.scrollY > 50);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav
      className={scrolled ? `${styles.navbar} ${styles.scrolled}` : styles.navbar}
      aria-label="Navegación principal"
    >
      <div className={styles.inner}>
        <a className={styles.logo} href="#inicio" aria-label="Omelia, ir al inicio">
          <img src={logo} alt="" />
        </a>

        <button
          className={styles.menuButton}
          type="button"
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
          aria-controls="main-menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>

        <div
          className={`${styles.navigation} ${menuOpen ? styles.open : ""}`}
          id="main-menu"
        >
          <ul className={styles.navLinks}>
            {links.map(({ label, href }) => (
              <li key={href}>
                <a href={href} onClick={closeMenu}>{label}</a>
              </li>
            ))}
          </ul>

          <a className={styles.button} href="#contacto" onClick={closeMenu}>
            Reservar
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
