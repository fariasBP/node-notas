/*	
- INIT
	npm init <initializer> se puede utilizar para configurar un
	paquete npm nuevo o existente con la ayuda de un asistente de
	consola.
	-TEMAS:
		- --yes|-y >>> inicializa el proyecto con datos por defecto,
						es decir sin asistente.

	-SINTAXIS:
		- npm init ?[--force|-f|--yes|-y|--scope]
	-EJEMPLO
		- npm init
- INSTALL
	Este comando instala un paquete, y paquetes de los que depende.
	Siguiendo el archivo package.json.

	-SINTAXIS:
		- npm install
		- npm i

- INSTALL [PACKAGES]
	Este comando instala un o mas paquetes (separados por espacio) en
	al proyecto y lo registra como dependencia del mismo, en
	"package.json".
	SINTAXIS:
		- npm install [packages]
		- npm i [packages]
	EJEMPLO:
		- npm install sax
		- npm i sax

- INSTALL [PACKAGES] -S
	Este comando es lo mismo que el anterior.
	SINTAXIS:
		- npm install [packages] --save
		- npm install [packages] -S
		- npm i [packages] --save
		- npm i [packages] -S
	EJEMPLO:
		- npm install sax -S
		- npm i sax --save

- INSTALL [PACKAGE] -D
	Este comando instala un o mas paquetes (separados por espacio) en
	al proyecto y lo registra como dependencia de desarrollo, en
	"package.json".
	SINTAXIS:
		- npm install [packages] -D
		- npm i [packagess] -D
		- npm install [packages] --save-dev

*/