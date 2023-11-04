import React, { useState } from "react";
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
          <li>Inicio</li>
          <li>Contacto</li>
        </ul>
      </div>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
