const promesa = (data)=> new Promise((resolve, reject)=>{

    let cantidadCaracteres = 0;
    data.forEach(element => {
        cantidadCaracteres += element.length;
    });

    console.log(cantidadCaracteres);
    if(cantidadCaracteres%2 == 0)
       return resolve(true);
    return reject(false);
});

const array = ["Damiian", "Tatiana", "Dora", "Sandra"];
promesa(array).then((data)=>console.log(data)).catch((data)=>console.log(data));