import styles from "./ProductModal.module.css";
import { useEffect, useId, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const ProductModal = ({ product, onClose }) => {
  const overlayRef = useRef(null);
  const modalRef = useRef(null);
  const imageRef = useRef(null);
  const nameRef = useRef(null);
  const descriptionRef = useRef(null);
  const isClosingRef = useRef(false);
  const titleId = useId();

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  useGSAP(
    () => {
      const timeline = gsap.timeline({
        defaults: {
          duration: 0.5,
          ease: "power3.out",
        },
      });

      timeline
        .from(overlayRef.current, {
          opacity: 0,
          duration: 0.3,
        })
        .from(
          modalRef.current,
          {
            opacity: 0,
            scale: 0.95,
          },
          "-=0.15"
        )
        .from(
          imageRef.current,
          {
            opacity: 0,
            scale: 1.03,
          },
          "-=0.3"
        )
        .from(
          nameRef.current,
          {
            opacity: 0,
            y: 15,
          },
          "-=0.3"
        )
        .from(
          descriptionRef.current,
          {
            opacity: 0,
            y: 15,
          },
          "-=0.3"
        );
    },
    {
      scope: overlayRef,
    }
  );

  const handleClose = () => {
    if (isClosingRef.current) return;

    isClosingRef.current = true;

    const timeline = gsap.timeline({
      onComplete: onClose,
    });

    timeline
      .to(modalRef.current, {
        opacity: 0,
        scale: 0.95,
        duration: 0.25,
        ease: "power2.in",
      })
      .to(
        overlayRef.current,
        {
          opacity: 0,
          duration: 0.25,
          ease: "power2.in",
        },
        "-=0.15"
      );
  };

  return (
    <div
      ref={overlayRef}
      className={styles.overlay}
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          handleClose();
        }
      }}
    >
      <div
        ref={modalRef}
        className={styles.modal}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
      >
        <button
          type="button"
          className={styles.closeButton}
          onClick={handleClose}
          aria-label="Cerrar detalle del producto"
        >
          X
        </button>

        <img
          ref={imageRef}
          className={styles.image}
          src={product.image}
          alt={product.name}
        />

        <div className={styles.content}>
          <h2 ref={nameRef} id={titleId} className={styles.name}>
            {product.name}
          </h2>

          <p ref={descriptionRef} className={styles.description}>
            {product.description}
          </p>

          <h3>Ingredientes</h3>

          <ul>
            {product.ingredients?.length ? (
              product.ingredients.map((ingredient) => (
                <li key={ingredient}>{ingredient}</li>
              ))
            ) : (
              <li>Ingredientes no disponibles</li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
