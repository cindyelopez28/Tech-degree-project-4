/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

//

const lives = document.querySelectorAll(".tries img"); 
const ul = document.getElementById("phrase").firstElementChild;
const startGameButton = document.getElementById("btn__reset"); 
let game;

//Create a new game object when start button is clicked and show display keys on screen
startGameButton.addEventListener("click", () =>{
    game = new Game();
    game.startGame();
})

const keyboardKeys = document.querySelectorAll('.key');

keyboardKeys.forEach(button => {
    button.addEventListener('click', () =>{
        game.handleInteraction(button)
        console.log(button);
        }
    )
})