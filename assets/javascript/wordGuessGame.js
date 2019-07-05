// Create constant array of random words, guessing array
const countries = ["CANADA", "USA", "MEXICO"];


// When player clicks start...


// Pick a word randomly from words-array and set as secret word
var secretWord = countries[Math.floor(Math.random() * countries.length)];

// Split secret word into individual letters
var secretWordLetters = secretWord.split("");
console.log(secretWordLetters);

// Create guessing outline based on array length
var wordOutline = [];
for(var i = 0; i < secretWordLetters.length; i++) {
    wordOutline.push("_");
}

// Display outline on screen
// document.getElementById("guessingOutline") = wordOutline[].value

// Get player guess
var guessArray = [];

document.onkeydown = function getGuess (e) {
    var letterCode = "";
    var letterKey = "";
    letter = String.fromCharCode(e.which);
    console.log(letter)
}//end function

// Check if guess is in SecretWordLetters array using if

if (secretWordLetters.includes("letter") === true) {
    alert("Winner");
}// end if

// if (letter == )

// document.onkeydown = function getGuess(ev) {
//     var letter = String.fromCharCode(ev.letter);
// }// end function

// Find matches from player input against secret word. Put into correct array or incorrect array


// Create variable array of guessed letters that match the word for tracking in game
var correctLetters = [];

// Create variable array of guessed letters that don't match the word
var incorrectLetters =[];

//Prompt user to guess a letter


//console.logs - to remove!!
console.log(secretWord)
console.log(secretWord.length)
console.log(i)
console.log(wordOutline)

//outline creation not working