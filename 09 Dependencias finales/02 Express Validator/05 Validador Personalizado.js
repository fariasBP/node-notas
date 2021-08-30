/* VALIDADOR PERSONALIZADO
	
	TEMAS:
		- custom(callback(field, {options}?)) >>> crea un validador personalizado

*/
// Ejemplo
const { body } = require('express-validator');

const validateCustom = value => {
	return User.findUserByEmail(value).then(user => {
	    if (user)
	    	return Promise.reject('E-mail already in use');
	    
    });
}

app.post('/user', body('email').custom(validateCustom), (req, res) => {
	// Handle the request	
});

// Ejemplo - verificar "password" y "password-confirmations"
const { body } = require('express-validator');

const validateCustom = (value, { req }) => {
	if (value !== req.body.password) {
		throw new Error('Password confirmation does not match password');
	}

    // Indicates the success of this synchronous custom validator
	return true;
}

app.post('/user', body('passwordConfirmation').custom(validateCustom), (req, res) => {
	// Handle the request
});