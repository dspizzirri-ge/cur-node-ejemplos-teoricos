/**
 * 1.Dado un array de datos sobre valores medios mensuales de temperatura en una ciudad X, 
 * realizar una funcion que:

 * Filtrar las ciudades con temperaturas superiores a 15;
 * Calcular el promedio de las temperaturas

 */

const temperaturas = require("./datosTemperaturas.json");

const filtrarCiudadesPorTemperatura = (array, limite)=> array.filter((e)=>e.temperatura > limite);
const ciudadesTemperaturaSuperiorA15 = filtrarCiudadesPorTemperatura(temperaturas, 15);

const promedioTemperaturas = (array)=> temperaturas.reduce((anterior, actual, indice)=> anterior + actual.temperatura, 0) / temperaturas.length;
const temperaturaPromedio = promedioTemperaturas(temperaturas);

console.log(`Temperaturas superiores a 15`);
console.log(ciudadesTemperaturaSuperiorA15);
console.log(`Promedio de temperaturas: ${temperaturaPromedio}`);

/** 
 * Otras fomas de leer un archivo JSON
 * 
 * 1)
 * const fs = require('fs')
 * let jsonData = JSON.parse(fs.readFileSync('file.json', 'utf-8'))
 * 
 * 2)
 * const fs = require('fs')
 * let jsonData = {}
 * fs.readFile('file.json', 'utf-8', (err, data) => {
 *      if (err) throw err
 *      jsonData = JSON.parse(data)
 * })
*/
