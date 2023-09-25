// NAVEGAÇÃO E ATIVOS REACT
// Quadro 29 – Utilização

import React from "react"; // 
import logo from "./assets/logo.png";
import "./styles.css"; // Renomeie para 'styles.css' com letras minúsculas

function App() {
  return (
    <div>
      <img src={logo} alt="Logo" />
      <h1 className="title">Meu App React</h1>
    </div>
  );
}

export default App;

