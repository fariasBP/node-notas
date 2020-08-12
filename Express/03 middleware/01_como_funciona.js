/*
	Una middleware son funcionalidades que ayudan al programa en distintas tareas. por lo tanto
	empiezan a trabajar antes que el programa;
*/

// ejemplo de como funciona un middleware
	const express = require('express');
	const app = express();

	function mi_middleware(req, res, next) {
		console.log('middleware trabajando');
		next() // para que continue
	}

	app.use(middleware);

	app.get('/', (req, res) => {
		res.send('<h1>Hola Mundo</h1>');
	})

// ejemplo creando un middleware que muestra la ruta de la peticion
	const express = require('express');
	const app = express();

	function mi_middleware(req, res, next) {
		console.log(`Ruta recivida: ${req.protocol}://${req.get('host')}${req.originalUrl}`);
		next() // para que continue
	}

	app.use(middleware);

	app.get('/', (req, res) => {
		res.send('<h1>Hola Mundo</h1>');
	})