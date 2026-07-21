import styles from "./GalleryCard.module.css"

const GalleryCard = ({ item }) => {
    return(
        <article className={styles.card}>
            <img src={item.image} 
                 alt={item.alt}
                 loading="lazy" 
            />
        </article>
    )
};

export default GalleryCard;