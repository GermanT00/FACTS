import React from 'react';
import "../styles.css";

const CartWidget = () => {
  return (
    <div className="cart-widget">
      <i className="fas fa-shopping-cart"></i>
      <span className="cart-notification">3</span>
    </div>
  );
}

export default CartWidget;
