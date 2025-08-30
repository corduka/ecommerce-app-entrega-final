import { useCart } from "../context/CartContext";

export default function CartPage() {
  const { cart, updateQty, removeFromCart, clearCart, totalPrice } = useCart();
  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);

  if (cart.length === 0)
    return (
      <p style={{ textAlign: "center", marginTop: "50px" }}>Cart is empty</p>
    );

  return (
    <div className="cart-page">
      <div className="cart-left">
        {cart.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.title} className="cart-item-img" />
            <div className="cart-item-details">
              <h3>{item.title}</h3>
              <p>
                Unit:{" "}
                <input
                  type="number"
                  value={item.qty}
                  min="1"
                  onChange={(e) => updateQty(item.id, Number(e.target.value))}
                />
              </p>
              <p>Price: ${Number(item.price).toFixed(2)}</p>
              <button
                className="remove-btn"
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
        <button className="clear-btn" onClick={clearCart}>
          Clear the cart
        </button>
      </div>

      <div className="cart-right">
        <h3>
          Subtotal ({totalItems} items): ${totalPrice}
        </h3>
        <button className="checkout-btn">Proceed to Checkout</button>
      </div>
    </div>
  );
}
