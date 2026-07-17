import styles from "./story.module.css";
import storyImage from "../../assets/img/story.png";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);


const Story = () => {
    const storyRef = useRef(null);

    useGSAP(() => {
    const timeline = gsap.timeline({
         
    scrollTrigger: {
    trigger: storyRef.current,
    start: "top 75%",
    once: true,
    markers: false,
    },
      defaults: {
        duration: 0.8,
        ease: "power3.out",
      },
    });

    timeline
      .from('[data-story="eyebrow"]', {
        y: 20,
        opacity: 0,
      })
      .from(
        '[data-story="title"]',
        {
          y: 35,
          opacity: 0,
        },
        "-=0.45"
      )
      .from(
        '[data-story="text"]',
        {
          x: -40,
          opacity: 0,
        },
        "-=0.35"
      )
      .from(
        '[data-story="image"]',
        {
          x: 50,
          opacity: 0,
        },
        "-=0.65"
      )
      .from(
        '[data-story="closing"]',
        {
          y: 25,
          opacity: 0,
        },
        "-=0.4"
      );
  },
  {
    scope: storyRef,
  }
);

  return (
    <section
    ref={storyRef}
    className={styles.story}
    id="historia"
    aria-labelledby="story-title"
    >
      <div className={styles.container}>
        <p className={styles.eyebrow} data-story="eyebrow">Nuestra historia</p>

        <h2 id="story-title" data-story="title">
          Una historia servida con calma y con alma.
        </h2>

        <div className={styles.storyLayout}>
          <div className={styles.text} data-story="text">
            <p>
              Omelia no es solo una cafetería. Es el recuerdo de una
              abuela que sabía que el cariño también se sirve en una
              taza caliente.
            </p>

            <p>
              En cada detalle, desde el grano seleccionado a mano hasta
              la calidez que se vierte en cada taza, existe una filosofía:
              hacer las cosas bien, con calma y con alma.
            </p>

            <p>
              Aquí, la especialidad no está en el lujo, sino en la honestidad
              del proceso. No buscamos servir el café más caro, sino el más
              rico, uno que hable de momentos compartidos, de hogar y de
              sencillez.
            </p>

            <p>
              Porque creemos que un buen café puede detener el tiempo por un
              instante. Puede acompañar una conversación importante, una mañana
              tranquila o el comienzo de una nueva historia. Cada taza es una
              invitación a disfrutar sin prisas, a valorar lo auténtico y a
              recordar que las mejores experiencias nacen de los pequeños
              detalles.
            </p>
            <div className={styles.closingText} data-story="closing">
            <p>
                <strong>Omelia es ese lugar al que siempre quieres volver.</strong> 
                <span> De casa.</span>
            </p>
            </div>
          </div>

            <figure className={styles.image} data-story="image">
            <img
                src={storyImage}
                alt="Ambiente cálido de la cafetería Omelia"
                loading="lazy"
                decoding="async"
            />
            </figure>
        </div>
      </div>
    </section>
  );
};

export default Story;
