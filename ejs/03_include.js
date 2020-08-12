/* INCLUDE
	TEMAS:
		- inlude(template, data) >>> incluye el contenido de un ejs.
			- template >>> <string> que indica la ubicacion del arhivo ejs que se desea incluir.
			- data >>> <object> que indica los datos que se pasaran y remplazaran en el ejs que se incluira.
	SINTAXIS:
		- include(<string template>, <object data?>):<string>
	NOTA:
		- Es probable que desee utilizar la etiqueta de salida sin procesar () con la inclusión para evitar el doble escape de la salida HTML.<%-
*/

// EJEMPLO 1
	<%- include('header'); -%>
	<h1>
		Title
	</h1>
	<p>
		My page
	</p>
	<%- include('footer'); -%>

// EJEMPLO 2
	<ul>
		<% users.forEach(function(user){ %>
			<%- include('user/show', {user: user}); %>
		<% }); %>
	</ul>