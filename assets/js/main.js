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



function EvenOrOdd(userNumber, computerNumber) {

    //console.log(computerNumber);
    const resultToCheck = computerNumber + userNumber;

    console.log(resultToCheck);

    return resultToCheck % 2 === 0;

}


// collego i due bottoni del DOM e gli assegno la funzione EvenOrOdd

document.getElementById('pari').addEventListener('click', function (e) {

    e.preventDefault();

    //genero il randomico numero
    const computerNumber = getRndInteger(1, 5);

    // input dal DOM -- perché funziona solo se dentro qui?
    const inputUtenteDOM = document.getElementById('numero-utente').valueAsNumber;

    const resultToShow = computerNumber + inputUtenteDOM;

    console.log(inputUtenteDOM);

    if (EvenOrOdd(inputUtenteDOM, computerNumber)) {

        console.log('pari');
        document.getElementById('result').innerHTML = `numero del computer: ${computerNumber}. Somma: ${resultToShow}, hai vinto!`

    } else {
        console.log('dispari');
        document.getElementById('result').innerHTML = `numero del computer: ${computerNumber}. Somma: ${resultToShow}, hai perso!`
    }

})

document.getElementById('dispari').addEventListener('click', function (e) {

    e.preventDefault();

    //genero il numero random
    const computerNumber = getRndInteger(1, 5);

    // input dal DOM -- perché funziona solo se dentro qui?
    const inputUtenteDOM = document.getElementById('numero-utente').valueAsNumber;

    const resultToShow = computerNumber + inputUtenteDOM;

    console.log(inputUtenteDOM);

    if (EvenOrOdd(inputUtenteDOM, computerNumber)) {

        console.log('pari');
        document.getElementById('result').innerHTML = `numero del computer: ${computerNumber}. Somma: ${resultToShow}, hai perso!`

    } else {
        console.log('dispari');
        document.getElementById('result').innerHTML = `numero del computer: ${computerNumber}. Somma: ${resultToShow}, hai vinto!`
    }
})




/*
  Palidroma
Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma
 */

/* mosse
    - input dell'utente, che rendo tutto minuscolo SEMPRE
    
    funzione isPalindrome:
    - if/else per il numero di caratteri
        - for i
            - .charAt(i) per avere il singolo carattere da una stringa
            - confronto i caratteri a due a due partendo dal primo e l'ultimo e via dicendo verso il centro
        - stampo se è palindromo o no
*/

function isPalindrome(userWord) {

    //console.log(userWord);

    const lowerWord = userWord.toLowerCase()

    let i = 0;
    let x = lowerWord.length - 1;

    while (x > 0 && x > i) {

        //console.log(lowerWord.charAt(i), lowerWord.charAt(x));

        if (lowerWord.charAt(i) == lowerWord.charAt(x)) {
            document.getElementById('result-palindrome').innerHTML = userWord + ' è palindroma';

        }
        else {
            document.getElementById('result-palindrome').innerHTML = userWord + ' non è palindroma';

        }

        ++i;
        --x;
    }

}



document.getElementById('palindrome').addEventListener('click', function (e) {
    e.preventDefault();


    //console.log(userWordDOC.length);

    const userWordDOC = document.getElementById('user-word').value;

    isPalindrome(userWordDOC);

})