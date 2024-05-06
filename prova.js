const playButton = document.querySelector('header button.button-play');
playButton.addEventListener(('click'), function () {
    startNewGame();
});
///////////////////////////////////////////////
function startNewGame() {
    const gridElement = document.querySelector('div.grid');
    const level = parseInt(document.getElementById('level-select').value);
    const outputBanner = document.querySelector('h2.info-banner');

    let userScore = 0;
    let cellsNumber = 0;
    let cellsClass;
    let isGameOver = false;
    //////////////////////////////////////////////////
    if (level === 0) {
        cellsNumber = 100;
        cellsClass = 'cell-easy';
    } else if (level === 1) {
        cellsNumber = 81;
        cellsClass = 'cell-medium';
    } else {
        cellsNumber = 49;
        cellsClass = 'cell-hard';
    }
    ////////////////////////////////////////////////////
    const bombsList = getRandomUniqueNumber(1, cellsNumber, 16);

    outputBanner.innerHTML = "Welcome! Click a cell to get a point!";
    gridElement.innerHTML = "";
    gridElement.classList.remove('game-over');
    ////////////////////////////////////////////////////////
    for (let index = 0; index < cellsNumber; index++) {
        const newCell = createElement('div', 'cell ' + cellsClass, ``);
        const isThisABomb = bombsList.includes(index + 1);

        if (isThisABomb) {
            newCell.classList.add('bomb');
            newCell.innerHTML = '<p><i class="fa-solid fa-bomb"></i></p>';
        }

        newCell.addEventListener('click', function () {
            if (!isGameOver) {
                if (isThisABomb) { // user clicked a bomb
                    isGameOver = true;
                    outputBanner.innerHTML = "Game over, your score is: " + userScore;
                    gridElement.classList.add('game-over');
                } else { // not a bomb
                    userScore++;
                    outputBanner.innerHTML = "You scored a point! Your score is: " + userScore;
                    this.classList.add('active'); // this === newCell
                    this.innerHTML = '<img src="./img/flower.png" alt="A tiny little flower">';

                    if (userScore === cellsNumber - bombsList.length) {
                        outputBanner.innerHTML = "WOW!! YOU WON!! HIGHSCORE: " + userScore;
                        isGameOver = true;
                    }
                }
            } else {
                alert('Game is over, please start a new game!');
            }
        }, { once: true });

        gridElement.appendChild(newCell);
    }
}

//////////////////////////////////////////////
function createElement(tagName, className, htmlContent) {
    const htmlElement = document.createElement(tagName);
    htmlElement.className = className;
    htmlElement.innerHTML = htmlContent;
    return htmlElement;
}

///////////////////////////////////////////
function getRandomUniqueNumber(minNum, maxNum, elements) {
    const numbersList = [];

    if ((maxNum - minNum) < elements) {
        return [];
    }

    while (numbersList.length < elements) {
        const newRandomNumber = getRandomInt(minNum, maxNum);
        if (!numbersList.includes(newRandomNumber)) {
            numbersList.push(newRandomNumber);
        }
    }

    return numbersList;
}

////////////////////////////////////
function getRandomInt(minumNumber, maximumNumber) {
    const randomNumber = Math.floor(Math.random() * (maximumNumber - minumNumber + 1) + minumNumber);

    return randomNumber;
}