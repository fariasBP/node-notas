/* FUNCIONES DE ESTERILIZACION
	A veces, recibir entrada en una solicitud HTTP no se trata solo de 
	asegurarse de que los datos están en el formato correcto, sino 
	también de que están libres de ruido.
	validador.js proporciona un puñado de desinfectantes que se pueden
	utilizar para cuidar de los datos que entra.
	TESMAS:
		- isEmail() >>> verifica si el campo es email
		- escape() >>> escapa el campo, por ejemplo el signo mayor ">" escapado es igual a "&lt;"
		- notEmpty() >>> verifica si no esta vacio
		- isInt() >>> verifica si es numero
		- idLenght(options?) >>> verifica si el campo tiene un rango establecido en options (options de tipo Object). Por defecto esta {min:0, max: undefined}
		- isAlpha() >>> verifica si el campo solo tiene letras
		- isAlphanumerick() >>> verifica si el campo es alfanumerico, es decir que solo tinene letra y/o numeros
	
	SINTAXIS:
		[<function midlewareDeValidacion>].[<function Esterilizacion?>]

*/
// EJEMPLO

	import { Router } from 'express'
	import { body } from 'express-validator'
	const router = Router()

	let validationCreate = [
		body('email').isEmail()
	    body('name').escape().notEmpty().isLength({min: 3}),
	    body('lastname').escape().isLength({min: 3}),
	    body('age').isInt()
	]

	router
	    .post('/', validationCreate, ctrl.createProduct)

	export default router