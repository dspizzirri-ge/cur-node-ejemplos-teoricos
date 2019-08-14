const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let numeros = [];

rl.on('line', (numero)=>{
    if(numero && !isNaN(numero))
        numeros.push(numero);
    else{
        rl.close();
        console.log(numeros);
    }         
});

// rl.question('Numeros', (numeros) => {
//   console.log(`${numeros}`);
//   rl.close();
// });