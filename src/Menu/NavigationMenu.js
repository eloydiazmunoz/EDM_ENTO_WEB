// NavigationMenu.js
import React from 'react';
import './NavigationMenu.css'; // Importa el CSS aquí

const NavigationMenu = () => {
  return (
    <nav className="nav">
      <ul className="navList">
        <li className="navItem">
          <a href="/" className="navLink">Inicio</a>
        </li>
        <li className="navItem">
          <a href="about" className="navLink">Sobre Nosotros</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationMenu
