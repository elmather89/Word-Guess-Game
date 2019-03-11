

// VARIABLES===============================================

var jolene = ["j", "o", "l", "e", "n", "e"];
var userGuess = prompt("Guess a letter!");
var userGuessLower = userGuess.toLowerCase();
var score = 0;
var remaining = 0;

// FUNCTIONS =================

if (jolene.indexOf(userGuessLower) === -1) {
    //alert("Nope, try again!");
    for (var i = 0; i < (jolene.length + 5); i++) {
        var letterBtn = document.createElement('div');
        console.log(userGuessLower);
    }
}
else {
    alert("Great job!");
    console.log(userGuessLower);
}