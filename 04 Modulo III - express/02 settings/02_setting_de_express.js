/* SET reservados
	En el anterior creamos variables de configuracion propios, pero Express ya tiene
	nombres de varaibles de configuracionre reservados para configurar diferentes distintas
	funcionalidades.
*/

const express = require('express');
const app = express();



app.set('port', process.env.PORT || 3000); 	// estableciendo el puerto 3000 solo si se 
											// encuentra libre, si no esteablece otro puerto 
											// que si se encuentra libre
app.set('views', path.join(__dirname, 'views')) // estableciendo la ruta donde se encontraran las vistas
app.set('view engine', 'ejs'); // estableciendo motor de vistas										



app.get('/', (req, res) => {
	res.send('fin de la respuesta');
})
.listen(5500);