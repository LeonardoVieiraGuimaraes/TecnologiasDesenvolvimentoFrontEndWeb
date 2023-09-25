// CRIANDO ROTAS
// Quadro 33 – Rota aninhada

import React from 'react'; // Importe 'React' com "R" maiúsculo
import { BrowserRouter as Router, Route, Link, useRouteMatch } from 'react-router-dom'; // Importe com "r" minúsculo

function App() {
  return (
    <Router>
      <Route path="/user/:id" component={UserPage} />
    </Router>
  );
}

function UserPage() {
  let { path, url } = useRouteMatch(); // Corrigido para 'url' minúsculo

  return (
    <div>
      <h1>Página do usuário</h1>
      <ul>
        <li><Link to={`${url}/posts`}>Postagens</Link></li>
        <li><Link to={`${url}/photos`}>Fotos</Link></li>
      </ul>
      <Route path={`${path}/posts`} component={PostPage} /> {/* Corrigido para 'PostPage' */}
      <Route path={`${path}/photos`} component={PhotosPage} /> {/* Corrigido para 'PhotosPage' */}
    </div>
  );
}

function PostPage() {
  return <h2>Postagens do usuário</h2>;
}

function PhotosPage() {
  return <h2>Fotos do usuário</h2>;
}

export default App;
