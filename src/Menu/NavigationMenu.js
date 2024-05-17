import React from "react";
import "./NavigationMenu.scss";

const NavigationMenu = () => {
  return (
    <nav className="nav">
      <div className="desktop">
        {" "}
        {/* Agrega la clase desktop */}
        <div className="nav-brand">
          <a href="/" className="brand-link">
            Sobre Mi
          </a>
        </div>
        <ul className="nav-list">
          <li className="nav-item">
            <a href="/" className="nav-link">
              Inicio
            </a>
          </li>
          <li className="nav-item">
            <a href="/about" className="nav-link">
              Currículum
            </a>
          </li>
          <li className="nav-item">
            <a href="/hobbies" className="nav-link">
              Aficiones
            </a>
          </li>
        </ul>
      </div>
      <div className="mobile">
        {" "}
        {/* Agrega la clase mobile */}
        <div className="nav-brand">
          <a href="/" className="brand-link">
            Sobre Mi
          </a>
        </div>
        <input type="checkbox" id="menu-toggle" className="menu-toggle" />
        <label htmlFor="menu-toggle" className="menu-icon">
          <span></span>
          <span></span>
          <span></span>
        </label>
        <ul className="nav-list">
          <li className="nav-item">
            <a href="/" className="nav-link">
              Inicio
            </a>
          </li>
          <li className="nav-item">
            <a href="/about" className="nav-link">
              Currículum
            </a>
          </li>
          <li className="nav-item">
            <a href="/hobbies" className="nav-link">
              Aficiones
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavigationMenu;
