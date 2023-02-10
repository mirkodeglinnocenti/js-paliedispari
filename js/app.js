// console.log('Test')


// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Comunichiamo all’utente chi ha vinto. (decidete voi come)

// utente sceglie tra pari o dispari
const sceltaUtente = prompt('Scegli pari o dispari');

// utente scegli un numero da 1 a 5
const numeroUtente = parseInt(prompt('Scegli un numero da 1 a 5'));

console.log(sceltaUtente, numeroUtente);

// Generiamo un numero random da 1 a 5 per il computer

const numeroPc =  randomNumber(1, 5);

console.log(numeroPc);

// Sommiamo i 2 numeri

const somma = numeroUtente + numeroPc;

console.log(somma);

// Vediamo se la somma dei due numeri è pari o dispari

if ( isEven ( somma ) ) {
    console.log('La somma dei due numeri è pari');
} else if ( !isEven ( somma ) ){
    console.log('La somma dei due numeri è dispari');
}

// Comunichiamo all'utente chi ha vinto

const risultatoPrint = document.getElementById ('risultato');

if ( (sceltaUtente === 'pari' && isEven ( somma ) ) || ( sceltaUtente === 'dispari' && !isEven ( somma )))  {

    risultatoPrint.innerHTML = 'Utente ha vinto';

} else {
    risultatoPrint.innerHTML = 'Il computer ha vinto';
}






// FUNZIONI

// Funzione Random

function randomNumber (numeroMin , numeroMax) {

    let numeroRandom = Math.floor((Math.random() * numeroMax) + numeroMin);
    
    return numeroRandom;

}

// Funzione pari o dispari

function isEven ( numero ) {

    const resto = numero % 2;

    // if ( resto === 0 ) {
    //     return true;
    // } else {
    //     return false;
    // }

    return resto === 0;

}


