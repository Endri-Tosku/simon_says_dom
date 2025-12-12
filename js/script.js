///////// RECUPERO ELEMENTI DAL DOM ///////////

const countdown = document.getElementById("countdown") // Mostra il countdown dei 30 secondi
const instructions = document.getElementById("instructions") // Mostra le istruzioni iniziali
const numbersList = document.getElementById("numbers-list") // Contenitore <ul> che conterrà le <li> dei numeri casuali da memorizzare
const answersForm = document.getElementById("answers-form") // Form con gli input dove l'utente inserirà i numeri dopo i 30 secondi
const btn = document.querySelector(".btn") // Bottone "Conferma" dentro il form
const message = document.getElementById("message") // Messaggio all’utente



//// FUNZIONI UTLI ////


// Funzione che genera un array di TOT numeri unici compresi tra minNum e maxNum
function genRandomNumberInRange(minNum, maxNum, tot) {

    const numbArray = [] // array vuoto che conterrà i numeri generati

    while (numbArray.length < tot) { // continua finché non abbiamo tot numeri
        const randomNum = genRandomNumInRange(minNum, maxNum) // genera un numero casuale singolo

        // aggiunge il numero solo se non è già presente (numeri univoci)
        if (!numbArray.includes(randomNum)) {
            numbArray.push(randomNum)
        }
    }

    return numbArray // restituisce l'array finale
}

// Funzione che genera UN singolo numero random tra min e max
function genRandomNumInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



//// MOSTRA I NUMERI NELL'HTML ////


// Genera subito i 5 numeri casuali da mostrare all’utente
const randomNumbers = genRandomNumberInRange(1, 50, 5);

// Scorre ogni numero dell’array e lo inserisce nella lista HTML come <li>
randomNumbers.forEach(num => {
    const li = document.createElement("li"); // crea un elemento <li>
    li.textContent = num; // inserisce il numero dentro la <li>
    numbersList.appendChild(li); // aggiunge la <li> alla <ul>
});



