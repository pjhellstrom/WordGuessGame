// Create constant array of random words, guessing array
const countries = ["Canada", "USA", "Mexico"];
var wordOutline = [];
// Pick a word randomly from words-array and set as secret word
var secretWord = countries[Math.floor(Math.random() * countries.length)];
// Create outline based on length of string of word using for-loop
for(i = 0; i < secretWord.length; i++) {
    wordOutline.push["_"];
}
// Prompt player to guess letter
var guessArray = [];
document.addEventListener("keydown",(event)) {
    var letter = String.fromCharCode(event.letter)
}
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