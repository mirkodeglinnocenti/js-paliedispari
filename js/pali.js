// console.log('test pali')


// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma
// Comunicare all’utente (decidete voi come) se la parola che ha inserito è palindroma oppure no


// Chiedere all'utente di inserire una parola e metterla dentro un array

const parolaUtente = prompt('Insersci una parola');

let parolaDaControllare = parolaUtente.split('');
console.log(parolaDaControllare)

let  parolaInvertita = parolaDaControllare.reverse();

parolaDaControllare = parolaUtente.split('');

console.log(parolaDaControllare, parolaInvertita)

let palindroma;

for (let i = 0; i < parolaUtente.length; i++) {

    palindroma = false;

    if ( parolaDaControllare[i] === parolaInvertita[i] ) {
        palindroma = true;
        console.log('è palindroma')
    } else {
        console.log('non è palindroma')
        palindroma = true;
    }

}


if ( palindroma) {
    console.log('è palindroma')
} else {
    console.log('non è palindroma')
}