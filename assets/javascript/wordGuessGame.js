// Create constant array of random words to guess
const cities = ["OTTAWA", "TORONTO", "MONTREAL", "QUEBEC", "CALGARY", "EDMONTON", "VANCOUVER", "VICTORIA", "HALIFAX", "WINNIPEG", "SASKATOON", "REGINA", "WHITEHORSE", "YELLOWKNIFE"];
var playerScore = 0;
var wrongLetters = [];
var wrongCounter = 0;

// When player clicks start button...
function playGame() {

// Pick a word randomly from words-array and set as secret word
var secretWord = cities[Math.floor(Math.random() * cities.length)];

// Split secret word into individual letters
var secretWordLetters = secretWord.split("");

// Create guessing outline based on array length and show on screen
var wordOutline = [];
    for(var ol = 0; ol < secretWordLetters.length; ol++) {
        wordOutline.push("_ ");
    }// end for-loop

    document.getElementById("wordOutline").innerHTML = wordOutline;

// Create counter to track letters left to guess
var lettersRemaining = secretWord.length;

// Get player guess on key press

    document.onkeydown = function getGuess (e) {

    console.log(secretWord);





    var letter = String.fromCharCode(e.which);

    // Check if letters remain to be guessed
    if (lettersRemaining > 1) {
        


        //Check if letter has been guessed already
        if (wordOutline.includes(letter) == true || wrongLetters.includes(letter) == true) {
            alert("you've already guessed this letter!");
            return;
        }//end if-loop
        
        // As long as letter has not been guessed already 
        // proceed to check if letter is in secret word
        else {
        // Check if guess is in SecretWordLetters array using for-loop with nested if - update result on screen
            for (var i = 0; i < secretWordLetters.length; i++) {

                if (secretWordLetters.includes(letter) == false) {  
                    wrongLetters.push(letter);
                    wrongCounter++;
                    if (wrongCounter >4) {
                        letter = [];
                        playerScore = 0;
                        wrongCounter = 0;
                        wrongLetters = [];
                        document.getElementById("wrongLetters").innerHTML = wrongLetters;
                        document.getElementById("scoreTracker").innerHTML = playerScore + "/5";
                        alert("Oops, too many wrong guesses... The city we were looking for is " + secretWord);  
                        secretWord = []; 
                        playGame();     
                    }//end if
                    else {
                    document.getElementById("wrongLetters").innerHTML = wrongLetters;
                    return;
                    }//end else
                }// end outer if

                else if (letter===secretWordLetters[i]) {
                    wordOutline[i] = letter;
                    document.getElementById("wordOutline").innerHTML = wordOutline;
                    lettersRemaining--;
                }//end else if

            }//end for-loop
        
        }//end else
    
    } //end if-loop

    else {
        // increase score and update to screen
        playerScore++; 
        //Check if score greater than 4, if it is alert winner and reset
        if (playerScore >4) {
            letter = [];
            secretWord = [];
            playerScore = 0;
            wrongCounter = 0;
            wrongLetters = [];
            document.getElementById("wrongLetters").innerHTML = wrongLetters;
            document.getElementById("scoreTracker").innerHTML = playerScore + "/5";   
            alert("Good job! You're a winner!");
            playGame();     
        }//end if
        else {
            document.getElementById("scoreTracker").innerHTML = playerScore + "/5";   
            // reset letters remaining counter, wrong counter and wrong letter range, update to screen
            lettersRemaining = 0;
            wrongCounter = 0;
            wrongLetters = [];
            document.getElementById("wrongLetters").innerHTML = wrongLetters;

            // call playGame() for a new round
            playGame();
        }//end else
    }//end outer else
    }//end getGuess function

}//end function playGame


                    // //Check if wrongCount is higher than 4, if it is, reset score and launch a new game

