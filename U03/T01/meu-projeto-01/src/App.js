import React from "react";
import img_avatar from "./assets/avatar.jpg";
import ListaDeTarefas from "./components/quadro02"; // Substitua pelo caminho correto para o arquivo ListaDeTarefas.js
import Mensagem from "./components/quadro06"; // Substitua pelo caminho correto para o arquivo Mensagem.js
const elemento = <h1>Olá, mundo!</h1>;

const nome = "Joao";
const user = {
  nome: "Leonardo",
  avatar: img_avatar, // Substitua com o caminho real para a imagem do avatar]
};
const elemento_nome = <h1>Olá, {nome}</h1>;
const element1 = <div tabIndex="0"></div>; // String literal
const element2 = <img src={user.avatar} alt="Avatar"></img>; // expressão JavaScript

const element = <h1 className="greeting">Olá, mundo!</h1>;
// Este JSX é compilado para:
const elemento_objeto = React.createElement(
  "h1",
  { className: "saudação" },
  "Olá Mundo!"
);
const elemento3 = (
  <div>
    <h1>Olá!</h1>
    <h2>É bom ver você aqui {user.name}.</h2>
  </div>
);
const buttonStatus = "desativado";
const buttonClass = buttonStatus === "ativado" ? "btn-enabled" : "btn-disabled";
const elementbutton = <button className={buttonClass}>Clique em mim!</button>;
function handleClick() {
  alert("Botão clicado!");
}
const element5 = <button onClick={handleClick}>Clique em mim!</button>;

const frutas = ["Maçã", "Banana", "Cereja"];
const elemento_map = (
  <ul>
    {frutas.map((frutas) => (
      <li>{frutas}</li>
    ))}
  </ul>
);

const isLoggedIn = false;
const element_cond = (
<div>
{isLoggedIn ? <h1>Bem-vindo de volta!</h1> : <h1>Por favor, faça login.</h1>}
</div>
);

function App() {
  return (
    <div className="App">
      <h1>Minhas Tarefas</h1>
      {elemento}
      <ListaDeTarefas />
      {elemento_nome}
      <Mensagem nome={user.nome} />
      {element1}
      {element2}
      {element}
      {elemento_objeto}
      {elemento3}
      {elementbutton}
      {element5}
      {elemento_map}
      {element_cond}
    </div>
  );
}

export default App;

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
