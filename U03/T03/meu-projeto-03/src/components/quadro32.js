// CRIANDO ROTAS
// Quadro 32 – Parâmetro de rota

import { Route } de 'React-router-dom';
função Aplicativo() {
retornar (
<Route path="/user/:id" component={UserPage} />
);
}
function UserPage({ match }) {
return <h1>ID do usuário: {match.params.id}</h1>;