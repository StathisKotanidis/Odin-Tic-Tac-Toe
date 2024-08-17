const startGameBtn = document.querySelector("#start-game-button");
const startingScreen = document.querySelector(".starting-screen");
const playersSectionScreen = document.querySelector(".players-section");
const playerOneLeftArrowBtn = document.querySelector(".player-one-left");
const playerOneRightArrowBtn = document.querySelector(".player-one-right");
const playerTwoLeftArrowBtn = document.querySelector(".player-two-left");
const playerTwoRightArrowBtn = document.querySelector(".player-two-right");
const playerOneMarker = document.querySelector("#player-one-marker");
const playerTwoMarker = document.querySelector("#player-two-marker");
const showGameboardBtn = document.querySelector("#proceed-to-gameboard");
const playerOneName = document.querySelector("#player-one-name");
const playerTwoName = document.querySelector("#player-two-name");
const gameBoardContainer = document.querySelector(".gameboard-container");
const playerOneNamePlaceholder = document.querySelector(
  "#player-one-name-placeholder"
);
const playerTwoNamePlaceholder = document.querySelector(
  "#player-two-name-placeholder"
);
const playerOneMarkerPlaceholder = document.querySelector(
  "#player-one-marker-placeholder"
);
const playerTwoMarkerPlaceholder = document.querySelector(
  "#player-two-marker-placeholder"
);
const currentPlayer = document.querySelector("#current-player");
const gameBoard = document.querySelector(".gameboard");
const resetBtn = document.querySelector("#reset-button");
let playerOneScore = document.querySelector("#player-one-score");
let playerTwoScore = document.querySelector("#player-two-score");

const gameboard = [];

function Player(name, marker) {
  this.name = name;
  this.marker = marker;
}

let player1;
let player2;

startGameBtn.addEventListener("click", () => {
  startingScreen.style.display = "none";
  playersSectionScreen.style.display = "grid";
});

// Changing the marker everytime i press a left/right arrow
playerOneLeftArrowBtn.addEventListener("click", () => {
  playerOneMarker.innerHTML === "X"
    ? (playerOneMarker.innerHTML = "O")
    : (playerOneMarker.innerHTML = "X");
  updateButtonState();
});

playerOneRightArrowBtn.addEventListener("click", () => {
  playerOneMarker.innerHTML === "X"
    ? (playerOneMarker.innerHTML = "O")
    : (playerOneMarker.innerHTML = "X");
  updateButtonState();
});

playerTwoLeftArrowBtn.addEventListener("click", () => {
  playerTwoMarker.innerHTML === "X"
    ? (playerTwoMarker.innerHTML = "O")
    : (playerTwoMarker.innerHTML = "X");
  updateButtonState();
});

playerTwoRightArrowBtn.addEventListener("click", () => {
  playerTwoMarker.innerHTML === "X"
    ? (playerTwoMarker.innerHTML = "O")
    : (playerTwoMarker.innerHTML = "X");
  updateButtonState();
});

/* a function that disables/enables the button id the markers are equal/not equal
 and updates the context of the button each time */
function updateButtonState() {
  if (playerOneMarker.innerHTML === playerTwoMarker.innerHTML) {
    showGameboardBtn.setAttribute("disabled", true);
    showGameboardBtn.innerHTML = `<i class='bx bxs-lock-alt'></i>`;
  } else {
    showGameboardBtn.removeAttribute("disabled");
    showGameboardBtn.innerHTML = "Let's play";
  }
}

