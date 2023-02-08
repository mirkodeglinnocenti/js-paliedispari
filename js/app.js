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

const numeroPc =  Math.floor((Math.random() * 5) + 1);

console.log(numeroPc);

// Sommiamo i 2 numeri

const somma = numeroUtente + numeroPc;

console.log(somma);

// Vediamo se la somma dei due numeri è pari o dispari

const resto = somma % 2;

if ( resto === 0 ) {
    console.log('La somma dei due numeri è pari')
} else {
    console.log('La somma dei due numeri è dispari')
}