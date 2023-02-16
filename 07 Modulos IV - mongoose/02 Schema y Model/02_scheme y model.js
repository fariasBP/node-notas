/*
	Todo en Mongoose comienza con un esquema. Cada esquema se asigna a una 
	colección MongoDB y define la forma de los documentos dentro de 
	esa colección. Es decir el esquema (scheme) son valores que se 
	daran a datos para enviar a la bd.
	TEMAS:
		- new Schema(definition, options?) >>> crea una coleccion de 
		valores.
			- definition >>> de tipo Object|Schema|Array, Puede ser
			uno de: objeto que describe rutas de esquema, o esquema
			para copiar, o matriz de objetos y esquemas.
			- options >>> de tipo Object, son opciones para  el schema
				- autoIndex: bool - el valor predeterminado es null (lo que significa utilizar la opción autoIndex de la conexión)
				- autoCreate: bool - el valor predeterminado es null (lo que significa utilizar la opción autoCreate de la conexión)
				- bufferCommands: bool - el valor predeterminado es true
				- capped: bool - por defecto es false
				- colección: string - no default
				- id: bool - por defecto es true
				- _id: bool - el valor predeterminado es true
				- minimizar: bool - controla el comportamiento de document-toObject cuando se llama manualmente - el valor predeterminado es true
				- leer: cadena
				- writeConcern: object - el valor predeterminado es null, se usa para invalidar la configuración de preocupación de escritura predeterminada del servidor MongoDB
				- shardKey: object - el valor predeterminado es null
				- estricto: bool - por defecto a true
				- strictQuery: bool - por defecto es false
				- toJSON - objeto - sin valor predeterminado
				- toObject - objeto - sin valor predeterminado
				- typeKey - string - el valor predeterminado es 'type'
				- typePojoToMixed - booleano - el valor predeterminado es true. Determina si un tipo establecido en un POJO se convierte en una ruta de acceso mixta o un subdocumento
				- useNestedStrict - boolean - por defecto es false
				- validateBeforeSave - bool - el valor predeterminado es true
				-> versionKey: de tipo String|object|Boolean - por defecto es "__v", si se coloca false ya no se hara seguimiento de version del documento. 
				- intercalación: objeto - el valor predeterminado es null (lo que significa no usar ninguna intercalación)
				- selectPopulatedPaths: boolean - por defecto true
				- skipVersioning: objeto - rutas para excluir del control de versiones
				-> timestamps: de tipo Object|Boolean - defaults to . Si es true, Mongoose agrega dos propiedades "createdAt" y "updatedAt", que indican la fecha de creacion del documento y fecha de actualizacion del documento, respectivamente.
				- storeSubdocValidationError: boolean - El valor predeterminado es true. Si es false, Mongoose ajustará los errores de validación en subtrazados de documento anidado único en un único error de validación en la ruta de acceso del subdoc anidado único.
		- model>>> crea la colleccion atrave del schema.
	SINTAXIS:
		- new Schema(<Object|Schema|Array definition>, <Object options?>):schema<T>
		- model(<String collectionName>, <Schema schema>)
*/


// creando un schema y viendo model
	const mongoose = require('mongoose');
	const Schema = mongoose.Schema;

	const tereaSchema = new Schema({
	    titulo: String,
	    descripcion: String,
	    estado: Boolean
	});

	const Tarea = mongoose.model('Tarea', tareaSchema)

	const tarea = new Tarea()

	console.log(tarea)

// creando schema y exportando model
	const mongoose = require('mongoose');
	const Schema = mongoose.Schema;

	const tereaSchema = new Schema({
	    titulo: String,
	    descripcion: String,
	    estado: Boolean
	});

	const Tarea = mongoose.model('Tarea', tareaSchema)

	moduls.exports = Tarea;

// creando schema y exportando model con babel
	import {Schema, model} from 'mongoose'

	const tareaSchema = new Schema ({
	    titulo: String,
	    descripcion: String, 
	    estado: Boolean
	})

	export default model('Tarea', tareaSchema)

// creando schema y exportando model
	const {Schema, model} = require('mongoose')

	const tereaSchema = new Schema({
	    titulo: String,
	    descripcion: String,
	    estado: Boolean
	});

	moduls.exports = model('Tarea', tareaSchema)

//
	import {Schema, model} from 'mongoose'

	const taskSchema = new Schema ({
	    title: {
	        type: String,
	        required: true,
	        trim: true
	    },
	    description: {
	        type: String,
	        trim: true
	    }, 
	    done: {
	        type: Boolean,
	        default: false
	    }
	}, {
	    versionKey: false,
	    timestamps: true
	})

	export default model('Task', taskSchema)