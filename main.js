function Player(name, marker) {
  this.name = name;
  this.marker = marker;
}
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
const playerOneName = document.querySelector("#player-one-name");
const playerTwoName = document.querySelector("#player-two-name");

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

let player1Name;
let player2Name;
let player1Marker;
let player2Marker;
let player1;
let player2;

/*disable the current content and enable the gameboard 
plus assigning my data to my players objects */

showGameboardBtn.addEventListener("click", (e) => {
  e.preventDefault();
  playersSectionScreen.style.display = "none";

  player1Name = playerOneName.value;
  player2Name = playerTwoName.value;
  player1Marker = playerOneMarker.innerHTML;
  player2Marker = playerTwoMarker.innerHTML;

  player1 = new Player(player1Name, player1Marker);
  player2 = new Player(player2Name, player2Marker);
});

const gameboard = [];
