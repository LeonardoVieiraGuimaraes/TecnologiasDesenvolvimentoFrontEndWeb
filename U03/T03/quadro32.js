// CRIANDO ROTAS
// Quadro 32 – Parâmetro de rota

import React from 'react';
import { Route } from 'react-router-dom';

function App() {
  return (
    <Route path="/user/:id" component={UserPage} />
  );
}

function UserPage({ match }) {
  return <h1>ID do usuário: {match.params.id}</h1>;
}

export default App;
