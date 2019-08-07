const promesa = new Promise((resolve, reject)=>{
    const numero = Math.random().toFixed(2)*100;
    const resto = numero%2
    const esPar = resto == 0;
    setTimeout(()=>{
        if(esPar)
            return resolve(true);
        return reject(false);
    }, 2000);
});

promesa
    .then((data)=>console.log(`Promesa completada: ${data}`))
    .catch((data)=>console.log(`Promesa rechazada: ${data}`));

