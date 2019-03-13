// list of songs to guess
var songs = [
    "jolene",
    "island in the stream",
    "9 to 5"
];

// randomly select an array value
var songs = songs[Math.floor(Math.random() * songs.length)];

// creates an array with no values yet, loops thru the 3 values in var song, replaces the arrays' value
// with the underscore mark.
var answerAray = [];
for (var i = 0; i < songs.length; i++) {
    answerAray[i] = "_";
}

// generate the underscores in the current-word div
$(".current-word").append(answerAray);

// if user clicks letter that matches songs


// variable that is assigned the number (length) of the songs variable.
var remainingLetters = songs.length;

// while the remainingLetters is greater than 0...
while (remainingLetters > 0) {
    // display the underscore in the corresponding div. =========== REDO LINE BELOW 
    
    //alert(answerAray.join(" "));

    // prompts user to input letter ========== REDO LINE BELOW
    //var guess = prompt("Guess a letter.");

    // if the guess equals nothing...
    if (guess === null) {
        break;
    }
    // if the guess's length does not equal 1...
    else if (guess.length !== 1) {
        // alert user to enter a single letter, not multiple
        alert("Enter a single letter");
    }
    // otherwise...
    else {
        // loop thru the variable songs until the following becomes true.
        for (var j = 0; j < songs.length; j++) {
            if (songs[j] === guess) {
                answerAray[j] = guess;
                remainingLetters--;
            }
        }
    }
}

// don't need these?
/*alert(answerAray.join(" "));
alert("Congratulations! The song is " + songs);*/