import GalleryCard from "./gallerycard/GalleryCard";
import styles from "./gallery.module.css";
import { galleryImages } from "../../data/galleryImages";

const Gallery = () => {
  return (
    <section className={styles.gallery} id="galeria">
      <div className={styles.container}>
        <div className={styles.heading}>
          <span>Omelia</span>
          <h2>Cada rincón cuenta una historia.</h2>
          <p>
            Conoce el ambiente, los sabores y los pequeños detalles que hacen única cada visita.
          </p>
        </div>

        <div className={styles.cardsGrid}>
          {galleryImages.map((item) => (
            <GalleryCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;