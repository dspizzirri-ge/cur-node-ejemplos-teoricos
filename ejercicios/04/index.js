const evaluar = function(valorAEvaluar){

    const numbers = {
        esIgualA(valorEsperado){
            return valorAEvaluar == valorEsperado;
        },
        esUnNumero(){
            return !isNaN(valorAEvaluar)
        } 
    }

    const notnumbers = {
        esIgualA(valorEsperado){
            return !numbers.esIgualA(valorEsperado);
        },
        esUnNumero(){
            return !numbers.esUnNumero(valorEsperado);
        },
    }
    
    const objecto = {
        esNulo(){
            return valorAEvaluar == null;
        }
    }

    const cadena = {
        esVacia(){
            if(typeof valorAEvaluar == 'string')
                return valorAEvaluar.length == 0;
            throw new Error(`${valorAEvaluar} no es un numero`)
        }
    }

    return {
        esIgualA: numbers.esIgualA,
        esUnNumero: numbers.esUnNumero,
        not: notnumbers,
        esNulo: objecto.esNulo,
        esVacia: cadena.esVacia
    }
}

const it = (texto, callback)=> {
    const resultado = callback()? "+": "-";
    console.log(`${resultado}| ${texto}`);
}

it("4 no es 5", ()=>evaluar(4).esIgualA(5));
it("A4 es numero", ()=>evaluar('A4').esUnNumero());
it("4 no es 4", ()=>evaluar(4).not.esIgualA(4));
it("null es nulo", ()=>evaluar(null).esNulo());
it("\" \" es una cadena vacia", ()=>evaluar("").esVacia());
it("AA es una cadena vacia", ()=>evaluar("AA").esVacia());
it("4 es una cadena vacia", ()=>evaluar("4").esVacia());