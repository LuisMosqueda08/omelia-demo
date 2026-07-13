import logo from '../../assets/logo/logo.jpg';
import styles from "./navbar.module.css";

const links = [
  "Inicio",
  "Historia",
  "Menú",
  "Galería",
  "Contacto",
];

const Navbar = () => {
  return (
        <nav className={styles.navbar}>
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
