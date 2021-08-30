

// Servidor en Nodejs
var http = require('http')

http.createServer((req, res) => {
	res.writeHead(200, {'content-type': 'text/html'})
	res.end('<h1>Hola a todos</h1>');
}).listen(5500)

// Servidor en Express
var express = require('express');
var app = express();

app.get('/', (req, res) => {
    res.send('Hola mundo');
})

app.listen(8080);