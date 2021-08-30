/* COMPARAR (compare)
	Se comparar un 
	TEMAS:
		- compare(s, hash, callback?, progressCallback?) >>> compara asincronicamente
																													s con el hash y devuelve
																													true si son iguales y false
																													si no lo son.
			- s >>> de tipo string, es el dato que se comparara.
			- hash >>> el dato encriptado que se compara con s
			- callback(err, bool) >>> callback que devuelve un booleano, true si el dato 
																y el hash son iguales, y false si no son iguales. Si
																existe error devuleve err.
			- progressCallback(n) >>> Devolución de llamada convocada sucesivamente con el
																porcentaje de rondas completadas (0,0 - 1,0), máximamente
																una vez por ms.MAX_EXECUTION_TIME = 100
			-> promess(bool) >>> devuelve promess con un bools como parametro, true si el dato
														y el hash son iguales, y false si no es asi.
			-> error >>> devuelve un error si se cometio.
*/

bcrypt.compare(pwd, pwdCrypt)
	.then(bool => {
		...
	})
	.catch(err => {
		...
	})

// con async
userSchema.statics.compararPwd = async (pwd, pwdCrypt) => {
    return await bcrypt.compare(pwd, pwdCrypt)
}

const pwdValid = await UserModel.compararPwd(password, user.password)