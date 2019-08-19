const resultadosRouter = require('./rutas/resultados');
const sessionRouter = require('./rutas/session');
const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({ secret: 'mercadolibre', cookie: { maxAge: 30000 } }))

app.use('/session', sessionRouter);
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