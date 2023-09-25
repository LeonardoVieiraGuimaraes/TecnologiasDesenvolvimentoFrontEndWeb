// COMPONENTES E PROPS
// Quadro 2 – Lista de tarefas

function ListaDeTarefas() {
    const tarefas = ['Estudar React', 'Fazer exercícios', 'Ler um livro'];
    return (
        <ul>
            {tarefas.map((tarefa, index) => <Tarefa key={index} texto={tarefa} />)}
        </ul>
    );
}