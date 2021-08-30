/*	RENDER - renderizar archivos ejs
	
	TEMAS:
		- compile(str, options?) >>> renderiza un arhivo ejs de forma sincrono y devuelve un <string> del arhivo renderizado.
			- str >>> <string> a renderizar.
			- options? >>> opciones de renderizado.
				> cache >>> Las funciones compiladas se almacenan en caché, requiere filename
				> filename >>> Utilizado por para las cachés de claves, y para loscache
				> root >>> Establezca la raíz del proyecto para includes con una ruta de acceso absoluta (por ejemplo, /file.ejs). Puede ser matriz para intentar resolver incluir desde varios directorios.
				> views >>> Una matriz de rutas de acceso que se va a utilizar al resolver se incluye con rutas relativas.
				> context >>> Contexto de ejecución de la función
				> compileDebug >>> Cuando no se compila ninguna instrumentación de depuraciónfalse
				> client >>> Devuelve la función compilada independiente
				> delimiter >>> propiedad que indica el delimitador de la sintaxis ejs
				> openDelimiter >>>
				> closeDelimiter '/li>
				> debug >>> Salidas generadas cuerpo de función
				> strict >>> Cuando se establece en 'true', la función generada está en modo estricto
				> _with >>> Si usar o no construcciones. Si, a continuación, los locales se almacenarán en el objeto. (Implica '--estricto')with() {}falselocals
				> localsName >>> Nombre que se usará para el objeto que almacena variables locales cuando no se utilizan Valores predeterminados para withlocals
				> rmWhitespace >>> Elimine todos los espacios en blanco seguros para eliminar, incluidos los espacios en blanco iniciales y finales. También permite una versión más segura de la suspensión de líneas para todas las etiquetas scriptlet (no elimina nuevas líneas de etiquetas en el medio de una línea).-%>
				> escape >>> La función de escape utilizada con construct. Se utiliza en la representación y se utiliza en la generación de funciones de cliente. (De forma predeterminada, escapa a XML).<%=.toString()
				> outputFunctionName >>> Establézcalo en una cadena (por ejemplo, o ) para que una función imprima la salida dentro de las etiquetas scriptlet.'echo''print'
				> async Cuando >>> , EJS utilizará una función asincrónica para la representación. (Depende de la compatibilidad de async/await en el tiempo de ejecución de JS.true
		- render(str, data, options) >>> renderiza un arhivo ejs de forma sincrono y devuelve un <string> del arhivo renderizado.
			- str >>> <string> a renderizar.
			- data >>> <object> que indica los datos que se pasa y se remplaza en el archivo ejs.
			- options >>> <object> igual al <options> de compile.
		- renderFile(filename, data, options, callback) >>> renderiza un arhivo ejs de forma asincronico.
			- filename >>> <string> que indica la ruta del arhvivo ejs.
			- data >>> un <object que indica los datos que se pasan y se remlazan en el archivo ejs.
			- options >>> <object> igual que compile().
			- callback(err, data) >>> un <function> que maneja los datos y errores que se presenten.
				> err >>> devuelve un <error> si es que existe un error al leer el archivo.
				> data >> devuelve un <string> que indican los datos que se leyeron del archivo.


	SINTAXIS:
		- <ejs>.compile(<string str>, <object options?>):<string>
		- <ejs>.render(<string str>, <object data?>, <object options?>):<string>
		- <ejs>.renderFile(<string filename>, <object data?>, <object options?>, <function callback>)
			- <function callback(<error err>, <string data>)>
*/


let template = ejs.compile(str, options);
template(data);
// => Rendered HTML string

ejs.render(str, data, options);
// => Rendered HTML string

ejs.renderFile(filename, data, options, function(err, str){
    // str => Rendered HTML string
});