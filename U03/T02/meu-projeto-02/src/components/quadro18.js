// MANIPULADORES
// Quadro 17 – Manipulador de evento de clique

import React from "react";
function Button() {
  const handleClick = () => {
    console.log("O botão foi clicado!");
  };
  return <button onClick={handleClick}>Clique aqui</button>;
}
export default Button;
