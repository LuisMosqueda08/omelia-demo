import gsap from "gsap";
import heroImage from "../../assets/img/cafe-omelia.png";
import styles from "./hero.module.css";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Hero = () => {
  const heroRef = useRef(null);

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
          <a className={styles.button} href="#contacto">Reservar</a>
        </div>
      </div>

      <div className={`${styles.image} heroImage`}>
        <img src={heroImage} alt="Taza de café y desayuno de Omelia" />
      </div>
    </section>
  );
};

export default Hero;
