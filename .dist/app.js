"use strict";
// exercicio 1
class Midia {
    constructor(filme, emExecucao) {
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
    ligar() {
        console.log('ligar carro de tal forma..');
    }
}
class Jaguar extends Carro {
    ligar() {
        console.log('Botao pressionado, ligando o veiculo.');
    }
}
class Fiat extends Carro {
    ligar() {
        console.log('Chave acionada, ligando o veiculo.');
    }
}
class Quadrado {
    constructor(lado) {
        this.lado = lado;
    }
    calcularArea() {
        return this.lado * this.lado;
    }
}
class Retangulo {
    constructor(base, altura) {
        this.base = base;
        this.altura = altura;
    }
    calcularArea() {
        return this.base * this.altura;
    }
}
class Circulo {
    constructor(raio) {
        this.raio = raio;
    }
    calcularArea() {
        return 3.14 * (this.raio * this.raio);
    }
}
let quadrado = new Quadrado(20);
console.log(quadrado.calcularArea());
let retangulo = new Retangulo(20, 80);
console.log(retangulo.calcularArea());
let circulo = new Circulo(25);
console.log(circulo.calcularArea());
class RecemNascido {
    constructor(nome, sexo) {
        this.nome = nome;
        this.sexo = sexo;
    }
    chorar() {
        console.log('nhe nhe nhee');
    }
    mamar() {
        console.log('nham nham nham');
    }
    dormir() {
        console.log('zzz zzz zzz');
    }
}
