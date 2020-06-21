let readline = require('readline-sync');

let ladoA = readline.questionFloat('Favor informar o valor do lado A: ');
let ladoB = readline.questionFloat('Favor informar o valor do lado B: ');

let area = ladoA * ladoB;

console.log('Area total é de: ' + area + "m²");