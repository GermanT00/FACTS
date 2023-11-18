import React from 'react';
import { Link } from 'react-router-dom'; // Importar Link desde react-router-dom
import "../styles.css";

const CartWidget = () => {
  return (
    <div className="cart-widget">
      {/* Enlace al carrito de compras */}
      <Link to="/cart">
        <i className="fas fa-shopping-cart"></i>
        <span className="cart-notification">0</span>
      </Link>
    </div>
  );
}

export default CartWidget;
