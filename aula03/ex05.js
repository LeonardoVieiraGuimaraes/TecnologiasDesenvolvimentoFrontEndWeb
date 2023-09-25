// Definindo a classe 'disciplina'
function Disciplina(id, nome, creditos) {
    this.id = id;
    this.nome = nome;
    this.creditos = creditos;
    this.matriculados = [];
  
    this.realizarMatricula = function (rgm) {
      this.matriculados.push(rgm);
      return `Matrícula do Aluno${rgm}`;
    };
  }
  
  // Definindo a classe 'aluno'
  function Aluno(nome, sobrenome, email, rgm) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.email = email;
    this.rgm = rgm;
  }
  
  // Criando uma instância da disciplina
  var disciplina = new Disciplina(1, "Algoritmo", 3);
  
  // Criando instâncias de alunos
  var aluno1 = new Aluno("Ana", "Costa", "a@gmail.com", 12345);
  var aluno2 = new Aluno("Maria", "Silva", "m@gmail.com", 12346);
  var aluno3 = new Aluno("João", "Silva", "j@gmail.com", 12347);
  var aluno4 = new Aluno("Pedro", "Santos", "p@gmail.com", 12348);
  
  // Matrícula dos Alunos
  console.log(disciplina.realizarMatricula(aluno1.rgm)); // Matrícula do Aluno12345
  console.log(disciplina.realizarMatricula(aluno2.rgm)); // Matrícula do Aluno12346
  console.log(disciplina.realizarMatricula(aluno3.rgm)); // Matrícula do Aluno12347
  console.log(disciplina.realizarMatricula(aluno4.rgm)); // Matrícula do Aluno12348
  
  console.log("Matriculados na ", disciplina.nome, "são: ", disciplina.matriculados);
  