// USANDO ATIVOS
// Quadro 43 – Módulo CSS

import React from 'react';
import styles from './App.module.css'; // Importe o módulo de estilo

function App() {
  return (
    <div className={styles.App}>
      <header className={styles['App-header']}>
        {/* ... Seu conteúdo aqui */}
      </header>
    </div>
  );
}

export default App;
