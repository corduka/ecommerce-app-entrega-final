import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function CartWidget() {
  const { totalItems } = useCart();
  return <Link to="/cart">🛒 {totalItems}</Link>;
}

export default CartWidget;
