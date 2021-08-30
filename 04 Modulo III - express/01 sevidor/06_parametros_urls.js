

// usando rutas dinamicas
const express = require('express');
const app = express();

app.use(express.json())

app.get('/user/:id', (req, res) => { // imaginando que se solicito: localhost:5500/user/344
	console.log(req.params)
	/* Suponiendo la url es igual a la que se menciono entonces devuelve:
		{
			id: "456"
		}
	*/
	res.send('Peticion GET recibida')
})