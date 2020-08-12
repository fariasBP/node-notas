/* RESPONSE
	TEMAS:
		- res.write(data, codificacion, callback) >>> escibe en la respuesta es decir envia informacion que se mostrara
			- data >>> puede ser <string|buffer>, son los datos que se escribiran (enviaran) como cuerpo de respuesta.
			- codificacion >>> es la codificacion de <data> por defecto es 'utf-8'
			- callback >>> callback en donde se manejara el error si existe.
		- res.end() >>> Este método indica al servidor que se han enviado todos los encabezados y cuerpo de respuesta.
			- data >>> funciona igual que el <data> de <res.write()>
			- codificacion >>> funciona igual que el <codificacion> de <res.write()>
			- callback >>> funciona igual que el <callback> de <res.write()>
		- res.statusCode >>> Esta propiedad controla el codigo de estado que se enviara al cliente cuando se vacie los encabezados.
		- res.statusMessage >>> esta propiedad controla el mensaje de estado que se enviará al cliente cuando se vacíe los encabezados. Su valor por defecto es <undefined>
		- res.setHeader(name, valor) >>> Este metodo establece un unico valor de encabezado.
			- name >>> es de tipo <string> e indica el nombre del encabezado a establecer.
			- value >>> es de tipo <any> e indica el valor del encabezado a establecer.
		- res.writeHead(statusCode, statusMessage, headers) >> Este metodo envia encabezados de respuesta a la solicitud.
			- statusCode >>> igual a <res.statusCode>.
			- statusMessege >>> igual a <res.statusMessage>.
			- headers >>> de tipo <object>, parecido a <res.setHeader>.


	SINTAXIS:
		- response.write(<string|buffer chunk>, <string encoding?='utf-8'>, <function callback?>)
			- callback(<error err>)
		- response.end(<string|buffer chunk>, <string encoding?='utf-8'>, <function callback?>)
			- callback(<error err>)
		- response.statusCode = <int code=200>
		- response.statusMessage = <string message=undefined>
		- response.setHeader(<string name>, <any value>)
		- response.writeHead()
*/
// indicando al servidor que se ha terminado de reponder (con un ultimo mensaje: 'adios servidor')
require('http').createServer((req, res) => {

    res.end('adios servidor')

}).listen(5500, ()=>{
    console.log('Corriendo...')
})

// escribiendo el cuerpo de respuesta
require('http').createServer((req, res) => {
	
    res.write('te envio el cuerpo servidor', 'utf-8', (err) => {
        if (err) throw err
    })

    res.end()
}).listen(5500, ()=>{
    console.log('Corriendo...')
})

// establecer el codigo de estado, de la respuesta
require('http').createServer((req, res) => {

    res.statusCode = 404

    res.end('<h1>hola</h1>')
}).listen(5500, ()=>{
    console.log('Corriendo...')
})

// establecer cabecera (en este caso tipo de contenido 'content-type')

require('http').createServer((req, res) => {
	
    res.setHeader('content-type', 'text/html')

    res.end('<h1>hola</h1>')
}).listen(5500, ()=>{
    console.log('Corriendo...')
})

// establecer codigo de estado y cabeceras
require('http').createServer((req, res) => {
	
    res.writeHead(200, {'content-type': 'text/html'});

    res.end('<h1>hola</h1>')
}).listen(5500, ()=>{
    console.log('Corriendo...')
})