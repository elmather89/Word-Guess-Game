$(document).ready(function () {
      // songs
      var song1 = ["j", "o", "l", "e", "n", "e"];
      var song2 = ["i", "s", "l", "a", "n", "d", "s", " ", "i", "n", " ", "t", "h", "e", " ", "s", "t", "r", "e", "a", "m"];
      var song3 = ["9", " ", "t", "o", " ", "5"];

      // List of all 3 songs
      var allSongs = [song1, song2, song3];


    // The array of songs for game
    var songs = ["jolene", "islands in the stream", "9 to 5"];

    // We start the game with a score of 0.
    var score = 0;

    // Variable to hold the index of current song.
    var songsIndex = 0;

    // Variable to hold the number of chances left
    var chances = 0;

    // FUNCTIONS
    // ==============================================================================

    // Function to render songs.
    function renderSongs() {

        var randomSong = allSongs[Math.floor(Math.random() * allSongs.length)];
        console.log(randomSong);

        // creates an array with no values yet, loops thru the 3 values in var song, replaces the arrays' value
        // with the underscore mark.
        var answerAray = [];
        for (var i = 0; i < randomSong.length; i++) {
            answerAray[i] = "_";
        }

        // If there are still more questions, render the next one.
        if (songsIndex <= (allSongs.length - 1)) {
            document.querySelector("#current-word").innerHTML = answerAray;
        }
        // If there aren't, render the end game screen.
        else {
            document.querySelector("#current-word").innerHTML = "Game Over!";
            document.querySelector("#wins").innerHTML = "Final Score: " + score + " out of " + songs.length;
        }
    }

    // Function that updates the score...
    function updateScore() {
        document.querySelector("#wins").innerHTML = "Score: " + score;
    }

    // Function that updates the remaining chances.
    function updateChances() {
        document.getElementById("#remaining").innerHTML = "Chances Remaining" + chances;
    }

    // MAIN PROCESS
    // =======================================================================================

    // calling functions to start the game
    renderSongs();
    updateScore();

    //click event
    document.onkeyup = function (event) {

        // if no more songs, stop function
        if (songsIndex === songs.length) {
            return;
        }

        // collect which key was clicked, make lowercase, set to the userInput variable.
        var userInput = event.key.toLowerCase();

        // only run if variable's array values were selected... *********************** NEED HELP
        if (userInput === songsIndex) {

            // if correct guess, increase and update score, alert they got it right
            if (userInput === songs[songsIndex]) {
                alert("You got it!");
                score++;
                updateScore();
            }

            else {
                chances--;
                alert("Wrong! You have " + chances + " remaining.")
            }
        }
    }


})