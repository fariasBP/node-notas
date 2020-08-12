
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/crud-mongo', {useNewUrlParser: true, useUnifiedTopology: true })
    .then(db => console.log('db bonnect'))
    .catch(err => console.log(err))

const tereaSchema = new Schema({
    titulo: String,
    descripcion: String,
    status: {
        type: Boolean,
        default: false
    }
});
const Tarea = mongoose.model('tarea', tareaSchema)

// Ejemplo guardando datos de un formulario post con promesas
	app.post('/', (req, res) => {
		const tarea = new Tarea(req.body)
		tarea.save()
			.then(msg => console.log(msg))
			.catch(err => console.log(err))
		send('recibido')
	})
// Ejemplo guardando datos de un formulario post con async
	app.post('/', async (req,res) => { // mencionando que esta funcion es asincrona
		const tarea = new Tarea(req.body);
		await tarea.save() // esperando a que termine de ejcutarse esta linea para despues pasar a la otra linea
		res.send('recibido')
	})