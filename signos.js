let readline = require('readline-sync');

console.log('Bem vindo! Deseja saber qual é o seu signo? ')
let dia = readline.questionInt('Então me diz, qual foi o dia que você nasceu: ');
let mes = readline.questionInt('Agora me informe o mes que você nasceu: ');

if (dia >= 21 && dia <= 20 && mes >= 3 && mes <= 4) {
    console.log('Você é de Áries');

} else if (dia >= 21 && dia <= 20 && mes == 4 || mes == 5) {
    console.log('Você é de Touro');

} else if (dia >= 21 && dia <= 20 && mes == 5 || mes == 6) {
    console.log('Você é de Gêmeos');

} else if (dia >= 21 && dia <= 22 && mes == 6 || mes == 7) {
    console.log('Você é de Cancer');

} else if (dia >= 23 && dia <= 22 && mes == 7 || mes == 8) {
    console.log('Você é de Leão');

} else if (dia >= 23 && dia <= 22 && mes == 8 || mes == 9) {
    console.log('Você é de Virgem');

} else if (dia >= 23 && dia <= 22 && mes == 9 || mes == 10) {
    console.log('Você é de Libra');

} else if (dia >= 23 && dia <= 21 && mes == 10 || mes == 11) {
    console.log('Você é de Escorpião');

} else if (dia >= 22 && dia <= 21 && mes == 11 || mes == 12) {
    console.log('Você é de Sagitário');

} else if (dia >= 22 && dia <= 20 && mes == 12 || mes == 1) {
    console.log('Você é de Capricórnio');

} else if (dia >= 21 && dia <= 18 && mes == 1 || mes == 2) {
    console.log('Você é de Aquário');

} else if (dia >= 19 && dia <= 20 && mes == 2 || mes == 3) {
    console.log('Você é de Peixes');
} else {
    console.log('Desculpe, não consegui identificar o seu signo');
}