
// CRIANDO ROTAS
// Quadro 30 – Roteamento básico

importar Reagir de 'reagir';
importar { BrowserRouter as Router, Route, Switch } de 'React-router-dom';
importar HomePage de './HomePage';
importe AboutPage de './AboutPage';
importar NotFoundPage de './NotFoundPage';
function Aplicativo() {
return (
<Roteador>
<Trocar>
<Route exact path="/" component={HomePage} />
<Route path="/about" component={AboutPage} />
<Componente de rota={NotFoundPage} />
</Switch>
</Router>
);
}
exportar aplicativo padrão;