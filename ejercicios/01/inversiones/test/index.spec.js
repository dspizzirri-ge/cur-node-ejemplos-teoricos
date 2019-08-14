const chai = require("chai");
const index = require("../index")

let expect = chai.expect;

describe("Operaciones con los montos", ()=>{
    it("La suma de los saldos debe ser igual a 2000", ()=>{

        const datos = [
            {"nombre":"Donovan","dinero":200,"inversion":4400.1,"ganancia":4196.51},
            {"nombre":"Rae","dinero":200,"inversion":7405.53,"ganancia":7323.32},
            {"nombre":"Baird","dinero":600,"inversion":8770.56,"ganancia":6936.28},
            {"nombre":"Tania","dinero":400,"inversion":8782.06,"ganancia":1339.1},
            {"nombre":"Nelson","dinero":600,"inversion":6193.94,"ganancia":2343.92}
        ]

        const totalSaldoEsperado = 2000;
        const totolSaldoCalculado = index.sumarCampoNumerico(datos , "dinero");
        
        expect(totolSaldoCalculado).equals(totalSaldoEsperado);
    });
});