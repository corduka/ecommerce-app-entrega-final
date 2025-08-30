// src/pages/Catalog.jsx
import products from "../data/products";
import ProductCard from "../components/ProductCard";

function Catalog() {
  return (
    <div className="catalog-grid">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default Catalog;
