const documentos = require('../BBDD/funciones');
const express = require('express');
const router = express.Router();

router.get('/',
    (req, res, next) => {

        res.render('home',
            {
                title: 'Resultados',
                parrafo1: 'Fecha 1',
                resultados: documentos.get()
            });
    });

router.get('/tabla',
    (req, res, next) => {
        res.render('tabla',
            {
                title: 'Clasificaciones',
                parrafo1: 'Fecha 1',
                posiciones: documentos.getTable()
            });
    });


router.get('/equipo/:equipo',
    (req, res, next) => {
        return documentos.get(res.params.equipo);
    });

router.post('/',
    (req, res, next) => {
        documentos.push(res.body);
    });

router.delete('/',
    (req, res, next) => {
        documentos.delete();
    });

router.delete('/equipo/:equipo',
    (req, res, next) => {
        documentos.deletee(res.params.equipo);
    });

router.put('/',
    (req, res, next) => {
        documentos.update(res.body);
    });

module.exports = router;