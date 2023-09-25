// CRIANDO ROTAS
// Quadro 32 – Parâmetro de rota

import React from 'react'; // Importe 'React' com "R" maiúsculo
import { Route } from 'react-router-dom'; // Importe 'Route' com "R" maiúsculo

function App() {
  return (
    <Route path="/user/:id" component={UserPage} />
  );
}

function UserPage({ match }) {
  return <h1>ID do usuário: {match.params.id}</h1>;
}

export default App; // Exporte o componente 'App' corretamente