/*disable the current content and enable the gameboard 
plus assigning my data to my players objects */
showGameboardBtn.addEventListener("click", (e) => {
  e.preventDefault();
  playersSectionScreen.style.display = "none";

  let player1Name = playerOneName.value;
  let player2Name = playerTwoName.value;
  let player1Marker = playerOneMarker.innerHTML;
  let player2Marker = playerTwoMarker.innerHTML;

  player1 = new Player(player1Name, player1Marker);
  player2 = new Player(player2Name, player2Marker);

  gameBoardContainer.style.display = "grid";

  //Updating Players Names/Markes based on the input i chose in the previous section
  playerOneNamePlaceholder.innerHTML = player1.name;
  playerTwoNamePlaceholder.innerHTML = player2.name;
  playerOneMarkerPlaceholder.innerHTML = player1.marker;
  playerTwoMarkerPlaceholder.innerHTML = player2.marker;

  /**************** The actual game functions ****************/

  //1.This function created the gameboard and stores that in my gameboard array

  function createGameBoard() {
    for (let i = 0; i <= 8; i++) {
      let gameboardDiv = document.createElement("div");
      gameboardDiv.className = `gameboard-div div-${i + 1}`;
      gameboard.push(gameboardDiv);
      gameBoard.appendChild(gameboardDiv);
    }
  }

  // 2. Randomly chooses which player goes first and return that players object

  function getRandomPlayer(obj1, obj2) {
    let startingPlayer = Math.random() < 0.5 ? player1 : player2;
    currentPlayer.innerHTML = `${startingPlayer.name}'s turn`;
    return startingPlayer;
  }

  /*3. This function allows the player to pick his 'div' 
  and switch after that*/

  function playerMove() {
    let current_player = getRandomPlayer(player1, player2);

    gameboard.forEach((cell) => {
      cell.addEventListener("click", (e) => {
        if (
          e.target.classList.contains("gameboard-div") &&
          !e.target.classList.contains("disabled")
        ) {
          e.target.innerHTML = current_player.marker;
          e.target.classList.add("disabled");

          if (winCondition(player1, player2)) {
            disableBoard();
            updateScore();
            clearBoard();
            return;
          }

          if (current_player === player1) {
            current_player = player2;
          } else {
            current_player = player1;
          }
          currentPlayer.innerHTML = `${current_player.name}'s turn`;
        }
      });
    });
  }

  /* 4.This function checks for every possible win condition
  and if not then we get a draw*/

  function winCondition(obj1, obj2) {
    if (
      gameboard[0].innerHTML === obj1.marker &&
      gameboard[1].innerHTML === obj1.marker &&
      gameboard[2].innerHTML === obj1.marker
    ) {
      currentPlayer.innerHTML = `${obj1.name} won!`;
      return true;
    } else if (
      gameboard[0].innerHTML === obj2.marker &&
      gameboard[1].innerHTML === obj2.marker &&
      gameboard[2].innerHTML === obj2.marker
    ) {
      currentPlayer.innerHTML = `${obj2.name} won!`;
      return true;
    } else if (
      gameboard[3].innerHTML === obj1.marker &&
      gameboard[4].innerHTML === obj1.marker &&
      gameboard[5].innerHTML === obj1.marker
    ) {
      currentPlayer.innerHTML = `${obj1.name} won!`;
      return true;
    } else if (
      gameboard[3].innerHTML === obj2.marker &&
      gameboard[4].innerHTML === obj2.marker &&
      gameboard[5].innerHTML === obj2.marker
    ) {
      currentPlayer.innerHTML = `${obj2.name} won!`;
      return true;
    } else if (
      gameboard[6].innerHTML === obj1.marker &&
      gameboard[7].innerHTML === obj1.marker &&
      gameboard[8].innerHTML === obj1.marker
    ) {
      currentPlayer.innerHTML = `${obj1.name} won!`;
      return true;
    } else if (
      gameboard[6].innerHTML === obj2.marker &&
      gameboard[7].innerHTML === obj2.marker &&
      gameboard[8].innerHTML === obj2.marker
    ) {
      currentPlayer.innerHTML = `${obj2.name} won!`;
      return true;
    } else if (
      gameboard[0].innerHTML === obj1.marker &&
      gameboard[3].innerHTML === obj1.marker &&
      gameboard[6].innerHTML === obj1.marker
    ) {
      currentPlayer.innerHTML = `${obj1.name} won!`;
      return true;
    } else if (
      gameboard[0].innerHTML === obj2.marker &&
      gameboard[3].innerHTML === obj2.marker &&
      gameboard[6].innerHTML === obj2.marker
    ) {
      currentPlayer.innerHTML = `${obj2.name} won!`;
      return true;
    } else if (
      gameboard[1].innerHTML === obj1.marker &&
      gameboard[4].innerHTML === obj1.marker &&
      gameboard[7].innerHTML === obj1.marker
    ) {
      currentPlayer.innerHTML = `${obj1.name} won!`;
      return true;
    } else if (
      gameboard[1].innerHTML === obj2.marker &&
      gameboard[4].innerHTML === obj2.marker &&
      gameboard[7].innerHTML === obj2.marker
    ) {
      currentPlayer.innerHTML = `${obj2.name} won!`;
      return true;
    } else if (
      gameboard[2].innerHTML === obj1.marker &&
      gameboard[5].innerHTML === obj1.marker &&
      gameboard[8].innerHTML === obj1.marker
    ) {
      currentPlayer.innerHTML = `${obj1.name} won!`;
      return true;
    } else if (
      gameboard[2].innerHTML === obj2.marker &&
      gameboard[5].innerHTML === obj2.marker &&
      gameboard[8].innerHTML === obj2.marker
    ) {
      currentPlayer.innerHTML = `${obj2.name} won!`;
      return true;
    } else if (
      gameboard[0].innerHTML === obj1.marker &&
      gameboard[4].innerHTML === obj1.marker &&
      gameboard[8].innerHTML === obj1.marker
    ) {
      currentPlayer.innerHTML = `${obj1.name} won!`;
      return true;
    } else if (
      gameboard[0].innerHTML === obj2.marker &&
      gameboard[4].innerHTML === obj2.marker &&
      gameboard[8].innerHTML === obj2.marker
    ) {
      currentPlayer.innerHTML = `${obj2.name} won!`;
      return true;
    } else if (
      gameboard[2].innerHTML === obj1.marker &&
      gameboard[4].innerHTML === obj1.marker &&
      gameboard[6].innerHTML === obj1.marker
    ) {
      currentPlayer.innerHTML = `${obj1.name} won!`;
      return true;
    } else if (
      gameboard[2].innerHTML === obj2.marker &&
      gameboard[4].innerHTML === obj2.marker &&
      gameboard[6].innerHTML === obj2.marker
    ) {
      currentPlayer.innerHTML = `${obj2.name} won!`;
      return true;
    }
    return false;
  }

  /* 5. A function to disable board after a win condition is achieved*/
  function disableBoard() {
    gameBoard.classList.add("disabled-board");
  }

  /*6. A function that updates the score */
  function updateScore() {
    if (winCondition(player1, player2)) {
      let currentPlayerOneScore = parseInt(playerOneScore.innerText);
      let newPlayerOneScore = currentPlayerOneScore + 1;
      playerOneScore.innerHTML = newPlayerOneScore;
    } else {
      let currentPlayerTwoScore = parseInt(playerTwoScore.innerText);
      let newPlayerTwoScore = currentPlayerTwoScore + 1;
      playerTwoScore.innerHTML = newPlayerTwoScore;
    }
  }

  /* 6. A function that resets the board */
  function clearBoard() {
    resetBtn.addEventListener("click", () => {
      gameboard.forEach((cell) => {
        cell.innerHTML = "";
        cell.classList.remove("disabled");
      });
      gameBoard.classList.remove("disabled-board");
      playerMove(); //bug
    });
  }

  /* 7. The last function that is the actual game.
  It combine all the functions above*/
  function playGame() {
    createGameBoard();
    playerMove();
  }

  playGame();
});
