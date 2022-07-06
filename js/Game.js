/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

//STEP 3//

//class includes constructor that sets up the game properties and phrases, and sets up random phrases to return//
//startGame is created to hide the start screen overlay and calls us getRandomPhrase function/

class Game {
    constructor(){
        this.missed = 0;
        this.phrases = [
            new Phrase("I'm ready, I'm ready"),
            new Phrase("The best time to wear a striped sweater is all the time!"),
            new Phrase("F is for friends who do stuff together"),
            new Phrase("Is mayonnaise an instrument?"),
            new Phrase("I wumbo, you wumbo, he she we wumbo")
        ];
        this.activePhrase = null;
 }

    getRandomPhrase(){
        let index = Math.floor(Math.random() * this.phrases.length);
        return this.phrases[index];
    }

    startGame(){
        let overlay = document.getElementById("overlay");
        overlay.style.display = "none";
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    }

    checkForWin(){
        const hiddenLetters = document.querySelectorAll(".hide");
        if(hiddenLetters.length === 0){
            return true;
        }else{
            return false;
        }
    }
   

    gameOver(gameWon){
        const overlayGamePage = document.querySelector("#overlay")
        overlayGamePage.style.display = "flex";
            if(gameWon === true){
                document.querySelector("#game-over-message").textContent = "Congratulations, you have won the game!";
                overlayGamePage.className = ("win");
            }else{
                document.querySelector("#game-over-message").textContent = "Sorry, better luck next time!";
                overlayGamePage.className = ("lose");
        }
        this.resetGame();
    }


//handleInteraction verifies if the buttons clicked matches letters in a phrase//
//if player selects wrong letter, a life (liveheart.png image) is removed and set to gameOver after 5 misses//

handleInteraction(button) {
    button.disabled = true;
    if (this.activePhrase.checkLetter(button.innerHTML)) {
        this.activePhrase.showMatchedLetter(button.innerHTML);
        button.classList.add('chosen');
            if(this.checkForWin() === true) {
                this.gameOver(true);
            };
    } else {            
        button.classList.add('wrong');
        this.removeLife();
    }
}
removeLife(){
    lives[this.missed].src = "images/lostHeart.png";
    this.missed += 1;
    if (this.missed >= 5){
        this.gameOver();
}
}


    resetGame(){
                ul.innerHTML = '';
            keyboardKeys.forEach(button => {
                button.classList.remove('wrong');
                button.classList.remove('chosen');
                button.removeAttribute('disabled');
            })
                lives.forEach(lives =>{
                    lives.src = "images/liveHeart.png";
            })
    }}    