// USANDO ATIVOS
// Quadro 40 – Importação de ativos
import React from 'react';
import logo from './logo.png'; // Corrija o caminho do arquivo de importação
import './App.css'; // Certifique-se de ter um arquivo de estilo correspondente

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
