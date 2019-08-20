const BBDD = require('./resultados.json');

function get(equipo) {
    return BBDD;
}

function post(arrayResult) {
    return BBDD.concat(arrayResult);
}

function deletee(equipo) {
    return null;
}

function update(arrayResult) {
    return BBDD;
}

function getTable(arrayResult) {
    return [
        { pos: 1, equipo: 'rojo', puntos: 100 },
        { pos: 2, equipo: 'verde', puntos: 80 },
        { pos: 3, equipo: 'azul', puntos: 60 },
        { pos: 4, equipo: 'amarillo', puntos: 50 },
        { pos: 5, equipo: 'naranja', puntos: 20 },
    ];
}

module.exports = {
    get, post, deletee, update, getTable
}