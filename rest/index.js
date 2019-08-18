const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
//x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

const port = 3000;

app.get('/', (req, res, next)=>{

    debugger;
    console.log(req.headers);
    res.setHeader('asd', 'asdas');
    res.json({
        saludo: 'Hola como andas?',
        queryParams: req.query
    });
});

app.get('/:id', (req, res, next)=>{

    res.json({
        saludo: 'Hola como andas?',
        params: req.params.id,
        queryParams: req.query
    });
});

app.post('/', (req, res, next)=>{

    res.json(req.body);
});

const server = app.listen(port, ()=>{
    console.log(`Escuchando en el puerto ${server.address().port}`);
});