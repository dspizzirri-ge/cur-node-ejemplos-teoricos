const checkParameters = require('./checks').checkParameters;
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(checkParameters);
app.use('/:id', (req, res, next)=>{
    console.log(`Middleware para las rutas desde /:id ${req.method}`);
    next();
});

app.post('/', (req, res, next)=>{
    try{
        console.log("Peticion POST")
        res.json({});
    } catch (err) {
        next(err)
    }
});

app.post('/:id', (req, res, next)=>{
    try{
        console.log("Peticion POST /:id")
        res.json({});
    } catch (err) {
        next(err)
    }
});


app.get('/:id', (req, res, next)=>{
    try{
        console.log("Peticion GET /:id")
        res.json({});
    } catch (err) {
        next(err)
    }
});

app.get('/', (req, res, next)=>{
    try{
        console.log("Peticion GET")
        res.json({});
    } catch (err) {
        next(err)
    }
});

app.listen(port, () => {
    console.log(`Escuchando en el puerto ${port}!`)
});