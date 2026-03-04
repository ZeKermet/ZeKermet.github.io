const playersListElem = document.getElementById('players-container');
const addPlayerBtn = document.getElementById('add-player-btn');

const playerTurnName = document.getElementById('player-turn-name');
const gameButton = document.getElementById('game-button');
const colorCircle = document.getElementById('color-circle');
const gameLevelLabel = document.getElementById('game-level');
const colorTarget = document.getElementById('color-target');

const gameResultsDisplay = document.getElementById('game-results');
const gameResultList = document.getElementById('game-results-list');
const playAgainBtn = document.getElementById('play-again-btn');


// -----------------------------------------

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink', 'brown', 'black'];
const usedPlayerColors = [];

const standardSpeed = 500;

const playersList = [];

let gameHasStarted = false;
let gameIsRunning = false;
let playerAddCount = 0;
let colorIndex = 0;
let playerIndex = 0;

let level = 1;
const endLevel = 20;
let currentTurn = null;


addPlayerBtn.addEventListener('click', () => {
    playerAddCount++;

    const newPlayer = {
        id: playerAddCount,
        name: "",
        color: nextAvailColor(),
        name: '',
        points: 0,
    }

    addNewPlayerElement(newPlayer);

    playersList.push(newPlayer);
    

    playersList.forEach(player => {
        document.getElementById(`player-${player.id}`).addEventListener('click', (e) => {
            if (e.target.className === "player-color" && !gameHasStarted) {
                const playerColor = e.target;
    
                let index = usedPlayerColors.indexOf(player.color);
                const nextColor = nextChangeColor(player.color);
    
                player.color = nextColor;
                usedPlayerColors[index] = nextColor;
                playerColor.style.background = nextColor;
            }

            if (e.target.className.includes("confirm-name-entry")) {
                const playerNameEntry = e.target.parentElement.getElementsByClassName('name-entry')[0];
                const playerNameLabel = e.target.parentElement.parentElement.getElementsByClassName('player-name')[0];
                const name = playerNameEntry.value;

                player.name = name;

                playerNameLabel.innerHTML = name;
                e.target.parentElement.style.display = "none";
                playerNameLabel.style.display = "block";
            }

            if (e.target.className.includes("edit-name") && !gameHasStarted) {
                const playerNameEntryContainer = e.target.parentElement.parentElement.getElementsByClassName("name-entry-container")[0];
                const playerNameLabel = e.target.parentElement.parentElement.getElementsByClassName('player-name')[0];

                playerNameEntryContainer.style.display = "flex";
                playerNameLabel.style.display = "none";
            }
        });
    });
});



function nextAvailColor() {
    let newColor = '';
    
    for (let i = 0; i < colors.length; i++) {

        if (usedPlayerColors.length === 0) {
            newColor = colors[i];
            usedPlayerColors.push(newColor);
            break;
        } else {
            if (!colorIsTaken(colors[i])) {
                newColor = colors[i];
                usedPlayerColors.push(newColor);
                break;
            }
        }
    }

    return newColor;
}


function colorIsTaken(color) {
    return (usedPlayerColors.indexOf(color) !== -1);
}


function addNewPlayerElement(player) {
    playersListElem.innerHTML += `
        <player id="player-${player.id}">
            <div class="player-info">
                <h3><i class="fa-solid fa-pen-to-square edit-name"></i></h3>
                <div class="player-color"></div>
                <h3 class="player-name">Enter Name</h3>

                <div class="name-entry-container">
                    <input placeholder="Enter name" class="name-entry" />
                    <i class="fa-solid fa-check confirm-name-entry"></i>
                </div>
            </div>
            
            <h3 class="points">Points: <span class="points-count">0</span></h3>
        </player>
        `;
    
    player.element = getPlayerElement(player);

    const playerColorStyle = getPlayerColorStyle(player);
    playerColorStyle.background = player.color;
}

function getPlayerElement(player) {
    return document.getElementById(`player-${player.id}`);
}

function getPlayerColorStyle(player) {
    return getPlayerElement(player).getElementsByClassName('player-color')[0].style;
}


function nextChangeColor(color) {
    let returnColor = '';
    let initialIndex = colors.indexOf(color);
    let index = initialIndex + 1;

    if (!(index < colors.length)) {
        index = 0;
    }

    while (index !== initialIndex) {
        if (!(index < colors.length)) {
            index = 0;
        }

        if (colorIsTaken(colors[index])) {
            index++;
        } else {
            returnColor = colors[index];
            break;
        }
    }


    if (index === initialIndex) {
        returnColor = color;
    } 

    return returnColor;
}



