let express = require('express');
let app = express();
app.set('view engine', 'jade');

app.get('/', (req, res) => {
    res.render('index', {title:'Hola Jade!!!'});
})

app.listen(8080);