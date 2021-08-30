/* SIGN() - Crear Tokens
	creando token con el metodo sign()
	TEMAS:
		- sign(payload, secret, options?, callback?)
			- payload >>> de tipo object, cadena que identifica al usuario (debe
										ser unica), puede ser su id , nombre, etc.
			- secretOrPrivateKey >>> de tipo string, cadena que debe ser secreto
																que viene siendo una barrera mas de seguridad
																ya que con el podemos crear y desencriptar tokens.
			- options? >>> de tipo object, son las opciones para crear el token
				- algorithm >>> algoritmo que usara para encriptar y desencriptar el token.
												por defecto es HS256. (revisar: https://jwt.io/ en libreries)
				- expiresIn >>> de tipo String|int, indica el tiempo de vida del token.
												Expresado en segundos (si es int), o en una cadena que
												describe un intervalo de tiempo (si es String).
				- notBefores >>>
				- audience
				- issuer
				- jwtid
				- subject
				- noTimestamp
				- header
				- keyid
				- mutatePayload
			- callback(err, token)? >>> devuelve error si se cometio, sino devuleve el token
			-> token >>> devuelve el token
	SINTAXIS:
		- [jwt].sign(<Object payload>, <String secretOrPrivateKey>, <Object Options?>, <Function Callback(err,token)?>):Promess(token,err)
*/

// forma sincrona
	const token = jwt.sign({id: user._id}, config.SECRET, {
  	expiresIn: 24 * 60 * 60 // 1 dia
  })

// forma asincrona
  jwt.sign({ foo: 'bar' }, config.SECRET, { algorithm: 'RS256' }, function(err, token) {
	  console.log(token);
	});