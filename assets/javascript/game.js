// FUNCTIONS =================
document.onkeyup = function (event) {
    var userGuess = event.key;
    var jolene = ["j", "o", "l", "e", "n", "e"];
    var userGuessLower = userGuess.toLowerCase();
    var userGuessUpper = userGuess.toUpperCase();
    var score = 0;
    var remaining = 10;

    if (jolene.indexOf(userGuessLower) === -1) {
        alert("Nope, try again!");
        var chances = document.getElementById("remaining").innerHTML = remaining - 1;
        var lettersUsed = document.getElementById("letters-used").innerHTML = userGuessUpper;
    }

    else {
        alert("Correct!");
        var wins = document.getElementById("wins").innerHTML = score + 1;
    }

};