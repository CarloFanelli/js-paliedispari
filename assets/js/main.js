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


/**
 * generate a number between min and max, both included
 * @param {number} min 
 * @param {number} max 
 * @returns {number}
 */
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//console.log(getRndInteger(1,5));

/**
 * EvenOrOdd 
 * return true if number is even & return false if number is odd
 * @param {number} userNumber 
 * @returns {boolean}
 */

const computerNumber = getRndInteger(1,5);


function EvenOrOdd(userNumber,computerNumber) {
    
    //console.log(computerNumber);
    const resultToCheck = computerNumber + userNumber; //come posso estrarlo?

    
    console.log(resultToCheck);

    if (resultToCheck % 2 === 0) {

        return true;
        
    } else {
        
        return false;

    }
    
}


// collego i due bottoni del DOM e gli assegno la funzione EvenOrOdd

document.getElementById('pari').addEventListener('click', function (e) {
    
    e.preventDefault();
    
    // input dal DOM -- perché funziona solo se dentro qui?
    const inputUtenteDOM = document.getElementById('numero-utente').valueAsNumber;

    console.log(inputUtenteDOM);

    if (EvenOrOdd(inputUtenteDOM,computerNumber)) {

        console.log('pari');
        document.getElementById('result').innerHTML = `numero del computer: ${computerNumber}. Hai vinto!`
        
    } else {
        console.log('dispari');
        document.getElementById('result').innerHTML = `numero del computer: ${computerNumber}. Hai perso!`
    }
    
})

document.getElementById('dispari').addEventListener('click', function (e) {

    e.preventDefault();
    
    // input dal DOM -- perché funziona solo se dentro qui?
    const inputUtenteDOM = document.getElementById('numero-utente').valueAsNumber;

    console.log(inputUtenteDOM);

    if (EvenOrOdd(inputUtenteDOM,computerNumber)) {

        console.log('pari');
        document.getElementById('result').innerHTML = `numero del computer: ${computerNumber}. Hai perso!`
        
    } else {
        console.log('dispari');
        document.getElementById('result').innerHTML = `numero del computer: ${computerNumber}. Hai vinto!`
    }
})










/*
  Palidroma
Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma
 */