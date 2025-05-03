const condicion: boolean = true;

if(condicion){
  console.log("La condicion es verdadera")
} else {
  console.log("Primero hay que ver el curso de tyepscript")
}

/* Objetos */ 

let programdor1 = {
  nombre: "roman",
  tecnologias: ["react","sql","svelte"],
  tomaMate: false
}

programdor1 = {
 nombre:"richard",
 tecnologias: ["react","sql","svelte"],
 tomaMate: false 
}

// Mal porque no cumple la forma

// programdor1 = {
//   nombre:"richard",
//   tecnologias: ["react","sql","svelte"],
//   tomaMate: "false" 
//  }

 /* Type */

// Correción laos types siempre van con mayusculas.

 type dev = {
  name:string,
  techStack:string[],
  drinkMate: boolean,
  isMarried?:boolean
 }

 let programador2: dev = {
  name:"Jorge",
  techStack:["go","angular","typescritp"],
  drinkMate: true
 }

 /* interface */

 interface Programmer{
  name:string,
  techStack:string[],
  drinkMate: boolean,
  isMarried?:boolean
 }

 function sendCv(programmer: Programmer){
  console.log(`Motrar nombre del cv ${programmer.name}`)
 }

 sendCv(programador2)

 /* POO */

 // Las propiedades pueden inicializarce o poner signo de interogación al final de su nombre.

 class Pelicula {
  title: string = "La vida es bella";
  streaming?: string;
  adultContent?:boolean;
  category?:string[];
  minuteDuration?: number;

  constructor(title: string,streaming: string,adultContent:boolean,category:string[],minuteDuration: number){
    this.title = title
    this.streaming = streaming
    this.adultContent = adultContent
    this.category = category
    this.minuteDuration = minuteDuration

  }

  showMovieInStreaming(){
    console.log(`la peicula se transmite en ${this.streaming}`)
  }
  showMovieInCinema(){
    console.log(`la peicula se muestra en cines en ${this.title}`)
  }
 
 }

 const pelicula = new Pelicula("La cosa","Amazon",true,["Terror","mostruo"],120)

 pelicula.showMovieInStreaming() // resultado : la peicula se transmite en undefined
 pelicula.showMovieInCinema() // resultado : la peicula se muestra en cines en La vida es bella

 console.log(Pelicula)

