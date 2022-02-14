const http = require('http');
//importando para o projeto o http

const app = require('./app');
//não preciso colocar app.js porque o proprio node ja entende

const port = process.env.PORT || 3000;
//se a const port não estiver preenchida vai pegar por padrão a porta 3000

const server = http.createServer(app);
//aqui passamos para o nosso server todo o conteúdo que está sendo exportado do app.js

server.listen(port);