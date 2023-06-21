// prompt per richiedere se l'utente vuole pari o dispari
//trasformiamo la stringa in numero
// generiamo numeri random da 1 a 5 per il Computer
//sommiamo i numeri del player a quello del computer
//con una funzione capiamo se sono pari o dispari
// dichiariamo chi ha vinto


// scelta pari o dispari
let human = prompt("Scegli Pari o Dispari!");
// scelta numeri
let numberHuman = parseInt(prompt("inserisci un numero da 1 a 5!"));

//funzione per il risultato randomico del computer
function randomNumber (){
    return Math.floor(Math.random() * 5 )+ 1;
}

// associamo la funzione alla variabile
let numberComputer = randomNumber();

// somma numeri utente e computer 
let somma = numberHuman + numberComputer;

//stabiliamo se la somma è pari o disapri con una funzione
function numberPari(number) {
    return number % 2 === 0;
}
