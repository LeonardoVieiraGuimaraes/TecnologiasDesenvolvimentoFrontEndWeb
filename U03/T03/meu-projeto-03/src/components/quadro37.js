// REQUISIÇÕES HTTP
// Quadro 37 – Carregamento de componente montado

import React, { useState, useEffect } from "react";
function DataComponent() {
  const [dados, setData] = useState(null);
  useEffect(() => {
    fetch("HTTPs://api.example.com/dados")
      .then((resposta) => resposta.json())
      .then((data) => setData(data))
      .catch((erro) => console.error("Erro:", erro));
  }, []);
  if (!data) return "Carregando...";
  return <div>{/* Renderize os dados aqui */}</div>;
}
export default DataComponent;
