play(); // This is your main function that runs when the page loads

var history = {};

// store previous game data onto history
// change string to recall the amount of tries


function play(guess) {
var numGuesses = 1
var guesses = 0;
var inputGuesses = [];
console.log(secretNumber)

var nameOfPlayer = prompt('What is your name?')

while (true) {
 guesses++
 
var guess = Number(prompt('Please guess a number!'))
var secretNumber = 42

  if (guess > secretNumber) {
    alert(`Sorry, ${nameOfPlayer} please choose a lower number`)
   // inputGuesses.push(guess) 
    numGuesses++
  } else if (guess < secretNumber) {
    alert(`Sorry, ${nameOfPlayer} please choose a higher number`)
   // inputGuesses.push(guess)
    numGuesses++
  } else {
    //start for the first game
    if (history[nameOfPlayer] === undefined) {
      alert(`That is correct! and it took you ${numGuesses} guesses.`)
    } else {
      var lastAttempt = history[nameOfPlayer]
      var difference = lastAttempt - numGuesses
      if (difference < 0) {
        alert(`That is correct! ${nameOfPlayer}, you also beat your last attempt by ${difference} fewer guesses! Congrats!`)
      } else if (difference > 0) {
        alert(`Thats correct! ${nameOfPlayer}, you did better in your last game by ${difference} fewer guesses! Congrats!`)
      } else {
        alert(`That is correct! ${nameOfPlayer}, you tied your previous attempt!`)
      }
    }

    history[nameOfPlayer] = numGuesses;
    var playAgain = prompt('Do you want to play again?')
    if (playAgain.toLowerCase() === 'yes') {
      play()
    } else {
      break;
    }
  }
}
}

play();
