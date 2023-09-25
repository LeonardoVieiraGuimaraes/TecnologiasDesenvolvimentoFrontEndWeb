// REQUISIÇÕES HTTP
// Quadro 39 – Solicitação assíncrona

função assíncrona buscarData() {
    tentar {
    resposta const = await fetch('HTTPs://api.example.com/data');
    dados const = aguardo resposta.json();
    console.log(dados);
    } pegar (erro) {
    console.error('Erro:', erro);
    }
    }
    buscarData();