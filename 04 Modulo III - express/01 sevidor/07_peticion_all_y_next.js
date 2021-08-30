/*
	TEMAS:
		- next >>> Argumento de devolución de llamada a la función middleware, denominado "next" por convención.
*/

const express = require('express');
const app = express();

app.use(express.json())

/*app.all('/user', (req, res) => {
	console.log('simpre pasa por aqui');
	res.send('finish')
})*/

app.all('/user', (req, res, next) => {
	console.log('siempre pasa por aqui');
	next();
})

app.get('/user', (req, res) => {
	res.send('GET REQUEST RECEIVED')
})

app.post('/user', (req, res, next) => {
	console.log('PORT REQUEST RECEIVED');
	next();
})

app.put('/user', (req, res, next) => {
	console.log('UPDATE REQUEST RECEIVED');
	next();
})

app.delete('/user', (req, res, next) => {
	console.log('DELETE REQUEST RECEIVED');
	next();
})