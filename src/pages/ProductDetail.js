import { useParams } from "react-router-dom";
import products from "../data/products";
import { useCart } from "../context/CartContext";

function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));
  const { addToCart } = useCart();

  if (!product) return <p>No product found</p>;

  return (
    <div style={{ padding: "1rem" }}>
      <h2>{product.title}</h2>
      <img src={product.image} alt={product.title} />
      <p>{product.description}</p>
      <p>Fiyat: {product.price} $</p>
      <button onClick={() => addToCart(product, 1)}>Add to your cart</button>
    </div>
  );
}

export default ProductDetail;
