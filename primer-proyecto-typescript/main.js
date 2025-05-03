"use strict";
const condicion = true;
if (condicion) {
    console.log("La condicion es verdadera");
}
else {
    console.log("Primero hay que ver el curso de tyepscript");
}
/* Objetos */
let programdor1 = {
    nombre: "roman",
    tecnologias: ["react", "sql", "svelte"],
    tomaMate: false
};
programdor1 = {
    nombre: "richard",
    tecnologias: ["react", "sql", "svelte"],
    tomaMate: false
};
let programador2 = {
    name: "Jorge",
    techStack: ["go", "angular", "typescritp"],
    drinkMate: true
};
function sendCv(programmer) {
    console.log(`Motrar nombre del cv ${programmer.name}`);
}
sendCv(programador2);
/* POO */
// Las propiedades pueden inicializarce o poner signo de interogación al final de su nombre.
class Pelicula {
    constructor(title, streaming, adultContent, category, minuteDuration) {
        this.title = "La vida es bella";
        this.title = title;
        this.streaming = streaming;
        this.adultContent = adultContent;
        this.category = category;
        this.minuteDuration = minuteDuration;
    }
    showMovieInStreaming() {
        console.log(`la peicula se transmite en ${this.streaming}`);
    }
    showMovieInCinema() {
        console.log(`la peicula se muestra en cines en ${this.title}`);
    }
}
const pelicula = new Pelicula("La cosa", "Amazon", true, ["Terror", "mostruo"], 120);
pelicula.showMovieInStreaming(); // resultado : la peicula se transmite en undefined
pelicula.showMovieInCinema(); // resultado : la peicula se muestra en cines en La vida es bella
console.log(Pelicula);
