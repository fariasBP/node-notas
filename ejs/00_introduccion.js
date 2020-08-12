/*Introducción

*/


// INSTALAR
	/*Es fácil instalar EJS con NPM.*/
	$ npm install ejs

// USO
	/*Pase EJS una cadena de plantilla y algunos datos. BOOM, tienes algo de HTML.*/
	let ejs = require('ejs');
	let people = ['geddy', 'neil', 'alex'];
	let html = ejs.render('<%= people.join(", "); %>', {people: people});

// CLI
	/*Alimente un archivo de plantilla y un archivo de datos y especifique un archivo de salida.*/
	ejs ./template_file.ejs -f data_file.json -o ./output.html
	
// Soporte para navegadores
	/*Descargue una compilación del explorador de la versión más recientey utilela en una etiqueta de script.*/
	<script src="ejs.js"></script>
	<script>
	  let people = ['geddy', 'neil', 'alex'];
	  let html = ejs.render('<%= people.join(", "); %>', {people: people});
	</script>