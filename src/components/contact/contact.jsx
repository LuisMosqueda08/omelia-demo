import styles from "./contact.module.css";

const Contact = () => {
  return (
    <section className={styles.contact} id="contacto">
      <div className={styles.container}>
        <header className={styles.header}>
          <h2 className={styles.title}>¿Listo para visitarnos?</h2>
          <p className={styles.subtitle}>Tu próxima taza favorita está más cerca de lo que imaginas.</p>
        </header>

        <div className={styles.infoContainer}>
          <div className={styles.info}>
            <div className={styles.infoItem}>
              <p className={styles.infoLabel}>
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
                  <circle cx="12" cy="10" r="2.5" />
                </svg>
                Dirección
              </p>
              <p className={styles.infoText}>
                C. Veinte 306, Cazones, 93240 Poza Rica de Hidalgo, Ver.
              </p>
            </div>

            <div className={styles.infoItem}>
              <p className={styles.infoLabel}>
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 7v5l3.5 2" />
                </svg>
                Horarios
              </p>
              <p className={styles.infoText}>
                Lunes a domingo, 08:00 a. m. – 10:00 p. m.
              </p>
            </div>

            <div className={styles.infoItem}>
              <p className={styles.infoLabel}>
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.1 3.5 10 7.8 7.8 9.4a15.1 15.1 0 0 0 6.8 6.8l1.6-2.2 4.3 1.9v3a2 2 0 0 1-2 2A15.5 15.5 0 0 1 3 5.5a2 2 0 0 1 2-2h3.1Z" />
                </svg>
                Teléfono
              </p>

              <a
                className={styles.infoLink}
                href="tel:+5217823981768"
              >
                +52 1 782 398 1768
              </a>
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
