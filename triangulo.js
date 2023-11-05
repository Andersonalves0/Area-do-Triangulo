import entradaDados from 'readline-sync'

console.log("Área do triângulo: \n");

let base = entradaDados.question("informe a base: ");
let altura = entradaDados.question("informe a altura: ");

let area= (base * altura) / 2;
console.log("Á área do triângulo é: "+area);