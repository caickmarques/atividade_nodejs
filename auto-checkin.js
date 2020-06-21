let readline = require('readline-sync');

console.log('Bem vindo ao auto-checkin!');
let voo = readline.questionInt('Por favor, informe o numero do seu voo: ');
let fileira = readline.question('Por favor, agora informe qual fileira voce deseja se sentar (A, B, C, D ou E): ');

console.log('Voo: ' + voo + ' | Fileira: ' + fileira);