/* INSTALACION Y CONFIGURACION
	


*/

// INSTALACION
	// npm i express-validator

// SINTAXIS
	// [<function middlewareDeValidacion>].[<function Esterilizacion>]


// USO BASICO
	/* Peticion Basica Sin Express-Validator
		si se quiere escribir una peticion basica en donde  se reciben
		datos. El problema es que sucede no se reciben datos*/
	const express = require('express');
	const app = express();

	app.use(express.json());
	app.post('/user', (req, res) => {
	  User.create({
	    username: req.body.username,
	    password: req.body.password,
	  }).then(user => res.json(user));
	});

	/* Peticion Basica con Express-Validator
	*/
	const { body, validationResult } = require('express-validator');

	const validation = [
		body('username').isEmail(), // username debe ser un email
		body('password').isLength({ min: 5 }), // password debe ser al menos 5 caracteres
	]

	app.post('/user', validation, (req, res) => {
	    // Finds the validation errors in this request and wraps them in an object with handy functions
	    const errors = validationResult(req);
	    if (!errors.isEmpty()) {
	      return res.status(400).json({ errors: errors.array() });
	    }

	    User.create({
	      username: req.body.username,
	      password: req.body.password,
	    }).then(user => res.json(user));
	  },
	);
