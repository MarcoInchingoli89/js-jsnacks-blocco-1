/* L’utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore. */

// Usare prompt per inserire due numeri in successione
const num1 = Number (prompt('Scrivi il primo numero'));
const num2 = Number (prompt('Scrivi il secondo numero'));
// Verifica il valore maggiore tra i due e stampalo su console
if (num1 > num2) {
    console.log(num1).value;
} else if (num2 > num1) {
    console.log(num2).value;
}
