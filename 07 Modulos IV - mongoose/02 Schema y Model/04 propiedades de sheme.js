/*

	- type >>> establece el tipo dato del campo
	- required >>> de tipo Boolean, establece si el campo es requerido o no, de ser requerido sera obligario llenar caso contrario no se llenara a la DB.
	- default >>> de tipo Any, establece datos por defecto en caso de que este no llene (este vacio).
	- unique >>> de tipo Boolean, establece que los datos sean unicos en la coleccion.
	- trim >>> de tipo Boolean, de ser true se eliminaran los espacios del principio y final del dato (si es que tiene).
SINTAXIS:
	- [campo]{
		type: [String, Int, Boolean ...],
		required?: [Boolean],
		default?: [any],
		unique?: [Boolean],
		trim?: [Boolean],
	}
*/