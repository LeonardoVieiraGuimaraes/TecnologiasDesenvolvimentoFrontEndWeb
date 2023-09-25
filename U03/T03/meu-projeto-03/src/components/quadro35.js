// REQUISIÇÕES HTTP
// Quadro 35 – Recuperação

fetch('HTTPs://api.example.com/data')
.then(resposta => resposta.json())
.then(dados => console.log(dados))
.catch(erro => console.error('Erro:', erro));