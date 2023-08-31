/*
 Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.
*/

/* strumenti
    - input
    - 2 bottoni di scelta pari/dispari
    - funzione random
    - funzione pari dispari che dichiara chi vince
     */

// input dal DOM
const inputUtenteDOM = document.getElementById('numero-utente');

// collego i due bottoni del DOM

document.getElementById('pari').addEventListener('click',function(e){

    e.preventDefault();
    console.log(inputUtenteDOM).value;
})

document.getElementById('dispari').addEventListener('click',function(e){

    e.preventDefault();
    console.log(inputUtenteDOM).value;
})










/*
  Palidroma
Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma
 */