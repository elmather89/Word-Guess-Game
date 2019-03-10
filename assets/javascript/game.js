//load a word for user to guess
//if user types a letter that is a letter value of the word, display on screen
//if user guesses more than 10 times and does not get all the letter values to show = game over
    //alert 'game over'
//if user guesses all values withing 10 keystrokes = win
    //display album artwork and play music


//on any key-click, start the game


//load first value in array

//if user keys corresponding value, display

    //else if, subtract from remaing chances


// VARIABLES===============================================

//var jolene = ["j", "o", "l", "e", "n", "e"];
//var userGuess = prompt("Guess a letter!");
//var userGuessLower = userGuess.toLowerCase();
//var score = 0;
//var remaining = 0;

// FUNCTIONS =================
/*
if (jolene.indexOf(userGuessLower) === -1) {
    alert("Nope, try again!");
}
else {
    alert("Great job!");
}

for (var i = 0; i < jolene.length; i++) {
    console.log(userGuessLower);
    
}*/

$(document).ready(function() {

// VARIABLES ==================================

var jolene = ["j", "o", "l", "e", "n", "e"];

for (var i = 0; i <= (jolene.length - 1); i++) {
    var letterBtn = $("<button>");
    letterBtn.addClass("letter-button letter letter-button-color"); 
    letterBtn.attr("data-letter", jolene[i]);
    letterBtn.text(jolene[i]);
    $("#current-word").append(letterBtn);
}

};