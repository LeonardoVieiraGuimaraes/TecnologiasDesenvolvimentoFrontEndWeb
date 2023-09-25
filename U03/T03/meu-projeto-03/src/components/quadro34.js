// CRIANDO ROTAS
// Quadro 34 – Navegação programática

importar { useHistory } de 'React-router-dom';
function HomePage() {
let history = useHistory();
vamos navegarToAboutPage = () => {
history.push('/sobre');
}
retornar (
<button onClick={navigateToAboutPage}>
Ir para a página Sobre
</button>
);
}