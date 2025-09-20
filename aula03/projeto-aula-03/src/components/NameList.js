import React from "react";

function NameList() {
  const names = ["João", "Maria", "Pedro", "Ana"];
  return (
    <div>
      <h1>Lista de Nomes</h1>
      <ul>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
}

export default NameList;
