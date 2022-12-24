'use strict';

let number = Math.trunc(Math.random() * 20) + 1;
// console.log(number);

let score = 20;
let highscore = 0;

const scoreElement = document.querySelector('.score');
const messageElement = document.querySelector('.message');
const numberElement = document.querySelector('.number');
const guessElement = document.querySelector('.guess');

function displayMessage(message) {
  messageElement.textContent = message;
}

function checkInput() {
  const guess = Number(guessElement.value);

  // check if there is an input and not we change the game message board
  if (!guess) {
    displayMessage('⛔️ No Number!');
    // if the guess is equal to the number
  } else if (guess === number) {
    document.querySelector('body').style.backgroundColor = '#60b347';
    numberElement.textContent = number;
    numberElement.style.width = '30rem';
    displayMessage('🥳 Correct Number!');
    // check if new score is higher than highscore and then save it as the new highscore
    if (highscore < score) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess != number) {
    guessNotNumber(guess);
  }
}

function guessNotNumber(guess) {
  if (score > 1) {
    guess > number
      ? displayMessage('📈 Too High!')
      : displayMessage('📉 Too Low!');
    score--;
    scoreElement.textContent = score;
  } else {
    displayMessage('💥 You Lost!');
    scoreElement.textContent = 0;
  }
}

document.querySelector('.check').addEventListener('click', checkInput);
guessElement.addEventListener('keypress', function (event) {
  if (event.key === 'Enter') {
    checkInput();
  }
});

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('body').style.backgroundColor = '#222';
  displayMessage('Start guessing...');
  numberElement.style.width = '15rem';
  number = Math.trunc(Math.random() * 20) + 1;
  // console.log(number);
  score = 20;
  scoreElement.textContent = score;
  numberElement.textContent = '?';
  guessElement.value = '';
});
