//Pacote de entrada de dados -> 
const prompt = require("prompt-sync")();

const num1 = Number(prompt("Digite o 1º número: "));
const num2 = Number(prompt("Digite o 2º número: "));
const soma = num1 + num2; 

console.log("Soma é: "+soma);