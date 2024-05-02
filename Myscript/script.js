// creo una costante per richiamare il container della griglia
const container = document.getElementById('container');
// leggo la difficolta selezionata
let difficolta = document.getElementById("difficolta");
// creo la variabile alla quale daro un valore in base alla dificolta
let livello;



// creo una funzione che genera un div con dentro del contenuto 
function createSquare(numero) {
    const newElement = document.createElement("div");
    newElement.innerHTML = numero;
    newElement.classList.add("square");
    return newElement;
} ``
function genera() {
    container.innerHTML = "";
    // assegno i vari valori alle difficolta
    if (difficolta.value == "facile") {
        livello = 100;
    }
    else if (difficolta.value == "medio") {
        livello = 64;
    }
    else {
        livello = 25;
    }
    // creo un ciclo for che conta da 1 a difficolta selezionata
    for (let i = 1; i <= livello; i++) {
        // richiamo la funzione sopra creata
        const newSquare = createSquare('');
        console.log(newSquare, i);
        // modifico la grandezza in bale alle varie difficolta
        if (difficolta.value == "facile") {
            newSquare.classList.add("level-easy")
        }
        else if (difficolta.value == "medio") {
            newSquare.classList.add("level-medium")
        }
        else {
            newSquare.classList.add("level-hard")
        }
        // appendo il "<div>" dentro al container per 100 volte
        container.appendChild(newSquare);

        // creo un event listener collegato a newsquare
        newSquare.addEventListener("click", function () {
            newSquare.classList.toggle("clicked");
            if (newSquare.classList.contains("clicked")) {
                newSquare.innerHTML = `<i class="fa-brands fa-font-awesome"></i>`
            }
            else {
                newSquare.innerHTML = "";
            }
            console.log(i);
        })
    }

}
//creo una funzione che genera dei numeri random
function randomNumber() {
    let raNumber = Math.floor((Math.random() * 6) + 1);
    return raNumber
}

let bombe = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
]


for (let i = 0; i < array.length; i++) {
    const element = array[i];

}
