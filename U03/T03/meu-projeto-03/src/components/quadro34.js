// CRIANDO ROTAS
// Quadro 34 – Navegação programática
import React from 'react';
import { useHistory } from 'react-router-dom';

function HomePage() {
  let history = useHistory();

  const navigateToAboutPage = () => {
    history.push('/sobre');
  };

  return (
    <button onClick={navigateToAboutPage}>
      Ir para a página Sobre
    </button>
  );
}

export default HomePage;
