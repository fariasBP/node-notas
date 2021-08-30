/* CORSJS
	CORS es un paquete .js nodo para proporcionar un middleware 
	Connect/Express que se puede utilizar para habilitar CORS con 
	varias opciones.

*/

// INTALACION
	// npm install cors

// USO SIMPLE (Para habilitar todas las solicitudes CORS)

	import express from 'express';
	import cors from 'cors'

	import indexRoute from './routes/indexRoute'

	const app = express();

	app
	    .set('port', process.env.PORT || 3000)

	app
	    .use(cors()) // se habilita cors para todas las solicitudes
	    .use(express.json())
	    .use(express.urlencoded({extended: false}))

	app
	    .use('/', indexRoute)

	export default app

// HABILITAR CORS PARA UNA SOLA RUTA
	import express from 'express';
	import cors from 'cors'

	import productsRoute from './routes/productsRoute'

	const app = express();

	app
	    .set('port', process.env.PORT || 3000)

	app
	    .use(express.json())
	    .use(express.urlencoded({extended: false}))

	app
	    .use('/products/:id', cors(), productsRoute) // se habilita CORS solo para esta ruta

	export default app

// HABILITAR CORS PARA UNA SOLICITUD ESPECIFICA

	import express from 'express';
	import cors from 'cors'

	import indexRoute from './routes/indexRoute'

	const app = express();

	app
	    .set('port', process.env.PORT || 3000)

	app
	    .use(cors({ // se habilita cors para una solicitud especifica
	    	origin: 'https://example.com',
	    	optionsSuccessStatus: 200
	    })) 
	    .use(express.json())
	    .use(express.urlencoded({extended: false}))

	app
	    .use('/', indexRoute)

	export default app

// HABILITAR CORS A UNA RUTA Y CON UNA SOLICITUD ESPECIFICA
	import express from 'express';
	import cors from 'cors'

	import indexRoute from './routes/indexRoute'

	const app = express();

	let corsOptions = {
		origin: 'https://example.com',
	    optionsSuccessStatus: 200
	}

	app
	    .set('port', process.env.PORT || 3000)

	app
	    .use(express.json())
	    .use(express.urlencoded({extended: false}))

	app
	    .use('/', cors(corsOptions), indexRoute)

	export default app