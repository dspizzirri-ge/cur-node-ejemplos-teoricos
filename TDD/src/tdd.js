const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const puerto = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res, next)=>{
    res.json({});
});

app.listen(puerto, () => {
    console.log(`Escuchando en ${puerto}`);
});

module.exports = { app };