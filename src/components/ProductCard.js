import { useCart } from "../context/CartContext";

function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="card">
      <img
        src={product.image}
        alt={product.title}
        style={{ width: "100%", height: "150px", objectFit: "cover" }}
      />
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <p>{product.price}</p>
      <button onClick={() => addToCart(product, 1)}>Add to Chart</button>
    </div>
  );
}

export default ProductCard;
