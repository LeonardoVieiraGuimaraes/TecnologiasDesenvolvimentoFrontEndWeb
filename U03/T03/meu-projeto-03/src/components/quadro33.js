// CRIANDO ROTAS
// Quadro 33 – Rota aninhada

import { BrowserRouter as Router, Route, Link, useRouteMatch } from 'React-router-dom';
função Aplicativo() {
retornar (
<Roteador>
<Route path="/user/:id" component={UserPage} />
</Router>
);
}
função UserPage() {
let { path, URL } = useRouteMatch();
retornar (
<div>
<h1>Página do usuário</h1>
<ul>
<li><Link para={`${URL}/posts`}>Postagens</Link></li>
<li><Link para={`${URL}/photos`}>Fotos</Link></li>
</ul>
<Route path={`${path}/posts`} component={PostsPage} />
<Route path={`${path}/photos`} component={PhotosPage} />
</div>
);
}
função PostPage() {
return <h2>Postagens do usuário</h2>;
}
função PhotosPage() {
return <h2>Fotos do usuário</h2>;
}