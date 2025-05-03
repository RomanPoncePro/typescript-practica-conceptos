 /* Encapsulameiento, getters y setters */

class Sorte<T>{
  private number?: T;

  constructor(private name: string) { }
 
  setNumber(number: T){
    this.number = number;
  }

  getNumber() {
    return this.number;
  }

  public sort(): string{
    return `Para ${this.name} el ticket es ${this.number}`
  }
}

// Le pasamos el generico

let sorteo = new Sorte<number>("Roman")
sorteo.setNumber(7)
console.log(sorteo.sort())
console.log(sorteo.number)