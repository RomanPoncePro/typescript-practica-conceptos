"use strict";
/* Encapsulameiento, getters y setters */
class Sorte {
    constructor(name) {
        this.name = name;
    }
    setNumber(number) {
        this.number = number;
    }
    getNumber() {
        return this.number;
    }
    sort() {
        return `Para ${this.name} el ticket es ${this.number}`;
    }
}
// Le pasamos el generico
let sorteo = new Sorte("Roman");
sorteo.setNumber(7);
console.log(sorteo.sort());
console.log(sorteo.number);
