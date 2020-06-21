let readlline = require('readline-sync');

let digitacao = readlline.question('Digite qualquer coisa: ');
caracteres = digitacao.length;
console.log('Voce digitou: ' + digitacao + ' que contem ' + caracteres + ' caracteres');