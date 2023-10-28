import React, { useState } from 'react';
import './styles.css';

const Navbar = () => {
  const [showSubMenu, setShowSubMenu] = useState(false);

  const toggleSubMenu = () => {
    setShowSubMenu(!showSubMenu);
  };

  return (
    <nav className="navbar">
      <div className="logo">Logo</div>
      <div className="title">Mi Tienda Digital</div>
      <div className="menu">
        <div className="menu-item">Contacto</div>
        <div className="menu-item" onClick={toggleSubMenu}>
          Producto
          {showSubMenu && (
            <div className="submenu">
              <div className="submenu-item">Opción 1</div>
              <div className="submenu-item">Opción 2</div>
              <div className="submenu-item">Opción 3</div>
              <div className="submenu-item">Opción 4</div>
              <div className="submenu-item">Opción 5</div>
            </div>
          )}
        </div>
        <div className="menu-item">Nosotros</div>
        <div className="menu-item">Carrito</div>
      </div>
    </nav>
  );
};

export default Navbar;
