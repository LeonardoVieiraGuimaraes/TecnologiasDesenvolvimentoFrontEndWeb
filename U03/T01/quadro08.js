// JSX representa objetos
// Quadro 8 – Objeto
const element = <h1 className="greeting">Olá, mundo!</h1>;
// Este JSX é compilado para:
const elemento = React.createElement(
'h1',
{className: 'saudação'},
'Olá Mundo!'
);