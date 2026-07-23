import styles from "./footer.module.css";
import logo from "../../assets/logo/logo.jpg";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <div className={styles.brand}>
            <a
              className={styles.logo}
              href="#inicio"
              aria-label="Omelia, ir al inicio"
            >
              <img src={logo} alt="" />
            </a>

            <p className={styles.description}>
              Café de especialidad, momentos preparados con calma y un espacio
              para disfrutar.
            </p>
          </div>

          <nav
            className={styles.navigation}
            aria-label="Navegación del pie de página"
          >
            <p className={styles.eyebrow}>Navegación</p>

            <ul className={styles.navigationList}>
              <li>
                <a href="#inicio">Inicio</a>
              </li>
              <li>
                <a href="#historia">Historia</a>
              </li>
              <li>
                <a href="#menu">Menú</a>
              </li>
              <li>
                <a href="#galeria">Galería</a>
              </li>
              <li>
                <a href="#contacto">Contacto</a>
              </li>
            </ul>
          </nav>

          <div className={styles.socials}>
            <p className={styles.eyebrow}>Síguenos</p>

            <div className={styles.socialLinks}>
                <a
                    href="https://web.facebook.com/people/Omelia-Caf%C3%A9-de-especialidad/61575139706746"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Facebook de Omelia"
                >
                    <FaFacebookF />
                </a>

                <a
                    href="https://www.instagram.com/omeliacafe"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Instagram de Omelia"
                >
                    <FaInstagram />
                </a>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p className={styles.copyrightText}>
            © 2026 Omelia. Todos los derechos reservados.
          </p>

          <p className={styles.credit}>
            Diseñado y desarrollado por MossDev.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;