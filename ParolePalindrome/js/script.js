// Stampiamo un prompt che richiede una parola scritta.
// creiamo una funzione per le parole Palindrome
// convertiamo la parola scritta in " miniscuolo" per far si che  durante la lettura non ci siano differenze tra le lettere min e maiusc
// invertiamo la parola per confermare se è Palindroma





// Stampiamo un prompt che richiede una parola scritta.
let printedWord = prompt('Please, Enter a word!');


// funzione per parole palindrome
function itsPalindrome(printedPalindrome){
    
    //convertiamo la parola in minuscolo
    printedPalindrome = printedPalindrome.toLowerCase();

    //variabile parola invertita
    let invertedWord = "";

    // inizializzo il contatore per il ciclo for
    let i = printedWord.length -1;  // il problema era questo, invesivo printedPalindrome e non prendeva il .lenght ( lenght fondamentale!!)

    //ciclo for
    for (i; i >= 0; i--){
        invertedWord += printedPalindrome[i];
    }
    if (printedPalindrome === invertedWord){
        return true; // palindromo corretto

    }
    else{
        return false;//palindromo errato
    }
}

//Funzione per le parole palindrome
if (itsPalindrome(printedWord)){
    console.log("La parola inserita è Palindroma")
}
else{
    console.log("la parola inserita NON é Palindroma");
}


//