/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

//STEP 2//
//global variables at the top//

const addPhrase = document.getElementById("phrase");
const keyLetter = document.getElementsByClassName("key");
const phraseTitle = document.getElementsByClassName("letter");

//create the phrase class//
class Phrase {
  constructor(phrase) {
    this.phrase = phrase.toLowerCase(); 
  }

  // create methods to class//
// create li elements and classes to each letter//
  
  addPhraseToDisplay() {
    for (let i = 0; i < this.phrase.length; i++) {
      if (this.phrase[i] === " ") {
        let li = document.createElement("li");
        li.setAttribute("class", "space");
        let letter = document.createTextNode(" ");
        li.appendChild(letter);
        addPhrase.firstElementChild.appendChild(li);
      } else {
        let li = document.createElement("li");
        li.setAttribute("class", `hide letter ${this.phrase[i]}`);
        let letter = document.createTextNode(`${this.phrase[i]}`);
        li.appendChild(letter);
        addPhrase.firstElementChild.appendChild(li);
      }
    }
  }

  // create check letter method to ensure selected letter matches a letter in the phrase
  checkLetter(letter) {
    for (let i = 0; i < this.phrase.length; i++) {
      if (letter === this.phrase[i]) {
        this.showMatchedLetter(this.phrase[i]);
        return true;
      }
    }
  }

  //If letter matches, use showMatchedletter to reveal letter(s)
  showMatchedLetter(matchedLetter) {
    for (let i = 0; i < phraseTitle.length; i++) {
      if (phraseTitle[i].innerHTML === matchedLetter) {
        phraseTitle[i].className = `show letter ${matchedLetter}`;
      }
    }
  }
}