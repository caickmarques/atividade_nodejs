let readline = require('readline-sync');

console.log('Vamos nos preteger da COVID-19?');

let mascara = readline.question('Você esta usando mascara ao sair de casa? (Sim/Nao): ').toUpperCase();

while (mascara != "SIM" && mascara != "NAO" && mascara != "NÃO") {
    console.log('Favor digitar uma resposta válida!');
    mascara = readline.question('Você esta usando mascara ao sair de casa? (Sim/Nao): ').toUpperCase();
}

let lavar_maos = readline.question('Você esta lavando as maos frequentemente? (Sim/Nao): ').toUpperCase();

while (lavar_maos != "SIM" && lavar_maos != "NAO" && lavar_maos != "NÃO") {
    console.log('Favor digitar uma resposta válida!');
    lavar_maos = readline.question('Você esta lavando as maos frequentemente? (Sim/Nao): ').toUpperCase();
}

lavar_maos == 'SIM' && mascara == 'SIM' ? console.log("Parabéns") : console.log("Use mascara e lave as mãos!!!");


// if (mascara == 'SIM' && lavar_maos == 'SIM') {
//     console.log('Parabens! Voce esta se protegendo corretamente!');
// } else {
//     console.log('Então comece a lavar as maos frequentemente e a utilizar mascara ao sair de casa!');
// }