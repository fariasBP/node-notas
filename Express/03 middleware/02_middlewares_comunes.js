const express = require('express');
const morgan = require('morgan');
const app = express();

app.use(express.json()) // ayuda a que express sea capaz de leer json.
app.use(morgan('dev')); // ayuda a ver mas informacion (como el tiempo, tipo entre otros) de las peticiones y respuestas

app.get('/', (req, res) => {
	let data = {
		id: 456,
		name: 'fra',
		lastname: 'Hefg'
	}
	console.log(data);
	res.send('<h1>Hola Mundo</h1>');
})

app.use(express.static('public')); // para que se pueda leer los archivos estatico (como css, js, jpg, etc) por el navegador

app.listen(5500);