
// PRIMERA FORMA    
    var http = require('http'); // requerimiento de la libreria

    var servidor = http.createServer(mi_server);

    function mi_server(llamado, respuesta) {
        respuesta.writeHead(200, {'Content-Type': 'text/html'});
        respuesta.write('<h1>Hola Mundo</h1>');
        respuesta.end();
    }

    servidor.listen(8080);

// SEGUNDA FORMA

    var http = require('http')

    http.createServer((req, res) => {
        res.writeHead(200, {'Content-Type': 'text/plain'})
        res.end('<h1>Hello World</h1>')
    }).listen(5500, 'localhost')

// TERCERA FORMA

    function webServer(req, res) {
        res.writeHead(200, {'Content-Type':'text/html'});
        res.end('<h1>Hola Node.js</h1>');
    }
    http
        .createServer(webServer)
        .listen(3000, 'localhost')
    console.log('Servidor corriendo en localhost:3000');
