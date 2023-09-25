// EVENTOS
// Quadro 16 – Eventos

import React, { useState } from "react";
function Button() {
  const [message, setMessage] = useState("");
  const handleClick = () => {
    setMessage("Botão clicado!");
  };
  return (
    <div>
      <button onClick={handleClick}>Clique aqui</button>
      <p>{message}</p>
    </div>
  );
}
export default Button;
