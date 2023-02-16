

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


//get query&params in express

//etc. example.com/user/000000?sex=female

app.get('/user/:id', function(req, res) {

  const query = req.query;// query = {sex:"female"}

  const params = req.params; //params = {id:"000000"}

})