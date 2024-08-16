const startGameBtn = document.querySelector("#start-game-button");
const startingScreen = document.querySelector(".starting-screen");
const playersSectionScreen = document.querySelector(".players-section");
startGameBtn.addEventListener("click", () => {
  startingScreen.style.display = "none";
  playersSectionScreen.style.display = "grid";
});

// Changing the marker everytime i press a left/right arrow
const playerOneLeftArrowBtn = document.querySelector(".player-one-left");
const playerOneRightArrowBtn = document.querySelector(".player-one-right");
const playerTwoLeftArrowBtn = document.querySelector(".player-two-left");
const playerTwoRightArrowBtn = document.querySelector(".player-two-right");
const playerOneMarker = document.querySelector("#player-one-marker");
const playerTwoMarker = document.querySelector("#player-two-marker");
const showGameboardBtn = document.querySelector("#proceed-to-gameboard");

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

//disable the current content and enable the gameboard
showGameboardBtn.addEventListener("click", () => {
  playersSectionScreen.style.display = "none";
});

const gameboard = [];

let player1 = {};

let player2 = {};
