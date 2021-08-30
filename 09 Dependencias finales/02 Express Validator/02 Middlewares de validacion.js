/* MIDDLEWARE DE VALIDACION
	

	TEMAS:
		- check(fields, message) >>> crea una cadena de validacion para 
		uno o varios campos, que pueden ser solicitudes "req.body", 
		"req.cookies", "req.headers", "req.params", "req.query". Si en el
		caso de de que el campo este presente en mas de un objeto de
		solicitud entonces todos estos pasaran la validacion.
			- fields >>> es de tipo String o String[] y es opcional,indica
			el nombre de campo de alguno de los elementos del objeto de solicitud
			- message >>> es de tipo String, establece un mensaje de error por defecto al validar.
		- body(fields, message?) >>> Igual que check, pero sólo comprobara el objeto de solicitud req.body
		- cookie(fields, message?) >>> Igual que check, pero sólo comprobara el objeto de solicitud req.cookies
		- header(fields, message?) >>> Igual que check, pero sólo comprobara el objeto de solicitud req.headers
		- param(fields, message?) >>> Igual que check, pero sólo comprobara el objeto de solicitud req.params
		- query(fields, message?) >>> Igual que check, pero sólo comprobara el objeto de solicitud req.query
	
	SINTAXIS:
		- check(<String|String[] fields?>, <String message?>):validationChains[]
		- body(<String|String[] fields?>, <String message?>):validationChains[]
		- cookie(<String|String[] fields?>, <String message?>):validationChains[]
		- header(<String|String[] fields?>, <String message?>):validationChains[]
		- param(<String|String[] fields?>, <String message?>):validationChains[]
		- query(<String fields?>, <String message?>):validationChains[]

*/

	import { Router } from 'express'
	import * as ctrl from '../controller/productController'
	import { body, query, params } from 'express-validator'
	const router = Router()

	const validationCreate = [
	    body('name').escape().notEmpty().isLength({min: 3}), // o tambien >>> check('name').escape().notEmpty().isLength({min: 3}),
	    body('lastname').escape().isLength({min: 3}),
	    body('age').isInt()
	]
	const validationGet = [
		query(['page', 'limit']).isInt()
	]
	const validateUpdate = [
		params('id').isleng({min: 10})
	]

	router
		.get('/', validationGet, ctrl.findProduct)
	    .post('/', validationCreate, ctrl.createProduct)
	    .update('/check/:id', validationUpdate, ctrl.updateProduct)

	export default router