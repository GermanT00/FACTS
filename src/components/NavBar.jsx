import React, { useState } from "react";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import "../styles.css";

const NavBar = () => {
  const [showSubMenu, setShowSubMenu] = useState(false);

  const handleCategoryHover = () => {
    setShowSubMenu(true);
  };

  const handleCategoryLeave = () => {
    setShowSubMenu(false);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src="../img/logo.jpeg" alt="" />
      </div>
      <div className="title">FACTS</div>
      <div className="menu">
        <ul>
          <li
            onMouseEnter={handleCategoryHover}
            onMouseLeave={handleCategoryLeave}
          >
            Categoría
            {showSubMenu && (
              <ul className="sub-menu">
                <li>Opción 1</li>
                <li>Opción 2</li>
                <li>Opción 3</li>
              </ul>
            )}
          </li>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/products">Productos</Link>
          </li>
          <li>
            <Link to="/contact">Contacto</Link>
          </li>
        </ul>
      </div>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
