import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import logo from "../assets/logo.png";

export default function Navbar() {
  const { cart, totalPrice } = useCart();
  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);

  // state for mobile menu toggle
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header-container">
      <div className="logo-container">
        <img src={logo} alt="Organic Life Logo" />
      </div>

      {/* Hamburger button */}
      <button
        className={`hamburger ${isOpen ? "active" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle navigation"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav className="navbar">
        <ul className={`nav-list ${isOpen ? "open" : ""}`}>
          <li>
            <Link to="/" onClick={() => setIsOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/catalog" onClick={() => setIsOpen(false)}>
              Organic Products
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={() => setIsOpen(false)}>
              Who is Organic Life?
            </Link>
          </li>
          <li className="cart-wrapper">
            <Link
              to="/cart"
              className="cart-button"
              onClick={() => setIsOpen(false)}
            >
              Cart 🛒
            </Link>
            {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
          </li>
          <li className="cart-wrapper">
            <Link
              to="/cart"
              className="cart-button"
              onClick={() => setIsOpen(false)}
            >
              Total Cost:
              {totalPrice > 0 && (
                <span className="total-cost">${totalPrice.toFixed(2)}</span>
              )}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
