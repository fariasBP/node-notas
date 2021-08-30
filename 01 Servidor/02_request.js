/* REQUEST - REQ
    TEMAS:
        - req.method >>> te devuelve un <string> del metodo con la que se hizo la peticion
        - req.headers >>> te devuelve un <object> de las cabeceras de la peticion

        - res.complete >>> la propiedad se <true> si analizado correctamente el mensaje HTTP caso contrario sera false

*/
const http = require('http').createServer((req, res) => {
    
// Ejemplo 1 - Obtener el metodo solicitado
    console.log(`req.method: ${req.method}`);
// Ejemplo 2 - Obtener el host
    console.log(`req.path: ${req.path}`);
// Ejemplo 3 - Obetener cabeceras de la peticion
    console.log(`req.headers: ${req.headers}`)
        console.log(`\treq.headers.accept: ${req.headers.accept}`)
        console.log(`\treq.headers.host: ${req.headers.host}`)
        console.log(`\treq.headers.coockie: ${req.headers.cookie}`)

    res.end(`req.headers: ${(req.headers)}`);


// ejemplo si un cliente o servidor transmitió completamente un mensaje antes de que se terminara una conexión
    
}).listen(5500,()=>{
    console.log('Corriendo...');
});