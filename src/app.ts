// exercicio 1

abstract class Midia {
   filme: string;
   emExecucao: boolean;
   constructor(filme: string, emExecucao: boolean) {
      this.filme = filme;
      this.emExecucao = emExecucao;
   }
   reproduzir() {
      console.log('midia rodando..');
   }
}

class DVD extends Midia {
   reproduzir() {
      console.log('DVD rodando..');
   }
}

class CD extends Midia {
   reproduzir() {
      console.log('CD rodando..');
   }
}

// exercicio 2

class Carro {
   ligar(): void {
      console.log('ligar carro de tal forma..');
   }
}

class Jaguar extends Carro {
   ligar(): void {
      console.log('Botao pressionado, ligando o veiculo.');
   }
}

class Fiat extends Carro {
   ligar(): void {
      console.log('Chave acionada, ligando o veiculo.');
   }
}

// exeercicio 3

interface AreaCalculavel {
   calcularArea(): number;
}

class Quadrado implements AreaCalculavel {
   lado: number;
   constructor(lado: number) {
      this.lado = lado;
   }
   calcularArea(): number {
      return this.lado * this.lado;
   }
}

class Retangulo implements AreaCalculavel {
   base: number;
   altura: number;
   constructor(base: number, altura: number) {
      this.base = base;
      this.altura = altura;
   }
   calcularArea(): number {
      return this.base * this.altura;
   }
}

class Circulo implements AreaCalculavel {
   raio: number;
   constructor(raio: number) {
      this.raio = raio;
   }
   calcularArea(): number {
      return 3.14 * (this.raio * this.raio);
   }
}

let quadrado: Quadrado = new Quadrado(20);
console.log(quadrado.calcularArea());
let retangulo: Retangulo = new Retangulo(20, 80);
console.log(retangulo.calcularArea());
let circulo: Circulo = new Circulo(25);
console.log(circulo.calcularArea());

// exercicio 4

interface Newborn {
   nome: string;
   sexo: string;
   chorar(): void;
   mamar(): void;
   dormir(): void;
}

class RecemNascido implements Newborn {
   nome: string;
   sexo: string;
   constructor(nome: string, sexo: string) {
      this.nome = nome;
      this.sexo = sexo;
   }
   chorar(): void {
      console.log('nhe nhe nhee');
   }
   mamar(): void {
      console.log('nham nham nham');
   }
   dormir(): void {
      console.log('zzz zzz zzz');
   }
}
