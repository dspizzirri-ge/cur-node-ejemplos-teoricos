/**
 * 2.Dado un array de datos sobre saldo en cuenta, saldo invertido y monto ganado,
 * por una persona X, en un banco X,
 * realizar una funcion que:
 * 
 * Calcular el total de saldo invertido y saldo ganado.
 * Modificar el saldo de los objetos, poniendolos en dolares, 
 * ---- si suponemos que los valores estan en pesos y el dolar vale $65  
 * 
 */

const inversiones = require("./datosInversiones.json");

const sumarCampoNumerico = (array, campo)=>array.reduce((anterior, actual, indice)=> anterior + actual[campo], 0 );
const totalSaldo = sumarCampoNumerico(inversiones, "dinero");
const totalInvertido = sumarCampoNumerico(inversiones, "inversion");
const totalGanado = sumarCampoNumerico(inversiones, "ganancia");

const convertirMoneda = 
    (array, precioDolar)=>array.map(e => e = { 
            ...e,
            dinero: e.dinero/precioDolar,
            inversion: e.inversion/precioDolar,
            ganancia: e.ganancia/precioDolar
        });


console.log(`Total saldo: $${totalSaldo}`);
console.log(`Total saldo: $${totalInvertido}`);
console.log(`Total saldo: $${totalGanado}`);
console.log(convertirMoneda(inversiones, 65));

module.exports = {
    sumarCampoNumerico
}