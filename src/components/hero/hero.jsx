import gsap from "gsap";
import heroImage from "../../assets/img/cafe-omelia.png";
import styles from "./hero.module.css";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Hero = () => {
  const heroRef = useRef(null);
  const whatsappMessage = encodeURIComponent(
    "Hola, Omelia. Me gustaría recibir información."
  );

 useGSAP(
  () => {
    const timeline = gsap.timeline({
      defaults: {
        duration: 0.8,
        ease: "power3.out",
      },
    });

    timeline
      .from(".heroEyebrow", {
        y: 20,
        opacity: 0,
      })
      .from(
        ".heroTitle",
        {
          y: 45,
          opacity: 0,
        },
        "-=0.5"
      )
      .from(
        ".heroDescription",
        {
          y: 25,
          opacity: 0,
        },
        "-=0.45"
      )
      .from(
        ".heroActions",
        {
          y: 20,
          opacity: 0,
        },
        "-=0.4"
      )
      .from(
        ".heroImage",
        {
          x: 50,
          opacity: 0,
          duration: 1,
        },
        "-=0.7"
      );
  },
  {
    scope: heroRef,
  }
);

  return (
    <section ref={heroRef} className={styles.hero} id="inicio">
      <div className={styles.content}>
        <p className={`${styles.eyebrow} heroEyebrow`}>CAFÉ DE ESPECIALIDAD</p>

        <h1 className="heroTitle">Momentos únicos para recordar.</h1>

        <p className={`${styles.description} heroDescription`}>
          Cada grano es seleccionado con cuidado para ofrecer una experiencia
          cálida y auténtica.
        </p>

        <div className={`${styles.actions} heroActions`}>
          <a className={styles.button} href="#menu">Ver menú</a>
        </div>
      </div>

      <div className={`${styles.image} heroImage`}>
        <img src={heroImage} alt="Taza de café y desayuno de Omelia" />
      </div>

      <a
        className={styles.whatsappButton}
        href={`https://wa.me/527823981768?text=${whatsappMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar a Omelia por WhatsApp"
        title="Escríbenos por WhatsApp"
      >
        <svg viewBox="0 0 32 32" aria-hidden="true">
          <path d="M16.04 3A12.82 12.82 0 0 0 5.1 22.5L3.3 29l6.68-1.75A12.85 12.85 0 1 0 16.04 3Zm0 23.5c-1.95 0-3.86-.53-5.52-1.53l-.4-.24-3.96 1.04 1.06-3.86-.26-.4A10.66 10.66 0 1 1 16.04 26.5Zm5.85-7.98c-.32-.16-1.9-.94-2.2-1.05-.29-.11-.5-.16-.72.16-.21.32-.82 1.05-1.01 1.26-.18.22-.37.24-.69.08-.32-.16-1.35-.5-2.57-1.59a9.63 9.63 0 0 1-1.78-2.22c-.19-.32-.02-.49.14-.65.15-.14.32-.37.48-.56.16-.18.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.72-1.73-.98-2.37-.26-.62-.52-.54-.72-.55h-.61c-.21 0-.56.08-.85.4-.29.32-1.11 1.08-1.11 2.64s1.14 3.06 1.3 3.27c.16.21 2.24 3.42 5.42 4.79.76.33 1.35.52 1.81.67.76.24 1.45.21 2 .13.61-.09 1.9-.77 2.16-1.52.27-.74.27-1.38.19-1.51-.08-.14-.29-.22-.61-.38Z" />
        </svg>
      </a>
    </section>
  );
};

export default Hero;
