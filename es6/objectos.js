let ram = "512MB";
let procesador = "i9";
let disco = "SSD500GB"
let so = "Ubuntu 18.04";

let computadora = {
    precio: 3000,
    software: { so },
    hardware: { ram, procesador, disco }
}

var laptop1 = { ...computadora } // shallow clone
var laptop2 = JSON.parse(JSON.stringify(computadora)) // deep clone

/*
laptop1.precio = 4000;
console.log("computadora.precio: ", computadora.precio);
console.log("laptop1.precio: ", laptop1.precio);

laptop1.software.so = "Mint 18";
console.log("computadora.software.so: ", computadora.software.so);
console.log("laptop1.software.so: ", laptop1.software.so);
*/

laptop2.precio = 4000;
console.log("computadora.precio: ", computadora.precio);
console.log("laptop2.precio: ", laptop2.precio);

laptop2.software.so = "Mint 18";
console.log("computadora.software.so: ", computadora.software.so);
console.log("laptop2.software.so: ", laptop2.software.so);
