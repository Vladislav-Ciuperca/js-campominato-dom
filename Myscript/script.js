// creo una costante per richiamare il container della griglia
const container = document.getElementById('container');

const body = document.querySelector("body")

// leggo la difficolta selezionata
let difficolta = document.getElementById("difficolta");

// creo la variabile alla quale daro un valore in base alla dificolta



//creo una funzione che genera un numero random
function generaNumeroRandom(from, to) {
    const raNumber = Math.floor((Math.random() * to) + from);
    return raNumber
}

// creo ina funzione che genera un array di numeri random
function generateBombsList(min, max, range) {
    // definisco l'array
    const bombsList = []
    // creo un ciclo whyle che richiamera un numero random finchej l'array non sara pieno
    while (bombsList.length < range) {
        const newNumber = generaNumeroRandom(min, max)
        // se ze falso che l'array contiene questo numero,allora pushalo nell array
        if (!bombsList.includes(newNumber)) {
            bombsList.push(newNumber)
        }
    }
    return bombsList
}

// creo una funzione che genera un div con dentro del contenuto 
function createSquare(numero) {

    const newElement = document.createElement("div");

    newElement.innerHTML = numero;
    newElement.classList.add("square");

    // modifico la grandezza in bale alle varie difficolta
    if (difficolta.value == "facile") {
        newElement.classList.add("level-easy")
    }
    else if (difficolta.value == "medio") {
        newElement.classList.add("level-medium")
    }
    else {
        newElement.classList.add("level-hard")
    }
    return newElement;

}
//------------------------------------------------------------//
let gameOver = false

// else {
//     container.addEventListener("click", alert("no zio"))
// }
//------------------------------------------------------------//

// attivo la funzione per la nuova partita
function genera() {
    ///////////////////////////////////////////////////////////////////////
    // let celle = document.querySelectorAll(".square")
    const listaMine = []
    console.log(listaMine)



    // metto la variabile della difficolta dentro al tasto perche se no non posso assegnare un valore alla funzione per creare le bombe
    let livello;
    // al click svuoto il container
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

    const bombs = generateBombsList(1, livello, 16);
    console.log(bombs)





    // creo un ciclo for che conta da 1 a difficolta selezionata
    for (let i = 1; i <= livello; i++) {
        // richiamo la funzione sopra creata
        const newSquare = createSquare('');
        console.log(newSquare, i);
        // appendo il "<div>" dentro al container per 100 volte
        container.appendChild(newSquare);

        ////////////////////////////////////////////////////////////////////
        if (bombs.includes(i)) {
            console.log(i, "ze una bomba")
            newSquare.classList.add("bomb")
            listaMine.push(newSquare)

        }
        else {
            newSquare.classList.add("flag")
        }


        // creo un event listener collegato a newsquare : quando clicco
        newSquare.addEventListener("click", function () {
            // attiva e disattiva la classe clicked
            newSquare.classList.add("clicked");
            // se il quadrato ze flag
            //-------------------------------------------------

            //-------------------------------------------------
            if (newSquare.classList.contains("bomb")) {
                ////////////////////////////////////////////////////////////
                // trovo tutti gli elementi con la classe bomb
                for (let x = 0; x < listaMine.length; x++) {
                    // e li trigghero
                    listaMine[x].classList.add("red")
                    listaMine[x].innerHTML = `<i class="fa-solid fa-bomb"></i>`
                    gameOver = true
                }

            }
            // se un quadrato ze una bandiera
            else if (newSquare.classList.contains("flag") && newSquare.classList.contains("clicked")) {
                newSquare.innerHTML = `<i class="fa-brands fa-font-awesome"></i>`
            }
            else {
                newSquare.innerHTML = "";
            }

            // let messaggio = alert("no zio")

            // if (gameOver == true) {
            //     body.addEventListener("click", function () {
            //         alert("no zio")
            //     })

            // }


        })




    }

}

// let prova = document.querySelectorAll(".square")
// if (prova.classList.contains("red")) {
//     alert("bababui")
// }