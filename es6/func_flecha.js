//ES5
function esperarES5(segundos) {
    setTimeout(function () {
        console.log("Espere ", segundos);
    }, segundos * 1000);
}

esperarES5(2);

//ES6
function esperarES6(segundos) {
    setTimeout(() => console.log("Espere ", segundos), segundos * 1000);
}

const esperarES6_2 = (segundos) => setTimeout(() => console.log("Espere ", segundos), segundos * 1000);

esperarES6(2);
esperarES6_2(2);