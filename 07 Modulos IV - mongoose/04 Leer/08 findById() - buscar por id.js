/* FINDBYID()
	Busca un único documento por su campo _id. es casi* equivalente
	a . Si desea realizar una consulta mediante un documento, utilice
	en lugar de .findById(id)findOne({ _id: id })_idfindById()findOne()

*/

		const Tarea = require('../models/TareaModel')

		app.get('/:id', (req, res) => {
			const idTask = await Tarea.findById(req.params.id)
        	res.json(idTask)
		})

		