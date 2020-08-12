/*
	El esquema (scheme) son valores que se daran a datos para enviar a la bd
*/

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tereaSchema = new Schema({
    titulo: String,
    descripcion: String,
    status: {
        type: Boolean,
        default: false
    }
});

const Tarea = mongoose.model('tarea', tareaSchema)

const tarea = new Tarea()

console.log(tarea)