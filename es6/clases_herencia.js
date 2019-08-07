class Escritorio {
    constructor(color) {
        this.color = color;
    }
}

class Habitacion {

    constructor(largo, ancho, color) {
        this.largo = largo;
        this.ancho = ancho;
        this.color = color;
    }
}

class Oficina extends Habitacion {

    constructor(largo, ancho, color, escritorios) {
        super(largo, ancho, color);
        this.escritorios = escritorios;
    }
}

const habitacion = new Habitacion(4, 5, "blanco");
console.log(habitacion);
const escritorios = Array.of(new Escritorio("marron"), new Escritorio("marron"), new Escritorio("gris"))
const oficina = new Oficina(3, 6, "blanco", escritorios);
console.log(oficina);