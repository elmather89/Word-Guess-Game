var songs = [
    "jolene",
    "island in the stream",
    "9 to 5"
];

var songs = songs[Math.floor(Math.random() * songs.length)];

var answerAray = [];
for (var i = 0; i < songs.length; i++) {
    answerAray[i] = "_";
}

var remainingLetters = songs.length;

while (remainingLetters > 0) {
    alert(answerAray.join(" "));
    var guess = prompt("Guess a letter.");

    if (guess === null) {
        break;
    }
    else if (guess.length !== 1) {
        alert("Enter a single letter");
    }
    else {
        for (var j = 0; j < songs.length; j++) {
            if (songs[j] === guess) {
                answerAray[j] = guess;
                remainingLetters--;
            }
        }
    }
}

alert(answerAray.join(" "));
alert("Congratulations! The song is " + songs);