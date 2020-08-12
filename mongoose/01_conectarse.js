// Ejemplo de conectarse
	const mongoose = require('mongoose');

	mongoose.connect('mongodb://localhost/crud-mongo', {useNewUrlParser: true, useUnifiedTopology: true })
	    .then(db => console.log('db bonnect'))
	    .catch(err => console.log(err))