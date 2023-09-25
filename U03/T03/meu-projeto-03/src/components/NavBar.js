// CRIANDO ROTAS
// Quadro 31 – Navegação entre páginas

import React from 'react'; // Importe 'React' com "R" maiúsculo
import { Link } from 'react-router-dom'; // Importe 'Link' com "R" maiúsculo

function NavBar() {
  return (
    <div>
      <ul>
        <li><Link to="/">Página inicial</Link></li>
        <li><Link to="/about">Sobre</Link></li>
      </ul>
    </div>
  );
}

export default NavBar; // Use 'export default' em vez de 'exportar NavBar padrão'
