const express = require('express');
const app = express();

app.use(express.json()) // middleware que se vera despues

app.get('/user', (req, res) => {
	// res.json({username: 'Cameron', lastname: 'Howe'}) // manda respuesta json (parecido a res.send() pero ya no envia html sino json).
	res.send('GET REQUEST RECEIVED')
})

app.post('/user', (req, res) => {
	res.send('PORT REQUEST RECEIVED');
})

app.put('/contact', (req, res) => {
	res.send('UPDATE REQUEST RECEIVED');
})

app.delete('/delete', (req, res) => {
	res.send('DELETE REQUEST RECEIVED')
})