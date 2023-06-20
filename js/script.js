// Stampiamo un prompt che richiede una parola scritta.
// creiamo una funzione per le parole Palindrome
// convertiamo la parola scritta in " miniscuolo" per far si che  durante la lettura non ci siano differenze tra le lettere min e maiusc
// invertiamo la parola per confermare se è Palindroma





// Stampiamo un prompt che richiede una parola scritta.
let printedWord = prompt('Please, Enter a word!');


// funzione per parole palindrome
function itsPalindrome(printedWord){
    
    //convertiamo la parola in minuscolo
    printedWord = printedWord.toLowerCase();

    //variabile parola invertita
    let invertedWord = "";

    // inizializzo il contatore per il ciclo while
    let index = printedWord.lenght - 1;

    //Ciclo while
    while (index >= invertedWord) {

        invertedWord += printedWord[index];

        //decrementiamo il contatore.
        index--;
    }
    // mettiamo a confronto la parola normale e quella invertita
    if (printedWord === invertedWord) {
        return true;  // è palindroma
    }
    else{
        return false;  //non è palindroma
    }
}

//Funzione per le parole palindrome
if (itsPalindrome(printedWord)){
    console.log("La parola inserita E' Palindroma");
}
else{
    console.log("la parola inserita NON é Palindroma");
}