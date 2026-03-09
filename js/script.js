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
// qui il valore di altraBacinella è "zucchero"
altraBacinella = 'fornaciari'
// qui il valore di altraBacinella è "fornaciari"
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
// myUrl = 'stefano'

// const useless // creare una costante senza valore iniziale non ha assolutamente senso, ho creato
// una bacinella inutile!

// TIPI DI DATO SEMPLICI (PRIMIVIVI) IN JS
// - number -> es. 0, 1, 100, -5, 100000, 12.34
// - string -> 'stefano, 'zucchero', "cane2", "" -> vanno delimitate con '' "" ``
// - boolean -> true, false
// es
// let veroOFalso = 10 < 5 // false
// - undefined -> un valore non definito, però il valore c'è!
// es
let boh
// - null -> assenza esplicita di un valore, variabile VUOTA
let vuota = null

// approfondiamo un po' meglio il tipo "number"

let x = 5
let y = 7
let z = x // z vale 5 pure lui
console.log('valore di x iniziale', x) // 5
x = 50
console.log('valore di x dopo riassegnazione', x) // 50
// z continua a valere 5!

let xx = x + y // 5 + 7 --> 12

let a,
  s = 3
a = 10

// ci stiamo un po' perdendo con i conti e tutte queste variabili...
// come faccio a verificare in un dato momento QUANTO vale una variabile?
// z vale 5 o Stefano mi racconta frottole?
console.log('dopo tutto questo trambusto, z vale:', z) // 5 :)
console.log('verifico il TIPO della variabile z', typeof z) // "number"

// OPERAZIONI MATEMATICHE IN JS
let aa = 5 + 6 // 11
let bb = 6 - 5 // 1
let cc = 5 * 5 // 25
let dd = cc / 5 // 5
let ee = aa + bb // 12

// OPERATORE MODULO -> INDICA IL RESTO DELLA DIVISIONE TRA DUE NUMERI
// es. particolare -> per verificare se un numero è pari o dispari si effettuano l'operazione modulo con il n. 2
let ff = ee % 10 // OPERATORE MODULO -> 2
let gg = 7 % 2 // il due nel 7 ci sta 3 volte con il RESTO DI 1 --> 1
let hh = 10 % 5 // 0

// numeri particolari -> 0, -0, +infinity -infinity, NaN (Not A Number)
console.log('questa divisione non restituisce un numero', 50 / 'Stefano') // NaN

// OPERATORE + SU STRINGHE
const longString = 'ciao a tutti! mi chiamo Stefano e ho ' + '18' + ' anni'
// l'operatore + vi può anche servire per CONCATENARE stringhe
console.log('valore di longString', longString)

const maybeANumber = '40' + '60' // "4060"
const maybeANumber2 = 40 + '60' // "4060", come prima! trasforma il 40 in stringa e lo concatena a "60"
console.log(maybeANumber2)

// OPERATORI DI COMPARAZIONE
// < > <= >= ! === !==
// l'utilizzo di tutti questi operatori restituisce un valore BOOLEANO
let qq = 4
let ww = 6

console.log(qq < ww) // 4 < 6 --> true
console.log(qq > ww) // 4 > 6 --> false
console.log(qq >= ww) // 4 >= 6 --> false
console.log(qq === ww) // 4 === 6 --> false, 4 non è uguale a 6
console.log(qq !== ww) // 4 !== 6 --> true, la loro DISUGUAGLIANZA è true!

let rr = 50
let tt = '50'

let uguali = rr === tt // false, perchè nonostante il VALORE sia uguale, il TIPO è diverso!
let nonUsatelo = rr == tt // true, perchè il == controlla il VALORE ma NON il TIPO!
// il == vi consiglio caldamente di DIMENTICARVELO

const valore = 4 < 5 // true
console.log(!valore) // darebbe FALSE, perchè il ! inverte il significato

// VAR
// var è un vecchio modo di dichiarare le variabili, oramai completamente sostituito da let.
// var creava delle variabili con visibilità di FUNZIONE, creando confusione nei blocchi di codice
// console.log(ciao)
// var ciao = 10
// queste due righe sopra funzionerebbero in JS, grazie al costrutto var (utilizziamo la variabile prima
// di averla definita!! obbrobrio, non funzionerebbe in qualsiasi altro linguaggio decente)

// OPERATORI LOGICI: AND (&&) e OR (||)
let belTempo = true
let macchinaAPosto = false

// l'operatore AND serve a valutare complessivamente 2 o più condizioni per ottenere un unico risultato finale
// l'operatore AND restituisce TRUE tra 2 o più condizioni SOLAMENTE se ENTRAMBE sono TRUE
let vadoAlMare = belTempo && macchinaAPosto // -> true && false --> false
// SPECCHIETTO AND &&
// true && true -> true
// true && false -> false
// false && true -> false
// false && false -> false

// l'operatore OR serve a valutare complessivamente 2 o più condizioni per ottenere un unico risultato finale
// l'operatore OR restituisce TRUE tra 2 o più condizioni ANCHE SOLO se UNA vale true
let hoLaMacchina = false
let hoLaBici = true

let tornoACasa = hoLaMacchina || hoLaBici // true
// SPECCHIETTO OR ||
// true || true -> true
// true || false -> true
// false || true -> true
// false || false -> false
