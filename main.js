const startGameBtn = document.querySelector('#start-game-button')
const startingScreen = document.querySelector('.starting-screen')
startGameBtn.addEventListener('click', () => {
    startingScreen.style.display = 'none'
})