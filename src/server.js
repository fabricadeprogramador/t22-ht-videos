const express = require('express');
const path =  require('path');
const serverStatic = require('server-static');
const endereco = '0.0.0.0';
const porta = process.env.PORT || 5000;
const server = express();

server.use(serverStatic(path.join(__dirname, 'dist')));
server.listen(porta, endereco, () => {
    console.log("ht videos inicializada");
})