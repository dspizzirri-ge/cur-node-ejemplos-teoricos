console.log("Primer mensaje");

setTimeout(()=>console.log("Segundo mensaje"), 3000);
setTimeout(()=>console.log("Tercer mensaje"), 0);

console.log("Cuarto mensaje");


for (let i = 0; i < 10; i++) {

    console.log(`Vuelta: ${i}`);
    if (i === 5)
        setTimeout(() => console.log(`TimeOut`), 3000);
}