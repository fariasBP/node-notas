/* FIND()
 	Busca y devuelve documentos de la DB.
 	TEMAS:
 		- find(filter?, projection?, options?, callback?) >>> busca documentos de la DB.
 			- filter >>> de tipo Object, filtra los documentos 
 			dependiendo las propiedades que se especifiquen. si 
 			no se especifica  este parametro entonces se devolvera 
 			todos los documentos de la coleccion.

 	SINTAXIS:
 		- find(<Object filter?>, <function callback(err, res)?>):Query
*/

// Buscar todos los documentos
	// con callback
		const Tarea = require('../models/TareaModel')

		app.get('/', (req, res) => {
			const tarea = Tarea.find((err, data) => {
				if(err) throw err
				res.json(data)
			})	
		})
	// con promesas
		const Tarea = require('../models/TareaModel')

		app.get('/', (req, res) => {
			const tarea = Tarea.find()
				.then(data => {
					res.json(data)
				})
				.catch(err => {
					throw err
				})
			
		})

	// con async
		const Tarea = require('../models/TareaModel')

		app.get('/', async (req,res) => { // mencionando que esta funcion es asincrona
			const tarea = await Tarea.find()
			res.json(tarea)
		})

	// con async y babel
		import Tarea from '../models/TareaModel'

		app.get('/', async (req,res) => { // mencionando que esta funcion es asincrona
			const tarea = await Tarea.find()
			res.json(tarea)
		})