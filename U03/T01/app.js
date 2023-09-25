import React from 'react';
import Tarefa from './Tarefa'; // Importe o componente Tarefa

function App() {
  return (
    <div>
      <ul>
        <Tarefa texto="Tarefa 1" />
        <Tarefa texto="Tarefa 2" />
        <Tarefa texto="Tarefa 3" />
      </ul>
    </div>
  );
}

export default App;
