
// Renderização condicional de filhos JSX
// Quadro 16 – Renderização condicional de filhos
const isLoggedIn = true;
const elemento = (
<div>
{isLoggedIn? <h1>Bem-vindo de volta!</h1> : <h1>Por favor, faça login.</h1>}
</div>
);