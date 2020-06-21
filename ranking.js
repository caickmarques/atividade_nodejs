let readline = require('readline-sync');

let nome1 = readline.question('Como é seu nome? ');
let digitacao1 = readline.question('Digite qualquer coisa: ').length;
let nome2 = readline.question('Como é seu nome? ');
let digitacao2 = readline.question('Digite qualquer coisa: ').length;
let nome3 = readline.question('Como é seu nome? ');
let digitacao3 = readline.question('Digite qualquer coisa: ').length;

if (digitacao1 > digitacao2 && digitacao1 > digitacao3 && digitacao2 > digitacao3) {
    console.log('Ranking de digitação!');
    console.log("Primeiro lugar: " + nome1);
    console.log("Segundo lugar: " + nome2);
    console.log("Terceiro lugar: " + nome3);
} else if (digitacao1 > digitacao2 && digitacao1 > digitacao3 && digitacao3 > digitacao2) {
    console.log('Ranking de digitação!');
    console.log("Primeiro lugar: " + nome1);
    console.log("Segundo lugar: " + nome3);
    console.log("Terceiro lugar: " + nome2);
} else if (digitacao2 > digitacao1 && digitacao2 > digitacao3 & digitacao1 > digitacao3) {
    console.log('Ranking de digitação!');
    console.log("Primeiro lugar: " + nome2);
    console.log("Segundo lugar: " + nome1);
    console.log("Terceiro lugar: " + nome3);
} else if (digitacao2 > digitacao1 && digitacao2 > digitacao3 & digitacao3 > digitacao1) {
    console.log('Ranking de digitação!');
    console.log("Primeiro lugar: " + nome2);
    console.log("Segundo lugar: " + nome3);
    console.log("Terceiro lugar: " + nome1);
} else if (digitacao3 > digitacao1 && digitacao3 > digitacao2 & digitacao1 > digitacao2) {
    console.log('Ranking de digitação!');
    console.log("Primeiro lugar: " + nome3);
    console.log("Segundo lugar: " + nome1);
    console.log("Terceiro lugar: " + nome2);
} else {
    console.log('Ranking de digitação!');
    console.log("Primeiro lugar: " + nome3);
    console.log("Segundo lugar: " + nome2);
    console.log("Terceiro lugar: " + nome1);
}