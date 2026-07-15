import logo from '../../assets/logo/logo.jpg';
import styles from "./navbar.module.css";
import { useState, useEffect, useActionState } from "react";

const links = [
  "Inicio",
  "Historia",
  "Menú",
  "Galería",
  "Contacto",
];

const Navbar = () => {

    const [scrolled, setScrolled] = useState(false);

    const handleScroll = () => {
    setScrolled(window.scrollY > 50);
    };

    useEffect(() => {
        handleScroll();

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

  return (
        <nav className={ scrolled ? `${styles.navbar} ${styles.scrolled}`: styles.navbar}>
    <div className={styles.logo}>
        <img src={logo} alt="Logo Omelia" />
    </div>

    <ul className={styles.navLinks}>
        {links.map((link) => (
        <li key={link}>{link}</li>
        ))}
    </ul>

        <div className={styles.actions}>
        <button className={styles.button}>
            Reservar
        </button>
        </div>

    </nav>
  );
};

export default Navbar;
