/* ENCRIPTAR (crear salt y hash)
	para encriptar se debe primero crear una salt y apartir de esta el hash (que este
	ultimo vendria siendo la cadena encriptada)
		TEMAS:
			- genSalt(rounds?) >>> genera asincronicamente una salt retorna una promesa
				- rounds >>> indica el numero de rondas a utilizar, por defecto es 10
										(mientras mas rondas mas dificil de decifrar, por lo tanto
										al momento de decifrar para comparar tardara mucho mas)
				-> promess(salt) >>> sno hay error retorna una promesa con la salt como parametro.
				-> throw(err) >>> si hay error retorna un error

			- genSaltSync(rounds?) >>> genera sincronicamente una salt retorna una promesa
				- rounds >>> indica el numero de rondas a utilizar, por defecto es 10
										(mientras mas rondas mas dificil de decifrar, por lo tanto
										al momento de decifrar para comparar tardara mucho mas)
				-> string >>> si no hay error retorna una la salt.
				-> error >>> si hay error retorna un error

			- hash(s, salt, callback?, progressCallback?) >>> genera asincronicamente una hash
																												para la cadena s. Es decir encripta
																												asincronicamente la cadena.
				-s >>> de tipo string, es la cadena que se va ha encriptar.
				- salt >>> la salt que usara para encriptar
				- callback(err, hash) >>> callback con el err y hash en el parametro.
				- progressCallback(n) >>> Devolución de llamada convocada sucesivamente con
																	el porcentaje de rondas completadas (0,0 - 1,0),
																	máximamente una vez por ms.MAX_EXECUTION_TIME = 100
				-> promess(hash) >>> si no hay error retorna una promesa con el hash como parametro.
				-> error >>> si hay error se devuelve el error
			- hashSync(s, salt) >>> genera sincronicamente una hash para la cadena s. Es decir
															encripta sincronicamente la cadena.
				-s >>> de tipo string, es la cadena que se va ha encriptar.
				- salt >>> la salt que usara para encriptar
				-> string >>> si no hay error retorna el hash.
				-> error >>> si hay error se devuelve el error
*/

// EJEMPLOS CON GENSALT()
	// con callback
		bcrypt.genSalt(10, function(err, salt) {
		  bcrypt.hash("B4c0/\/", salt, function(err, hash) {
		      // ...
		  });
		});
	// con async-await
		const salt = await bcrypt.genSalt(10)
	  return await bcrypt.hash(pwd, salt)

	// con pomess y funciones
		return bcrypt.genSalt(10)
		  .then(salt => bcrypt.hash(pwd, salt)) // retorna el hash (password cifrado)
		  .catch(err => {
		    console.error(err)
		    return {err, msg:err.toString()}
		  })

	// con promesas
		bcrypt.genSalt(10)
			.then(salt => bcrypt.hash(pwd, salt))
			.then(hash => {
				// ...
			})
			.catch(err => {
			  console.error(err)
			  return {err, msg:err.toString()}
			})