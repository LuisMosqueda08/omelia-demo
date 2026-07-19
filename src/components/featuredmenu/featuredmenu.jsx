import { featuredProducts } from "../../data/featuredProducts";
import MenuCard from "./menucard/menucard";
import styles from "./featuredmenu.module.css";

const FeaturedMenu = () => {
  return (
    <section className={styles.menu} id="menu">
      <div className={styles.container}>
        <div className={styles.heading}>
          <span>Especialidades</span>
          <h2>Tu mejor elección</h2>
          <p>
            Descubre algunos de los platillos favoritos de nuestros clientes.
          </p>
        </div>

        <div className={styles.cardsGrid}>
          {featuredProducts.map((product) => (
            <MenuCard
              key={product.id}
              image={product.image}
              name={product.name}
              description={product.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedMenu;
