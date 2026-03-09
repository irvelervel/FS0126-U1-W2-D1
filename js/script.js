// i commenti in JS si scrivono con singole righe precedute da //
/*
    oppure potete fare un commento multi-riga come in CSS
*/

// Il vostro mestiere da programmatori vi richiederà di RISOLVERE PROBLEMI.
// Per la risoluzione di problemi, uno sviluppatore scrive ALGORITMI.
// Un ALGORITMO è uno serie FINITA e ORDINATA di passaggi che portano da un problema alla sua soluzione.
// Dato sempre lo stesso problema, riusciremo sempre a risolverlo utilizzando sempre lo stesso algoritmo.

// È come preparare una torta. Ho bisogno degli ingredienti, ho bisogno di sapere come vanno miscelati, etc. etc.
// Per fare una torta basta mettere in una pentola acqua, burro, farina, sale, zucchero, latte, uova e mischiare tutto insieme?
// No, ho bisogno di miscelare prima determinati ingredienti tra di loro, e poi metterli insieme ecc. ecc.

// VARIABILE
// Una variabile, in un calcolatore, è un'allocazione di memoria. Dentro una variabile io posso inserire un VALORE.
// Nell'esempio della torta, una variabile potrebbe essere una bacinella per un ingrediente.
// Come si crea una variabile in JS? Con la parola LET

let bacinella // dichiaro, creo una variabile di nome bacinella

// nomenclatura camelCase
let altraBacinella
let ancoraUnAltraBacinella
let scatolaBellissima

// vado a mettere dentro un valore alla variabile bacinella, creata alla riga 20
// con l'operatore di ASSEGNAZIONE =
bacinella = 100
// le variabili create con la parola "let" sono inoltre RI-ASSEGNABILI
bacinella = 105

// qui altrabacinella non ha ancora un valore
altraBacinella = 'zucchero'
// il valore di altraBacinella sarebbe "zucchero"
altraBacinella = 'fornaciari'
// il valore di altraBacinella sarebbe "fornaciari"
// altraBacinella = 5 // sconsigliata perchè non si dovrebbe cambiare il TIPO DI DATO di una variabile

// abbiamo visto fin'adesso i passaggi:
// a) creazione della variabile con la parola "let"
// b) assegnazione di un valore alle variabili precedentemente create
// volendo, questi due passaggi si possono combinare in un'unica riga:
let quintaVariabile = 0
// parolaChiave nomeVariabile operatoreAssegnazione valore

// let crea una variabile RI-ASSEGNABILE
quintaVariabile = 10 // non ci va nuovamente "let" davanti! non la stiamo ri-dichiarando!

// const crea una variabile NON RI-ASSEGNABILE
const myUrl = 'https://www.epicode.com'
myUrl = 'stefano'

// const useless // creare una costante senza valore iniziale non ha assolutamente senso, ho creato
// una bacinella inutile!
