// Create constant array of random words, guessing array
const countries = ["CANADA", "USA", "MEXICO"];


// When player clicks start...
function playGame() {

// Pick a word randomly from words-array and set as secret word
var secretWord = countries[Math.floor(Math.random() * countries.length)];

// Split secret word into individual letters
var secretWordLetters = secretWord.split("");
console.log(secretWordLetters);

// Create guessing outline based on array length
var wordOutline = [];
for(var ol = 0; ol < secretWordLetters.length; ol++) {
    wordOutline.push("_ ");
}// end for-loop

// Create counter to track letters left to guess
var lettersRemaining = secretWord.length;

// Main function 

var wrongLetters = [];
var wrongCounter = 0;
console.log(lettersRemaining);
// debugger;

// Get player guess
if (lettersRemaining < 0) {

    alert("WINNER!");
    return;

}//end main if-loop

else if (lettersRemaining > 0) {
    document.onkeydown = function getGuess (e) {
        var letter = String.fromCharCode(e.which);
        console.log(letter);
    
    //Check if letter has been guessed already
    if (wordOutline.includes(letter) == true || wrongLetters.includes(letter) == true) {
        alert("you've already guessed this letter!");
        return;
    }
    
    // As long as letter has not been guessed already 
    // proceed to check if letter is in secret word
    else {
    // Check if guess is in SecretWordLetters array using for-loop and if
        for (var i = 0; i < secretWordLetters.length; i++) {
            if (secretWordLetters.includes(letter) == false) {
                wrongLetters.push(letter);
                wrongCounter++;
                console.log("wrongCounter: "+ wrongCounter);
                console.log("wrongLetters: "+ wrongLetters);
                return;
            }
            else if (letter===secretWordLetters[i]) {
                console.log("name: " + secretWordLetters[i]); //replace with push to correct array
                wordOutline[i] = letter;
                // wordOutline.splice(i, i, letter);
                lettersRemaining--;
                console.log("wordOutline: " + wordOutline);
            }//end else if
        }//end for-loop
    
        console.log(lettersRemaining)
    
    }//end else
    
    }//end getGuess function
}// end main else if function

}//end function playGame