//Utilizando a função nativa console.log()

//Forma 1
function imprimir1() {
    console.log('Pernambuco meu País')
}
imprimir1();

//Forma 2
function imprimir2(texto) {
    console.log(texto);
}
imprimir2('Pernambuco meu País');

// =====================================================================================================================================================

//Utilizando a função nativa Math.random

const numeroAleatorio = (Math.random() * 100) + 1; //Definindo um intervalo de 1 a 100
console.log(numeroAleatorio); //Mostrando o método Random com número aleatório com casas decimais
console.log(Math.floor(numeroAleatorio)); //Mostrando o método random com número aleatório arredondando para baixo
console.log(Math.ceil(numeroAleatorio)); //Mostrando o método random com número aleatório arredondando para cima

// =====================================================================================================================================================

//Utilizando funções nativas (ParseInt e ParseFloat)
function soma(n1, n2) {
    return n1 + n2;
}

function divisao(n1, n2) {
    return n1 / n2;
}


let numero1 = '20';
let numero2 = '4';
let numero3 = '50'

soma(numero1, numero2);
console.log('Concatenação: ' + soma(numero1, numero2)); //Neste caso a função está retornando uma concatenação, pois as variaveis foram definidas como String

console.log('Soma com o método nativo parseInt:  ' + soma(parseInt(numero1), parseInt(numero2)));

console.log('Divisão com o método nativo parseFloat: ' + divisao(parseFloat(numero1), parseFloat(numero3)));

// =====================================================================================================================================================


const btnSomar = document.querySelector('#btn-somar');
const btnDividir = document.querySelector('#btn-dividir');

btnSomar.addEventListener('click', function () {
    const n1 = document.querySelector('#n1').value;
    const n2 = document.querySelector('#n2').value;
    alert("O resultado da soma é: " + soma(parseInt(n1), parseInt(n2)));
})

btnDividir.addEventListener('click', function () {
    const n1 = document.querySelector('#n1').value;
    const n2 = document.querySelector('#n2').value;
    alert("O resultado da divisão é: " + divisao(parseFloat(n1), parseFloat(n2)));
})



