import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.scss";
import App from "./App";
import About from "./about/About";
import Hobbies from "./hobbies";
import NavigationMenu from "./Menu/NavigationMenu.js";
import linkedinIcon from "./linkedin.png"; // Asegúrate de tener este icono en tu proyecto
import githubIcon from "./github.png"; // Añadir iconos adicionales si es necesario

// Rutas definidas para tu aplicación
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "hobbies",
    element: <Hobbies />,
  },
  {
    path: "*",
    element: <App />,
  },
]);

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="social-media"></div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Eloy Diaz Muñoz. Tots els drets reservats.</p>
      </div>
    </footer>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div>
      <NavigationMenu />
      <RouterProvider router={router} />
      <Footer />
    </div>
  </React.StrictMode>
);
