//var somaFuncao = require("./calculadora");     Fazendo isso estou requerindo a função contido no arquivo calculadora

var calculadora = require("./calculadora");  // Fazendo isso estou requerindo todo mundo de uma unica vez

console.log(calculadora.mult(3, 4));      //Podendo usar cada função especifica dos arquivos exportados              

console.log(somaFuncao(2, 5))