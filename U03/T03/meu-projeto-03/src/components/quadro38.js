// REQUISIÇÕES HTTP
// Quadro 38 – Corpo

// POST /api/users HTTP/1.1
// Host: www.example.com
// Content-Type: application/json
// {
// "name": "Jns",
// "email": "jns@example.com",
// "age": 30
// }

const url = 'https://www.example.com/api/users'; // Substitua pela URL real
const data = {
  name: 'Jns',
  email: 'jns@example.com',
  age: 30
};

fetch(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(data)
})
  .then(response => {
    if (!response.ok) {
      throw new Error('Erro na solicitação.');
    }
    return response.json();
  })
  .then(data => {
    console.log('Resposta do servidor:', data);
  })
  .catch(error => {
    console.error('Erro:', error);
  });
