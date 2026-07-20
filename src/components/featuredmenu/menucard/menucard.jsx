import styles from "./menucard.module.css";

const MenuCard = ({ product, onSelect }) => {
  return (
    <article
      className={styles.card}
      onClick={() => onSelect(product)}
    >
      <img
        src={product.image}
        alt={product.name}
        loading="lazy"
        decoding="async"
      />

      <div className={styles.content}>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
      </div>
    </article>
  );
};

export default MenuCard;