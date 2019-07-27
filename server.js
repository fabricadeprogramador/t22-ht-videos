const express = require('express');
const path = require('path');
const serveStatic = require('serve-static');
const endereco = '0.0.0.0';
const porta = process.env.PORT || 5000;
const server = express();

server.use(serveStatic(path.join(__dirname, 'dist')));

server.listen(porta, endereco, () => {
  console.log('HT Videos Inicializado');
}) 