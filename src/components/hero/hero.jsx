import { useEffect, useRef } from "react";
import gsap from "gsap";
import heroImage from "../../assets/img/cafe-omelia.png";
import styles from "./hero.module.css";

const Hero = () => {
  const titleRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const animation = gsap.from(titleRef.current, {
      y: 60,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
    });

    return () => animation.revert();
  }, []);

  return (
    <section className={styles.hero} id="inicio">
      <div className={styles.content}>
        <p className={styles.eyebrow}>CAFÉ DE ESPECIALIDAD</p>

        <h1 ref={titleRef}>Momentos únicos para recordar.</h1>

        <p className={styles.description}>
          Cada grano es seleccionado con cuidado para ofrecer una experiencia
          cálida y auténtica.
        </p>

        <div className={styles.actions}>
          <a className={styles.button} href="#menu">Ver menú</a>
          <a className={styles.button} href="#contacto">Reservar</a>
        </div>
      </div>

      <div className={styles.image}>
        <img src={heroImage} alt="Taza de café y desayuno de Omelia" />
      </div>
    </section>
  );
};

export default Hero;
