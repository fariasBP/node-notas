/*	QUERYSTRING
	Es un modulo que proporciona utilidades para analizar y dar formato a cadenas de consulta URL.
	TEMAS:
		- parse(str, sep, eq, options) >>> este metodo analiza una cadena de consulta  de direcion URL y apartir de esta crea una coleccion clave-valor
			- str >>> el <string> que se analizara
			- sep >>> el <string> que indica la sepacion que tendra cada variable
			- eq >>> el <string> que delimita entre clave y valores
		- stringify(obj, sep, eq, options) >>> este metodo analiza un objeto y apartir de esta crea una cadena de consulta de direccion URL (es decir lo contrario de parse())
			- obj >>> el <object> que se va a serializar en una cadena de consulta de url
	SINTAXIS:
		- <querystring>.parse(<string str>, <string sep>, <string eq>, <object options>):object
*/

// convirtiendo una cadena de consulta url a objeto
	const querystring = require('querystring');
	require('http').createServer((req, res) => {

		var str = 'id=2&libro=calculo&libro=tomo1&autor=Espinoza';
		let querys = querystring.parse(str, '&', '=')
		console.log(querys)
		/*devuelve: {
			id: 2,
			libro: ['calculo', 'tomo1'],
			autor: 'Espinoza'
		}*/

		console.log(querys.id) // devolvera '2'
		console.log(querys.libro[0]) // devolvera 'calculo'
		console.log(querys.libro[0]) // devolvera 'tomo1'
		console.log(querys.autor) // devolvera 'Espinoza'

	    res.end('adios servidor')

	}).listen(5500, ()=>{console.log('Corriendo...')})

// convirtiendo un objeto a cadena de consulta url

	const querystring = require('querystring');
	require('http').createServer((req, res) => {

		var str = {
			id: 2,
			libro: ['calculo', 'tomo1'],
			autor: 'Espinoza'
		};
		let querys = querystring.parse(str, '&', '=')
		console.log(querys) /*devuelve: 'id=2&libro=calculo&libro=tomo1&autor=Espinoza'*/

	    res.end('adios servidor')

	}).listen(5500, ()=>{console.log('Corriendo...')})