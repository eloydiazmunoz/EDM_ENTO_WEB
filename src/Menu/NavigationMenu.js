import React from "react";
import "./NavigationMenu.scss";

const NavigationMenu = () => {
  return (
    <nav className="nav">
      <div className="nav-brand">
        <a href="/" className="brand-link">
          Sobre Mi
        </a>
      </div>
      <ul className="nav-list">
        <li className="nav-item">
          <a href="/" className="nav-link">
            Inici
          </a>
        </li>
        <li className="nav-item">
          <a href="/about" className="nav-link">
            Currículum
          </a>
        </li>
        <li className="nav-item">
          <a href="/hobbies" className="nav-link">
            Aficions
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationMenu;
