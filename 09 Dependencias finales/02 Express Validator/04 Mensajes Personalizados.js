/* ERRORES PERSONALIZADOS
	
	TEMAS:
		- withMessage(msg) >>> establece el mensaje que tendra el error de la ultima esterilizacion que se hizo

	SINTAXIS:
		- [Middleware de validacion].[Esterilizacion].withMessage(<String msg>)
	
	Como se puede notar en sintaxis, el withMessage() se debe declarar despues de una esterilizacion y se devolvera el mensaje de error despues que dicha esterilizacon falle.
*/
// Mensaje Personalizado
	import { Router } from 'express'
	import { body } from 'express-validator'
	import * as ctrl from '../controller/userController'
	const router = Router()

	let validationCreate = [
		body('email').isEmail().withMessage('este campo debe ser un email')
	]

	router
	    .post('/', validationCreate, ctrl.createUser)

	export default router

// Mensajes personalizados Multiples
	import { Router } from 'express'
	import { body } from 'express-validator'
	import * as ctrl from '../controller/userController'
	const router = Router()

	let validationCreate = [
		body('user')
			.escape()
			.notEmpty().withMessage('Este campo es requerido')
			.isLength({min: 5}).withMessage('este campo debe ser de al menos 5 caracteres')
	]

	router
	    .post('/', validationCreate, ctrl.loginUser)

	export default router