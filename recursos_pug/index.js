const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = 3000;
app.set("views", "./vistas");
app.set('view engine', 'pug');

app.get('/', (req, res, next)=>{

    res.render('index', 
        { 
            title: 'Coches', 
            parrafo1: 'Elige tu proximo auto',
            coches: ["Coche1", "Coche2", "Coche3", "Coche4" ]
        });
});

app.post('/', (req, res, next)=>{

    res.json(req.body);
});


const server = app.listen(port, ()=>{
    console.log(`Escuchando en el puerto ${server.address().port}`);
});