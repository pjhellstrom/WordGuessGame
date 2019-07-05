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
var letter = "";
var name = "";

document.onkeydown = function getGuess (e) {
    var letter = String.fromCharCode(e.which);
    console.log(letter);
    
// Check if guess is in SecretWordLetters array using if
function findLetterInArray() {

    for (var i = 0; i < secretWordLetters.length; i++) {
        name = secretWordLetters[i];
        if(letter==name) {
            console.log("name: " + name);
            break;
        }//end if
    }//end for-loop
    
}//end function
}//end function

// Find matches from player input against secret word. Put into correct array or incorrect array


// Create variable array of guessed letters that match the word for tracking in game
var correctLetters = [];

correctLetters.push(letter);

// Create variable array of guessed letters that don't match the word
var incorrectLetters =[];

incorrectLetters.push(letter);

//Replace outline index with correct letter index
secretWord.indexOf(letter);


//console.logs - to remove!!
console.log("secretWord: " + secretWord)
console.log("secretWord.length: " + secretWord.length)
console.log("secretWordLetters: " + secretWordLetters)
console.log("i: " + i)
console.log("name: " + name)
console.log("wordOutline: " + wordOutline)
console.log("letter: " + letter)