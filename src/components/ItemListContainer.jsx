import React from "react";
import { Link } from "react-router-dom"; // Importar Link desde react-router-dom
import "../styles.css";

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="item-list-container">
      <p>{greeting}</p>
      {/* Enlace a la lista de productos */}
      <Link to="/products">Ver catálogo</Link>
    </div>
  );
};

export default ItemListContainer;
