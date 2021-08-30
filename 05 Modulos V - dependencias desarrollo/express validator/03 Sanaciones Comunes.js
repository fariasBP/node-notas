
// trim()
	/* Elimina los espacios en del principio y el fin de la cadena*/
	app.post('/create',
		body('name').trim(),
		(req, res)=>{...})
	/*
		entrada: '    hola mundo  '
		salida: 'hola mundo'
	*/

// isLength(<object>)
	/* Verifica el tamaño del la entrada
		TEMAS:
		- <object> >>> Objeto que indica el minimo y el maximo que debe
						tener la entrada.
			- min >>> el minimo de caracteres que debe de tener la
						entrada.
			- max >>> el maximo de caracteres que debe de tener la
						entrada.*/
	app.post('/create',
		body('name').isLength({min:5, max:25}),
		(req, res) => {...})
	/*
		entrada: 'franco'
		salida: 'franco'
	*/
	/*
		entrada: 'fra'
		error: {
	  			"errors": [
			    {
			      "value": "fro",
			      "msg": "Invalid value",
			      "param": "name",
			      "location": "body"
			    }
			  ]
			}
	*/
// escape()
	/* Reemplaza valores como: <, >, &, ', " y / con sus correspondientes
	entidades HTML*/
	app.post('/create',
		body('name').escape(),
		(req, res) => {...})
	/*
		entrada: 'Hello world :>)'
		salida: 'Hello world :&gt;)'
	*/

// unescape()
	/*lo contrario de escape(), reemplaza entidades HTML a sus valores
	originales*/