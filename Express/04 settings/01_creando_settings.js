/* SET
	Establece una variable de configuracion
*/

// estableciendo una variable de configuracion
const express = require('express');
const app = express();

app.set('nombre', 'Franco');

app.get('/', (req, res) => {
	res.send('mi nombre es:' + app.get('nombre'));
})
.listen(5500);