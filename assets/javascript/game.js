var wins = 0;
var losses = 0;
var guessesRemaining = 9;
var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var random = options[Math.floor(Math.random() * options.length)];
var guessedLetters = [];
console.log(random);

document.onkeyup = function (event) {
    var guess = event.key;

    if (guess === random) {
        guessedLetters = [];
        document.getElementById("guessedLetters").textContent = "Guessed Letters: "
        wins++;
        document.getElementById("wins").textContent = "Wins: " + wins;
        guessesRemaining = 9;
        document.getElementById("guessesRemaining").textContent = "Guesses Remaining: " + guessesRemaining;
        random = options[Math.floor(Math.random() * options.length)];
        console.log(random);

    } else {
        guessedLetters.push(guess);
        document.getElementById("guessedLetters").textContent = "Guessed Letters: " + guessedLetters;
        guessesRemaining--;
        document.getElementById("guessesRemaining").textContent = "Guesses Remaining: " + guessesRemaining;
    }

    if (guessesRemaining === 0) {
        guessedLetters = [];
        document.getElementById("guessedLetters").textContent = "Guessed Letters: "
        losses++;
        document.getElementById("losses").textContent = "Losses: " + losses;
        guessesRemaining = 9;
        document.getElementById("guessesRemaining").textContent = "Guesses Remaining: " + guessesRemaining;
        random = options[Math.floor(Math.random() * options.length)];
        console.log(random);

    };
};
