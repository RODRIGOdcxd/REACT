import React from "react";
import ReactDOM from "react-dom/client";
import Navegacion from "./Fragmentos/navegacion";
import Footer from './Fragmentos/footer';
import Main from './Componentes/index'
import './css/style.css';
const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(
  <React.StrictMode>
    <Navegacion/>
    <Main/>
    <Footer/>
  </React.StrictMode>
);