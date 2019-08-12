const documentos = require('./documentos');
const PouchDB = require('pouchdb');
PouchDB.plugin(require('pouchdb-find'));

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = 3000;
const db = new PouchDB('torneo2019');

app.get('/resultados/', 
    (req, res, next) => {
        try{
            documentos.consultar(db)
            .then((arrayDoc) => res.json(arrayDoc))
            .catch(err => { res.status(500); res.json({ error: err })});
        }catch(e){
            next(e);
        }
    });

app.get('/resultados/:equipo/', 
    (req, res, next) => {
        try{
            documentos.consultar(db, req.params.equipo)
            .then((arrayDoc) => {res.json(arrayDoc.docs)})
            .catch(err => { res.status(500); res.json({ error: err })});
        }catch(e){
            next(e);
        }
    });

app.post('/resultados/', 
    (req, res, next) => {
        try{
            documentos.crear(db, req.body)
            .then(doc => res.json(doc))
            .catch(err => { res.status(500); res.json({ error: err })});

        }catch(e){
            next(e);
        }
    });

app.delete('/resultados/', 
(req, res, next) => {
    try{
        db.destroy()
        .then((response) => res.json(response))
        .catch(err => { res.status(500); res.json({ error: err });});
    }catch(e){
        next(e);
    }
});

app.delete('/resultados/equipo/:equipo', 
(req, res, next) => {
    try{
        documentos.consultar(db, req.params.equipo)
        .then(doc => {
            let docsABorrar = doc.docs;
            docsABorrar = docsABorrar.map(e => e = { _deleted: true, _id: e._id, _rev: e._rev });
            documentos.eliminar(db, docsABorrar);
        })
        .then(doc => res.json(doc))
        .catch(err => { res.status(500); res.json({ error: err });});
    }catch(e){
        next(e);
    }
});

app.put('/resultado/', 
    (req, res, next) => {
        try{
            db.put(req.body)
            .then(doc => res.json(doc))
            .catch(err => { res.status(500); res.json({ error: err });});
        }catch(e){
            next(e);
        }
    });

app.use((err, req, res, next)=>{
    console.log(`Manejando error: ${err}`);
    res.status(500); 
    res.json({ error: err.message });
});    

app.listen(port, () => {

    console.log(`Escuchando en el puerto ${port}!`);
    console.log(`_Documentos_`);
    db.info()
        .then((info)=> console.log(info))
        .catch((e)=> console.log(e));
});