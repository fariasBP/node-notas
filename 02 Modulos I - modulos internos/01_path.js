/*
	TEMAS:
		- basename(path, ext?) >>> Este metodo devlueve un <string> de la ultima parte de una url, es decir el nombre base.
			- path >>> url de tipo <string>
			- ext >>> extenciones que se ignoraran
		- parse(path) >>> Este metodo devuelve un <object> cuyas propiedades representan elemento significactivos del archivo.
			> dir >>> <string> que indica la direccion donde se encuntra el basename
			> root >>> <string> que indica la raiz
			> base >>> <string> que indica la ultima parte de la url, es decir el nombre base.
			> name >>> <string> que indica el nombre base sin su extension.
			> ext >>> <string> que indica la extension del nombre base.
	SYNTAXIS:
		- path.basename(<string path>, <string ext?>):<string>
		- path.parse(<string path>):<object>
			> <string dir>
			> <string root>
			> <string base>
			> <string ext>
			> <string name>


*/

// obteniendo el basename (nombre base de la url)
	const path = require('path');
	require('http').createServer((req, res) => {

		let url = req.url  // supongamos que se la url es '/libros/calculo-spivak.html'
		console.log(path.basename(req.url)) // entonces devolvera 'calculo-spivak.html'
		console.log(path.basename(req.url, 'html')) // entonces devolvera 'calculo-spivak'

	    res.end('adios servidor')

	}).listen(5500, ()=>{
	    console.log('Corriendo...')
	})

// obteniendo el basename (nombre base de la url)
	const path = require('path');
	require('http').createServer((req, res) => {

		let pathUrl = path.parse(req.url)  // supongamos que se la url es '/bibloteca/libros/calculo-spivak.html'
		console.log(pathUrl.root) // entonces devolvera '/'
		console.log(pathUrl.dir) // entonces devolvera '/bibloteca/libros'
		console.log(pathUrl.base) // entonces devolvera 'calculo-spivak.html'
		console.log(pathUrl.ext) // entonces devolvera '.html'
		console.log(pathUrl.name) // entonces devolvera 'calculo-spivak'

	    res.end('adios servidor')

	}).listen(5500, ()=>{
	    console.log('Corriendo...')
	})