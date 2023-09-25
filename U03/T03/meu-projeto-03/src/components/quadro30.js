
// CRIANDO ROTAS
// Quadro 30 – Roteamento básico

import React from 'react'; // Importe 'React' com "R" maiúsculo
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; // Importe com "r" minúsculo

import HomePage from './HomePage'; // Importe com letra maiúscula
import AboutPage from './AboutPage'; // Importe com letra maiúscula
import NotFoundPage from './NotFoundPage'; // Importe com letra maiúscula

function App() { // Renomeie de Aplicativo para App
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route component={NotFoundPage} /> {/* Corrija para 'Route' */}
      </Switch>
    </Router>
  );
}

export default App; // Exporte o componente 'App' corretamente
