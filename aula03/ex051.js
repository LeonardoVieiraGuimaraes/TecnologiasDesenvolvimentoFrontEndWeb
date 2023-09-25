function Aluno(nome, sobrenome, email, rgm) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.email = email;
  this.rgm = rgm;
}


function Disciplina(id, nome, creditos, capacidade) {
    this.id = id;
    this.nome = nome;
    this.creditos = creditos;
    this.capacidade = capacidade;
    this.matriculados = [];
  
    this.realizarMatricula = function (rgm) {
      if (this.matriculados.length < this.capacidade) {
        this.matriculados.push(rgm);
        return "Matrícula Realizada com Sucesso!";
      } else {
        return "Matrícula não realizada, já foram preenchidas todas as vagas!";
      }
    };
  }

var disciplina = new Disciplina(1, "Algoritmo", 3, 4);

var aluno1 = new Aluno("Ana", "Costa", "a@gmail.com", 12345);
var aluno2 = new Aluno("Maria", "Silva", "m@gmail.com", 12346);
var aluno3 = new Aluno("João", "Silva", "j@gmail.com", 12347);
var aluno4 = new Aluno("Pedro", "Santos", "p@gmail.com", 12348);
var aluno5 = new Aluno("José", "Santos", "p@gmail.com", 12349);

console.log(disciplina.realizarMatricula(aluno1.rgm)); // Matrícula Realizada com Sucesso!
console.log(disciplina.realizarMatricula(aluno2.rgm)); // Matrícula Realizada com Sucesso!
console.log(disciplina.realizarMatricula(aluno3.rgm)); // Matrícula Realizada com Sucesso!
console.log(disciplina.realizarMatricula(aluno4.rgm)); // Matrícula não realizada, já foram preenchidas todas as vagas!
console.log(disciplina.realizarMatricula(aluno5.rgm)); // Matrícula não realizada, já foram preenchidas todas as vagas!
