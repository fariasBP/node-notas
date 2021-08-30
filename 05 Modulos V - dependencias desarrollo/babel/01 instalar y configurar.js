/*	INTALACION y CONFIGURACION PARA NODE


*/
// INSTALACION
	/*
	PAQUETES ESCENCIALES PARA EL FUNCIONAMIENTO DE BABEL
		- instalcion del core de babel (nucleo de babel)
			npm i @bable/core -D

		- instalacion del cli de babel (interfaz de linea de comandos o consola de babel)
			npm i @babel/cli -D

	SOPORTE PARA NODE
		- intalacion de paquete para soportar node
			npm i @bable/node -D
		- instalcion de paquete para ajuste preestablecido inteligente (para usar las ultimas caracteristicas de Javascript)
			npm i @babel/preset-env -D

	ENTONCES:
		- npm i @babel/core @babel/cli @babel/node @babel/preset-env -D
	*/

// CONFIGURACION - activando el preset-env
	/* Se crea un archivo con el nombre ".babelrc" en donde se establecera
	la confiracion de babel
	TEMAS:
		- presets:	

	EJEMPLO
		{
			"presets": [
				"@babel/env"
			]
		}
	*/

// CONFIGURACION - ejecutar con babel
	/* PRIMERA FORMA: para arancar un archivo de nodejs solo escribiamos
	en la consola "node [index.js]" pero ahora se usara babel, entonces
	se debe llamar primero a babel:*/

		// npx babel-node [index.js]

	/*SEGUNDA FORMA: otra forma mas ordenada de arrancar un archivo nodejs
	con babel es establecer script en "package.json":
	*/
		/*
		"scripts": {
		    "start": "babel-node src/index.js"
		  },
		*/
	/*Y si se esta trabajando con nodemon u otro paquete similar, entonces
	 se usara el comando --exec:*/
		/*
		"scripts": {
		    "start": "nodemon src/index.js --exec babel-node"
		  },
		*/