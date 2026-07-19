import styles from "./menucard.module.css";

const MenuCard = ({image, name, description}) => {
        return (
            <article className={styles.card}>
                    <img src={image} alt={name}/>
                    <div className={styles.content}>
                        <h3>{name}</h3>
                        <p>{description}</p>
                    </div>
            </article>
        );
};

export default MenuCard;