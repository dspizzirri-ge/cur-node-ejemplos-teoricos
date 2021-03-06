const resultadosRouter = require('./rutas/resultados');
//const sessionRouter = require('./rutas/session');
const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const morgan = require('morgan');
const app = express();
const port = process.env.PORT || 3000;

app.set("views", "./vistas");
app.set('view engine', 'pug');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({ name: 'MELI', secret: 'mercadolibre', cookie: { maxAge: 30000 } }))
app.use(morgan('tiny'));


//app.use('/session', sessionRouter);
app.use('/resultados', resultadosRouter);

app.use((err, req, res, next) => {
    console.log(`Manejando error: ${err}`);
    res.status(500);
    res.json({ error: err.message });
});

app.listen(port, () => {

    console.log(`Escuchando en el puerto ${port}!`);
    console.log(`_Documentos_`);
});

module.exports = app;