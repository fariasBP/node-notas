/* ACTUALIZAR CON ID - findByIdAndUpdate()
	Buscar un documento por id y actualizarlo
	TEMAS:
		- findByIdAndUpdate(id, update, options?, callback?)
			- id >>> de tipo Object|int|String, valor que indica el _id del documento a actualizar
			- update >>> de tipo Object, valores que ser actualizaran del documento.
			- options? >>> opciones de la consulta.
				- new=false >>> de tipo Boolean, si es false devolvera el documento antes de la acutalizaracion, si es true lo contrario a lo ya mencionado.
*/

	const updatedProduct = await ProductsModel.findByIdAndUpdate(req.params.productId, req.body, {new: true})
  res.status(200).json(updatedProduct)