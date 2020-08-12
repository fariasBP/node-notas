//con Express
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