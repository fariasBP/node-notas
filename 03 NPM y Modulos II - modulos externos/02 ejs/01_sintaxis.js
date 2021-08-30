/*
	TEMAS:
	= tags
		= <% Etiqueta 'Scriptlet', para control-flujo, sin salida
		= <%_ Etiqueta Scriptlet 'Whitespace Slurping', elimina todos los espacios en blanco antes que él
		= <%= Genera el valor en la plantilla (HTML con escape)
		= <%- Emite el valor sin sercapado en la plantilla
		= <%# Etiqueta de comentario, sin ejecución, sin salida
		= <%% Produce un literal '<%'
		= %> Etiqueta final simple
		= -%> Etiqueta trim-mode ('newline slurp'), recortes después de la nueva línea
		= _%> Etiqueta final 'Whitespace Slurping', elimina todos los espacios en blanco después de ella
*/

// EJEMPLO 1 - <% sirve para la parte logica
	<ul>
	  <% users.forEach(function(user){ %>
	    hola
	  <% }); %>
	</ul>

// EJEMPLO 2 - <%= sirve para imprimir
	<h1> <%= title %> </h1>