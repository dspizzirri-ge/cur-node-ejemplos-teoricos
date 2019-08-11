const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const puerto = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res, next) => {
    res.json({});
});

app.get('/materia/:materia/:curso', (req, res, next) => {

    const materia = req.params.materia;
    const curso = req.params.curso;
    const horasSemanales = 8;
    const profesorTitular = "Profesor1";
    const alumnos = [
        { nombre: "alumno1", apellido: "apellido1", dni: "22.222.222" },
        { nombre: "alumno2", apellido: "apellido2", dni: "22.222.226" },
        { nombre: "alumno3", apellido: "apellido3", dni: "22.222.225" },
        { nombre: "alumno4", apellido: "apellido4", dni: "22.222.224" },
        { nombre: "alumno5", apellido: "apellido5", dni: "22.222.223" }
    ];

    res.json({ materia, curso, horasSemanales, profesorTitular, alumnos });
});

app.post('/materia/:materia/:curso', (req, res, next) => {

    const materia = req.params.materia;
    const curso = req.params.curso;
    const horasSemanales = 8;
    const profesorTitular = "Profesor1";
    const alumnos = [
        { nombre: "alumno1", apellido: "apellido1", dni: "22.222.222" },
        { nombre: "alumno2", apellido: "apellido2", dni: "22.222.226" },
        { nombre: "alumno3", apellido: "apellido3", dni: "22.222.225" },
        { nombre: "alumno4", apellido: "apellido4", dni: "22.222.224" },
        { nombre: "alumno5", apellido: "apellido5", dni: "22.222.223" }
    ];

    res.json({ materia, curso, horasSemanales, profesorTitular, alumnos });
});

app.listen(puerto, () => {
    console.log(`Escuchando en ${puerto}`);
});

module.exports = { app };