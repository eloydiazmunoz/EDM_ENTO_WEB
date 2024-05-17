import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.scss";
import App from "./App";
import About from "./about/About";
import Hobbies from "./hobbies";
import NavigationMenu from "./Menu/NavigationMenu.js";

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

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div>
      <NavigationMenu />
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);
