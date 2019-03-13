$(document).ready(function () {
    var jolene = ["j", "o", "l", "e", "n", "e"];

    for (var i = 0; i < jolene.length; i++) {
        var letterBtn = $("<button>");
        letterBtn.addClass("none");
        letterBtn.attr("data-letter", jolene[i]);
        letterBtn.text(jolene[i]);
        $("#current-word").append(letterBtn);
    }

    $(".none").keyup(function () {
        var wordSpaces = $("<div>");
        wordSpaces.addClass("letter fridge-color");
        wordSpaces.text($(this).attr("data-letter"));
        $("#current-word").append(wordSpaces);
        console.log(wordSpaces);
    })

    $("#start-over").on("click", function () {
        $("#current-word").empty();
        console.log(start-over);
    })

})