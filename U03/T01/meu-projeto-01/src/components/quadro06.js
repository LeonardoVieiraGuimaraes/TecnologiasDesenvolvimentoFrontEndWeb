import React from "react";

function mensagem_de_boas_vindas(props) {
  if (props) {
    return <h1>Olá, {props.nome}!</h1>;
  }
  return <h1>Olá, Estranho.</h1>;
}

export default mensagem_de_boas_vindas; // Exportação padrão
