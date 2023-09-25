// Quadro 2 – Lista de tarefas
import React from 'react';
import Tarefa from './quadro01';

function ListaDeTarefas() {
    const tarefas = ['Estudar React', 'Fazer exercícios', 'Ler um livro'];
    return (
        <ul>
            {tarefas.map((tarefa, index) => <Tarefa key={index} texto={tarefa} />)}
        </ul>
    );
}

export default ListaDeTarefas;