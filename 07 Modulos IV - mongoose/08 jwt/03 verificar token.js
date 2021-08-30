/* VERIFICAR TOKEN - verify()
	TEMAS:
		- verify(token, secretOrPublicKey, options?, callback?)

*/



// forma sincrona
	try {
     const token = req.headers["x-access-token"]

     if (!token) return res.status(403).json({error: true, errmsg: "no token provided"})
      
     const decoded = jwt.verify(token, config.SECRET)
     req.userId = decoded.id
     const user = await UserModel.findById(req.userId)

     if (!user) return res.status(404).json({error: true, errmsg: "no user found"})

     next()
  } catch (error) {
     return res.status(401).json({error: true, errmsg: "error token"})
  }

// forma asincrona
