const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(`${__dirname}/public`));
app.use(morgan('tiny'));

app.get('/:carpeta/:tipo/:archivo', (req, res, next) => {
    res.sendFile(`${__dirname}/${req.params.carpeta}/${req.params.tipo}/${req.params.archivo}`);
});

app.post('/guardardatos', (req, res, next) => {
    res.sendFile(`${__dirname}/public/guardado.html`);
});

app.listen(3000, () => console.log(`__dirname: ${__dirname}`));