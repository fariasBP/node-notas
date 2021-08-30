
// Leer POST con NodeJs
	const http = require('http')
	var dataPost = '';

	http.createServer((req, res) => {
		if (req.method == 'GET') {
			if (req.url == '/') {
				res.writeHead(200, {'content-type':'text/html'})
				res.end('<h1>hola mundo</h1>')
			}
		} else if (req.method == 'POST') {
			req
				.on('data', data => { // mientras se reciba los datos post que se envian
					dataPost += data;
				})
				.on('end', () => { // cuando se termine de recibir todo
					var dataObject = querystring.parse(dataPost) // lo convierte en objeto

					console.log(dataObject)

					res.end(dataJson);
				})
		}
		
	}).listen(5500)

// Leer POST con ExpressJs - req.body

	const express = require('express');
	const app = express();

	app.get('/', (req, res) => {
		res.send('<h1>hola mundo</h1>')
	})
	app.post('/', (req, res) => { // imaginemos que se envia un formulario con email=farn@gmail.com y pwd=123
		console.log(req.body) // estos son los datos que recibimos por post
		/* Suponiendo la url es igual a la que se menciono entonces devuelve:
			{
				email: "fran@gmail.com",
				pwd: 123
			}
		*/
	    //res.redirect('/') con esto podemos redireccionar a otra pagina por el metodo get
	    res.send(req.body)
	})
	app.listen(5500)