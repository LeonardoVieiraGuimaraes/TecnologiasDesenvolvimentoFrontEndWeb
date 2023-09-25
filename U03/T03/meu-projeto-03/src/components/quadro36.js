// REQUISIÇÕES HTTP
// Quadro 36 – Axios

axios.get('HTTPs://api.example.com/data')
.then(response => console.log(response.data))
.catch(erro => console.error('Erro:', erro));