// ------------------- Game Starts -------------------

gameButton.addEventListener('click', () => {
    document.getElementsByClassName('turns-container')[0].style.visibility = "visible";
    if (gameButton.innerHTML === "Start") {
        const editsList = document.getElementsByClassName('fa-solid fa-pen-to-square edit-name');

        for (let i=0; i < editsList.length; i++) {
            editsList[i].parentElement.style.display = "none";
        }

        addPlayerBtn.style.display = "none";

        gameButton.style.background = "Red";
        gameButton.innerHTML = "Stop Cycle";

        let randomColorIndex = Math.floor(Math.random(1) * (colors.length-1));

        colorTarget.innerHTML = colors[randomColorIndex];
        colorTarget.style.color = colors[randomColorIndex];

        currentTurn = playersList[playerIndex];
        playerTurnName.innerHTML = playersList[playerIndex].name;
        playerTurnName.style.color = playersList[playerIndex].color;

        toggleGame();

    } else if (gameButton.innerHTML === "Stop Cycle") {
        if (currentTurn === playersList[playersList.length - 1]) {
            if (level === endLevel) {
                gameResultsDisplay.style.display = "block";
                playerTurnName.parentElement.parentElement.style.display = "none";
                gameButton.style.display = "none";

            } else {
                gameButton.innerHTML = "Next Level";
                gameButton.style.background = "Blue";
            }
            
            
        } else {
            gameButton.style.background = "Green";
            gameButton.innerHTML = "Start";
            
        }

        if (colorCircle.style.background === colorTarget.innerHTML) {
            playersList[playerIndex].points++;
            increasePlayerPoint(playersList[playerIndex], playersList[playerIndex].points);
        }

        playerIndex++;

        if (!(playerIndex < playersList.length)) {
            playerIndex = 0;
        }

        playerTurnName.innerHTML = playersList[playerIndex].name;
        playerTurnName.style.color = playersList[playerIndex].color;

        toggleGame();

        if (currentTurn === playersList[playersList.length - 1] && level === endLevel) {
            displayGameResults();
        }

    } else if (gameButton.innerHTML === "Next Level") {
        level++;
        gameLevelLabel.innerHTML = level;

        colorCircle.style.background = "blue";
        
        gameButton.innerHTML = "Start";
        gameButton.style.background = "green";
    }

});

function increasePlayerPoint(player, points) {
    const playerPoint = document.getElementById(`player-${player.id}`).getElementsByClassName('points-count')[0];
    playerPoint.innerHTML = points;
}


function toggleGame() {
    if (!gameHasStarted) {
        gameHasStarted = true;
    }
    if (!gameIsRunning) {
        gameIsRunning = true;

        let gameSpeed = Math.floor(standardSpeed * Math.pow(0.9, level-1));
        changeCircleColor(gameSpeed);
    } else {
        gameIsRunning = false;
    }
}

function changeCircleColor(gameSpeed) {
    if (gameIsRunning) {
        colorCircle.style.background = colors[colorIndex];

        colorIndex++;

        if (!(colorIndex < colors.length)) {
            colorIndex = 0;
        }

        setTimeout(() => {changeCircleColor(gameSpeed)}, gameSpeed);
    }
    
}

function displayGameResults() {
    const newPlayersList = [];
    playersList.forEach(player => {
        newPlayersList.push(player);
    });

    for (let i=0; i < 5; i++) {
        let greatestPlayer = null;
        let greatestPlayerIndex = null;

        if (newPlayersList.length === 0) {
            break;

        } else {
            for (let g=0; g < newPlayersList.length; g++) {
                if (greatestPlayer === null) {
                    greatestPlayer = newPlayersList[g];
                }
                else if (greatestPlayer.points < newPlayersList[g].points) {
                    greatestPlayer = newPlayersList[g];
                    greatestPlayerIndex = g;
                }

            }
    
            gameResultList.innerHTML += `
                <h2 class="player-result"><span class="player-ranking">${i+1}.</span> <span class="player-name-result" style="color: ${greatestPlayer.color}">${greatestPlayer.name}</span> <span class="player-points-result">${greatestPlayer.points}</span></h2>
            `;

            newPlayersList.splice(greatestPlayerIndex, 1);
        }
    }

    
    playAgainBtn.addEventListener('click', () => {
        window.location.reload();
    });
}

// At level "???" make it so that the circle randomly chooses
// colors, but the acutal color that you're supposed to pick is
// the text in the middle. That text would probably be a bunch
// of question marks