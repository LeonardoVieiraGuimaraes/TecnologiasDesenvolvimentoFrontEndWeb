// NAVEGAÇÃO E ATIVOS REACT
// Quadro 29 – Utilização

import React from "React";
import logo from "./assets/logo.png";
import "./styles.CSS";
function App() {
  return (
    <div>
      <img src={logo} alt="Logo" />
      <h1 className="title">Meu App React</h1>
    </div>
  );
}
export default App;
