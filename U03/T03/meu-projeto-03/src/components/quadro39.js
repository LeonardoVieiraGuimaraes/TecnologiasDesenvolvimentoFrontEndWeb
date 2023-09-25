// REQUISIÇÕES HTTP
// Quadro 39 – Solicitação assíncrona

async function buscarData() {
    try {
      const resposta = await fetch('https://api.example.com/data'); // Corrigido para URL em minúsculas
      const dados = await resposta.json();
      console.log(dados);
    } catch (erro) {
      console.error('Erro:', erro);
    }
  }
  
  buscarData();
  