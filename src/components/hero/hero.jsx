import styles from "./hero.module.css";
import heroImage from "../../assets/img/cafe-omelia.png";
import { useRef, useEffect } from "react";
import gsap from "gsap";

const Hero = () => {
    const titleRef = useRef(null);

    useEffect(() => {
        gsap.from(titleRef.current, {
            y: 100,
            opacity: 0,
            duration: 2,
            ease: "power3.out"
        });
    }, []);

  return (
    <section className={styles.hero}>
        <div className={styles.content}>   
        <h1>
            CAFÉ DE ESPECIALIDAD
        </h1>

        <h2 ref={titleRef}>
            Momentos unicos 
            para recordar.
        </h2>

        <p>
            Cada grano es seleccionado con cuidado para ofrecer
            una experiencia cálida y auténtica.
        </p>


        <div className={styles.actions}>

        <button className={styles.button}>
            Ver menú
        </button>

        <button className={styles.button}>
            Reservar
        </button>

        </div>    

      </div>
        <div className={styles.image}>
            <img src={heroImage} alt="Taza de café y desayuno de Omelia" />
        </div>

    </section>
  );
};

export default Hero;
