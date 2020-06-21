let readline = require('readline-sync');

console.log('Vamos nos preteger da COVID-19?');

let mascara = readline.question('Voce esta usando mascara ao sair de casa? (Sim/Nao): ').toUpperCase();

while (mascara != "SIM" && mascara != "NAO") {
    console.log('Favor digitar uma resposta valida!');
    mascara = readline.question('Voce esta usando mascara ao sair de casa? (Sim/Nao): ');
}

let lavar_maos = readline.question('Voce esta lavando as maos frequentemente? (Sim/Nao): ').toUpperCase();

while (lavar_maos != "SIM" && lavar_maos != "NAO") {
    console.log('Favor digitar uma resposta valida!');
    lavar_maos = readline.question('Voce esta lavando as maos frequentemente? (Sim/Nao): ');
}

if (mascara == 'SIM' && lavar_maos == 'SIM') {
    console.log('Parabens! Voce esta se protegendo corretamente!');
} else {
    console.log('Que feio hein?! Então comece a lavar as maos frequentemente e a utilizar mascara ao sair de casa!');
}