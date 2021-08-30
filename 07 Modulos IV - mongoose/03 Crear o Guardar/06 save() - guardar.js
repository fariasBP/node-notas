/* SAVE()
	Guarda este documento insertando un nuevo documento en la base de
	datos si document.isNew es , o envía una operación updateOne con 
	solo las rutas de acceso modificadas si es .trueisNewfalse
	TEMAS:
		- save(options?) >>> guarda o acutaliza un documento en la BD.
			- options >>> opciones opcionales de guardado.
				- 

	SINTAXIS:
		- [Model].save(<Object options?>):promise<document>
*/
// guardando con callback
	const Tarea = require('../models/TareaModel')

	app.post('/', (req, res) => {
		const tarea = new Tarea(req.body)
		tarea.save((err, data) => {
			if (err) throw err
			res.send('recibido')
		})
	})

// guardando con promesas
	const Tarea = require('../models/TareaModel')

	app.post('/', (req, res) => {
		const tarea = new Tarea(req.body)
		tarea.save()
			.then(msg => console.log(msg))
			.catch(err => console.log(err))
		res.send('recibido')
	})

// guardando con async
	const Tarea = require('../models/TareaModel')

	app.post('/', async (req,res) => { // mencionando que esta funcion es asincrona
		const tarea = new Tarea(req.body);
		await tarea.save() // esperando a que termine de ejcutarse esta linea para despues pasar a la otra linea
		res.send('recibido')
	})

// guardando con async y babel
	import Tarea from '../models/TareaModel'

	app.post('/', async (req,res) => { // mencionando que esta funcion es asincrona
		const tarea = new Tarea(req.body);
		await tarea.save() // esperando a que termine de ejcutarse esta linea para despues pasar a la otra linea
		res.send('recibido')
	})