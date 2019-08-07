const documentos = require('./documentos');
const PouchDB = require('pouchdb');
PouchDB.plugin(require('pouchdb-find'));

const express = require('express');
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = 3000;
const db = new PouchDB('torneo2019');

app.get('/resultados/', 
    (req, res) => {
        try{
            documentos.consultar(db)
            .then((arrayDoc) => res.json(arrayDoc))
            .catch(err => { res.status(500); res.json({ error: err })});
        }catch(e){
            res.status(500); 
            res.json({ error: e.message })
        }
    });

app.get('/resultados/:equipo/', 
    (req, res) => {
        try{
            documentos.consultar(db, req.params.equipo)
            .then((arrayDoc) => {res.json(arrayDoc.docs)})
            .catch(err => { res.status(500); res.json({ error: err })});
        }catch(e){
            res.status(500); 
            res.json({ error: e.message })
        }
    });

app.post('/resultados/', 
    (req, res) => {
        try{
            documentos.crear(db, req.body)
            .then(doc => res.json(doc))
            .catch(err => { res.status(500); res.json({ error: err })});

        }catch(e){
            res.status(500); 
            res.json({ error: e.message })
        }
    });

app.delete('/resultados/', 
(req, res) => {
    try{
        db.destroy()
        .then((response) => res.json(response))
        .catch(err => { res.status(500); res.json({ error: err });});
    }catch(e){
        res.status(500); 
        res.json({ error: e.message })
    }
});

app.delete('/resultados/:equipo/local', 
(req, res) => {
    try{
        db.find({ selector: { local: { eq: req.params.equipo } } })
        .then(doc => db.remove(doc))
        .then(doc => res.json(doc))
        .catch(err => { res.status(500); res.json({ error: err });});
    }catch(e){
        res.status(500); 
        res.json({ error: e.message })
    }
});

app.delete('/resultados/:id/', 
    (req, res) => {
        try{    
            db.get(req.params.id)
            .then(doc => db.remove(doc))
            .then(doc => res.json(doc))
            .catch(err => { res.status(500); res.json({ error: err });});
        }catch(e){
            res.status(500); 
            res.json({ error: e.message })
        }
    });

app.put('/resultado/', 
    (req, res) => {
        try{
            db.put(req.body)
            .then(doc => res.json(doc))
            .catch(err => { res.status(500); res.json({ error: err });});
        }catch(e){
            res.status(500); 
            res.json({ error: e.message })
        }
    });

app.listen(port, () => console.log(`Escuchando en el puerto ${port}!`))