const express = require('express'); // importa o módulo express
const app = express(); // inicia o express

// rota inicial
app.get('/', function (req, res) {
  res.send('<h1>Bem-vindo à Biblioteca Online!</h1>');
});

// rota de listagem de livros
app.get('/livros', function (req, res) {
  res.send('<h1>Lista de Livros!</h1>');
});

// rota para consulta de livro por parâmetro (por exemplo, ID ou nome)
app.get('/consulta/:parametro', function (req, res) {
  res.send('<b>Resultado da consulta:</b> ' + req.params.parametro);
});

// cria aplicação na porta 3000
app.listen(process.env.PORT ?? 3000, function (erro) {
  if (erro) {
    console.log('Erro ao iniciar o servidor.');
  } else {
    console.log(
      'Servidor da Biblioteca Online iniciado: http://localhost:3000/'
    );
  }
});
