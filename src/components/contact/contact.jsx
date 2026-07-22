import styles from "./contact.module.css";

const Contact = () => {
  return (
    <section className={styles.contact} id="contacto">
      <div className={styles.container}>
        <header className={styles.header}>
          <h2 className={styles.title}>¿Listo para visitarnos?</h2>
          <p className={styles.subtitle}>Nos encantará recibirte.</p>
        </header>

        <div className={styles.infoContainer}>
          <div className={styles.info}>
            <div className={styles.infoItem}>
              <p className={styles.infoLabel}>Dirección</p>
              <p className={styles.infoText}>
                C. Veinte 306, Cazones, 93240 Poza Rica de Hidalgo, Ver.
              </p>
            </div>

            <div className={styles.infoItem}>
              <p className={styles.infoLabel}>Horarios</p>
              <p className={styles.infoText}>
                Lunes a domingo, 08:00 a. m. – 10:00 p. m.
              </p>
            </div>

            <div className={styles.infoItem}>
              <p className={styles.infoLabel}>Teléfono</p>

              <a
                className={styles.infoLink}
                href="tel:+5217823981768"
              >
                +52 1 782 398 1768
              </a>
            </div>

            <div className={`${styles.infoItem} ${styles.socials}`}>
              <p className={styles.infoLabel}>Redes Sociales</p>
              <div className={styles.socialLinks}>
                <a
                className={styles.socialLink}
                href="https://www.instagram.com/omeliacafe"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visitar Instagram de Omelia"
                title="Instagram"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4.25" />
                  <circle className={styles.socialDot} cx="17.4" cy="6.7" r="1" />
                </svg>
                </a>

                <a
                className={styles.socialLink}
                href="https://www.facebook.com/634430339746883?ref=PROFILE_EDIT_xav_ig_profile_page_web"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visitar Facebook de Omelia"
                title="Facebook"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M14.2 21v-8h2.7l.4-3.1h-3.1v-2c0-.9.25-1.5 1.55-1.5h1.65V3.6c-.29-.04-1.27-.12-2.42-.12-2.4 0-4.04 1.46-4.04 4.15V9.9H8.23V13h2.71v8h3.26Z" />
                </svg>
                </a>
              </div>
            </div>
          </div>

          <div className={styles.map}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3736.188418144926!2d-97.44689722393626!3d20.539470280990173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85da6b00456cc8a7%3A0x76ecef1d88303785!2sOmelia!5e0!3m2!1ses-419!2smx!4v1784731885823!5m2!1ses-419!2smx" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin">
            </iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
