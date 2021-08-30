/* PARAMETROS GET

*/

// con nodejs
	const http = require('http')

	http.createServer((req, res) => {
		if (req.url == '/') {
			res.writeHead(200, {'content-type':'text/html'})
			res.end('<h1>pagina inicial</h1>')
		} else if (req.url == '/productos') {
			res.writeHead(200, {'content-type':'text/html'})
			res.end('<h1>Productos</h1>')
		}
	}).listen(5500)

//con Express
	const express = require('express');
	const app = express();

	app.get('/', (req, res) => {
		console.log(req.query)
		res.send('<h1>pagina inicial</h1>')
	})

	app.get('/producto', (req, res) => {
		res.send('<h1>Productos</h1>')
	})

	app.listen(5500)

//con Express - Ejemplo 2
	const express = require('express');
	const app = express();

	app.get('/', (req, res) => { // imaginando que se solicito: localhost:5500/?id=22&user=fran698
		console.log(req.query) 
		/*Entonces devolvera:
		{
			id: 22,
			user: "fran698"	
		}
		*/
		res.send('<h1>pagina inicial</h1>')
	})