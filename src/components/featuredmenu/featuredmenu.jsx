import { useState } from "react";
import { featuredProducts } from "../../data/featuredProducts";
import MenuCard from "./menucard/menucard";
import styles from "./featuredmenu.module.css";
import ProductModal from "./productmodal/ProductModal";

const FeaturedMenu = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

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
              product={product}
              onSelect={setSelectedProduct}
            />
          ))}
        </div>

        {selectedProduct && (
          <ProductModal
            product={selectedProduct}
            onClose={() => setSelectedProduct(null)}
          />
        )}
      </div>
    </section>
  );
};

export default FeaturedMenu;
