'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let gameScore = 20;
let highScore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
// Logic for Check button

document.querySelector('.check').addEventListener('click', function () {
  const guessNumber = Number(document.querySelector('.guess').value);

  // When no number is entered
  if (!guessNumber) {
    displayMessage('Please enter a valid number!');
  }
  //when number is too high or too low
  else if (guessNumber !== secretNumber) {
    if (gameScore > 1) {
      gameScore--;
      displayMessage(guessNumber > secretNumber ? '📈Too High!' : '📉Too Low!');
      document.querySelector('.score').textContent = gameScore;
    } else {
      displayMessage('💀You Lost!');
      document.querySelector('.number').textContent = '💀';
      document.querySelector('.score').textContent = 0;
    }
  }
  //When number is correct
  else if (guessNumber === secretNumber) {
    displayMessage('🥇You won!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.score').textContent = ++gameScore;
    document.querySelector('body').style.backgroundColor = '#82c91e';
    document.querySelector('.number').style.width = '25rem';
    if (gameScore > highScore) {
      highScore = gameScore;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
});

// Logic for the Again Button

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  gameScore = 20;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = gameScore;
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess').value = '';
});
