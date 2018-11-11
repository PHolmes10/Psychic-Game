var wins = 0;
var losses = 0;
var guessesRemaining = 9;
var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var random = options[Math.floor(Math.random() * options.length)];


document.onkeyup = function (event) {
    var guess = event.key;

    if (guess === random) {
        wins++;
        document.getElementById("wins").textContent = "wins: " + wins;
    } else {
        guessesRemaining--;
        document.getElementById("guessesRemaining").textContent = "Guesses Remaining: " + guessesRemaining;
    }

    if (guessesRemaining === 0) {
        losses++;
        document.getElementById("losses").textContent = "Losses: " + losses;

    };
};
