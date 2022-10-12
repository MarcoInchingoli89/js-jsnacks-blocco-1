/* L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga. */

// Inserisci due parole in successione con prompt
const firstWord = prompt('Inserisci la prima parola');
const secondWord = prompt('Inserisci la seconda parola');
const firstWordLenght = firstWord.lenght;
const secondWordLenght = secondWord.lenght;
// Stampa la parola più corta poi quella più lunga
if (firstWordLenght < secondWordLenght) {
    console.log(firstWord);
} else if (firstWordLenght > secondWordLenght) {
    console.log(firstWord);
} else {
    console.log('Sono uguali')
}