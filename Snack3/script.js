/* Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.  */

// Chiedo con prompt di inserire dieci numeri
/* let sum = 0;
for (let index = 0; index < 10; index++) {
  const userNumber = Number(prompt('Type a number'))
  sum += userNumber
} */

// Stampa la somma di tutti i numeri
/* console.log(sum); */

/* Ciclo While */

// Chiedo con prompt di inserire dieci numeri
let sum = 0;
let i=0;
while (i < 10) {
  const userNumber = Number(prompt('Type a number'))
  sum += userNumber
  i++
  
}

// Stampa la somma di tutti i numeri
console.log(sum);