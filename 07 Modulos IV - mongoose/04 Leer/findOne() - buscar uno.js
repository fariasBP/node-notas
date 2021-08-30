/* FINDONE - BUSCAR UN ELEMENTO
	TEMAS:
		- find(filter?, projection?, options?, callback?) >>> busca un documento de la DB.
 			- filter >>> de tipo Object, filtra un documento
 									 que cumple con las propiedades que se especifiquen
 			-> Query >>> si no hubo errores retorna un query (objeto de consulta)
 			-> Error >>> si hay errores retorna un error
*/

// con async
	const user = await UserModel.findOne({username})