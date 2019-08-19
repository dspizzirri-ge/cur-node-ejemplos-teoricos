const documentos = require('../documentos');
const { checkCookie } = require('../middlewares/checkuser');
const express = require('express');
const router = express.Router();
const PouchDB = require('pouchdb');
PouchDB.plugin(require('pouchdb-find'));
const db = new PouchDB('torneo2019');

db.info()
    .then((info) => console.log(info))
    .catch((e) => console.log(e));

router.get('/',
    (req, res, next) => {
        try {
            documentos.consultar(db)
                .then((arrayDoc) => res.json(arrayDoc))
                .catch(err => { res.status(500); res.json({ error: err }) });
        } catch (e) {
            next(e);
        }
    });

router.get('/equipo/:equipo/',
    (req, res, next) => {
        try {
            documentos.consultar(db, req.params.equipo)
                .then((arrayDoc) => { res.json(arrayDoc.docs) })
                .catch(err => { res.status(500); res.json({ error: err }) });
        } catch (e) {
            next(e);
        }
    });

router.post('/',
    checkCookie,
    (req, res, next) => {
        try {
            documentos.crear(db, req.body)
                .then(doc => res.json(doc))
                .catch(err => { res.status(500); res.json({ error: err }) });

        } catch (e) {
            next(e);
        }
    });

router.delete('/',
    checkCookie,
    (req, res, next) => {
        try {
            db.destroy()
                .then((response) => res.json(response))
                .catch(err => { res.status(500); res.json({ error: err }); });
        } catch (e) {
            next(e);
        }
    });

router.delete('/equipo/:equipo',
    checkCookie,
    (req, res, next) => {
        try {
            documentos.consultar(db, req.params.equipo)
                .then(doc => {
                    let docsABorrar = doc.docs;
                    docsABorrar = docsABorrar.map(e => e = { _deleted: true, _id: e._id, _rev: e._rev });
                    documentos.eliminar(db, docsABorrar);
                })
                .then(doc => res.json(doc))
                .catch(err => { res.status(500); res.json({ error: err }); });
        } catch (e) {
            next(e);
        }
    });

router.put('/',
    checkCookie,
    (req, res, next) => {
        try {
            db.put(req.body)
                .then(doc => res.json(doc))
                .catch(err => { res.status(500); res.json({ error: err }); });
        } catch (e) {
            next(e);
        }
    });

module.exports = router;    