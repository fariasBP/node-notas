/* URL
	TEMAS:
		- parse(urlString, parseQueryString, slashesDenoteHost) >>> Este metodo toma un cadena de direccion URL, la anliza y devuelve un objeto URL.
			- urlString >>> Es un valor <string> que determina la cadena de direccion URL  que se va a analizar.
			- parseQueryString >>> Es un valor <bool>, si es <true> entonces el modulo <querystring> crera una coleccion de esta. valor por defecto es false.
	SINTAXIS:
		- parse(<string urlString>, <bool parseQueryString?=false>):<object>
			> query

*/

// Todos los objetos de url.parse()
	const url = require('url');
	require('http').createServer((req, res) => {

		let str = 'http://localhost:5500/productos/#action'

		let parse = url.parse(str, true)

		console.log(parse) // devuelve: <object>

		console.log(parse.auth) // devuelve: null
		console.log(parse.hash) // devuelve: '#action'
		console.log(parse.host) // devuelve: 'localhost:5500'
		console.log(parse.hostname) // devuelve: 'localhost'
		console.log(parse.href) // devuelve: 'http://localhost:5500/productos/#action'
		console.log(parse.path) // devuelve: '/productos/'
		console.log(parse.port) // devuelve: 5500
		console.log(parse.protocol) // devuelve: 'http:'
		console.log(parse.query) // devuelve: null
		console.log(parse.search) // devuelve: null
		console.log(parse.slashes) // devuelve: true

	    res.end('adios servidor')

	}).listen(5500, ()=>{console.log('Corriendo...')})

// ejemplo de search y query
	const url = require('url');
	require('http').createServer((req, res) => {

		let str = 'http://localhost:5500/?user=franco698&email=frank@gmail.com'
		let parse = url.parse(str, true)

		console.log(parse.query)
		/* devolvera: {
			user: 'franco698,
			email: 'frank@gmail.com'
		}*/
		console.log(parse.search) // devuelve: '?user=franco698&email=frank@gmail.com'

	    res.end('adios servidor')

	}).listen(5500, ()=>{console.log('Corriendo...')})

// Obteniendo las variables de una consulta url
	const url = require('url');
	require('http').createServer((req, res) => {

		let str = 'http://localhost:5500/?user=franco698&email=frank@gmail.com';
		let parse = url.parse(str, true)

		console.log(parse.query) 
		/* devolvera: {
			user: 'franco698,
			email: 'frank@gmail.com'
		}*/

		console.log(parse.query.user) // devuelve: 'franco698'
		console.log(parse.query.email) // devuelve: frank@gmial.com

	    res.end('adios servidor')

	}).listen(5500, ()=>{console.log('Corriendo...')})

// Obtener la consulta url
	const url = require('url');
	require('http').createServer((req, res) => {

		let str = 'http://localhost:5500/?user=franco698&email=frank@gmail.com';
		let parse = url.parse(str, false)

		console.log(parse.query) // devolvera: 'user=franco698&email=frank@gmail.com'

		console.log(parse.query.user) // devuelve: undefined
		console.log(parse.query.email) // devuelve: undefined

	    res.end('adios servidor')

	}).listen(5500, ()=>{console.log('Corriendo...')})