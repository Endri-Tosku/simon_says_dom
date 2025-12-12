const countdown = document.getElementById("countdown")
const instructions = document.getElementById("instructions")
const numbersList = document.getElementById("numbers-list")
const answersForm = document.getElementById("answers-form")
const btn = document.querySelector(".btn")
const message = document.getElementById("message")


console.log(genRandomNumberInRange(1, 50, 5));

// funzione che genera un array di numeri univoci
function genRandomNumberInRange(minNum, maxNum, tot) {

    const numbArray = []
    
    while (numbArray.length < tot) {
        const randomNum = genRandomNumInRange(minNum, maxNum)

        // aggiunge solo se non esiste già
        if (!numbArray.includes(randomNum)) {
            numbArray.push(randomNum)
        }
    }

    return numbArray
}

// funzione che genera un singolo numero random tra min e max
function genRandomNumInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
