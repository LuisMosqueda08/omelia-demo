import { useEffect, useState } from "react";
import gsap from "gsap";
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

  const handleNavigation = (event, href) => {
    event.preventDefault();

    const section = document.getElementById(href.slice(1));
    if (!section) return;

    setMenuOpen(false);

    const navbarHeight = event.currentTarget
      .closest("nav")
      ?.getBoundingClientRect().height ?? 0;
    const targetY = Math.max(
      0,
      section.getBoundingClientRect().top + window.scrollY - navbarHeight
    );
    const scrollPosition = { y: window.scrollY };

    gsap.to(scrollPosition, {
      y: targetY,
      duration: 1,
      ease: "power2.inOut",
      overwrite: true,
      onUpdate: () => window.scrollTo(0, scrollPosition.y),
      onComplete: () => window.history.pushState(null, "", href),
    });
  };

  return (
    <nav
      className={scrolled ? `${styles.navbar} ${styles.scrolled}` : styles.navbar}
      aria-label="Navegación principal"
    >
      <div className={styles.inner}>
        <a
          className={styles.logo}
          href="#inicio"
          aria-label="Omelia, ir al inicio"
          onClick={(event) => handleNavigation(event, "#inicio")}
        >
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
                <a
                  href={href}
                  onClick={(event) => handleNavigation(event, href)}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <a
            className={styles.button}
            href="#contacto"
            onClick={(event) => handleNavigation(event, "#contacto")}
          >
            Reservar
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
