/* CONNECT
	Abre la conexion mongoose de una base de datos.
	TEMAS:
		- connect(uri(s), options?, callback(err)):promise >>> abre la conexion a 
		una BD.
			- uri >>> de tipo string, establece la url a la cual se conectara
			- options >>> de tipo object, establece distintas opcion de conexion
				- useNewUrlParser >>> de tipo Boolean y False de forma predeterminada. 
				Establézcaos para optar por la nueva lógica del analizador de URL del controlador MongoDB.
				- useUnifiedTopology >>> de tipo Boolean y False de forma predeterminada.
				Establézcaos para optar por el conjunto de réplicas del controlador 
				de MongoDB y el motor de supervisión de clúster particionado.true
	SINTAXIS:
		- [Mongoose].connect(<string uri(s)>, <object options?>, <Function callback?>):promise

*/
// Conectando a una DB con promesas
	const mongoose = require('mongoose');

	mongoose.connect('mongodb://localhost/db_name', {useNewUrlParser: true, useUnifiedTopology: true })
	    .then(db => console.log('DB conectado en:', db.connection.name))
	    .catch(err => console.log(err))

// Conectando a una DB con Async-Await
	const mongoose = require('mongoose');

	(async() => {
		const db = await mongoose.connect(
			'mongodb://localhost/db_name',
			{useNewUrlParser: true, useUnifiedTopology: true }
			)
		console.log('DB conectado en:', db.connection.name)
	}) ();

// Usando es6
	import mongoose from 'mongoose'

	mongoose.connect("mongodb://localhost:27017/companydb", {
	    useNewUrlParser: true,
	    useUnifiedTopology: true,
	    useCreateIndex: true
	})
	    .then(db => console.log('Db is connected'))
	    .catch(err => console.log(err))

// 
	import mongoose from 'mongoose'
	(async () => {
	    try {
	        const db = await mongoose.connect(
	            process.env.MONGODB_URI,
	            {
	                useNewUrlParser: true,
	                useUnifiedTopology: true,
	                useFindAndModify: false
	            }
	        )
	        console.log("DB connected on:", db.connection.name)
	    } catch (err) {
	        console.error(err)
	    }
	}) ();