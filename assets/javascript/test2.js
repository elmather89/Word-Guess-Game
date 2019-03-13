$(document).ready(function () {
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

    // Function to render questions.
    function renderSongs() {
        // If there are still more questions, render the next one.
        if (songsIndex <= (songs.length - 1)) {
            document.querySelector("#current-word").innerHTML = songs[songsIndex];
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