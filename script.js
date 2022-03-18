'use strict';
//Creating a Secret Number
let secretnumber = Math.trunc(Math.random() * 20 + 1);

let score = 20;
let highscore = 0;
//EventListener on Check Button
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //if No Input value
  if (!guess) {
    document.querySelector('.message').textContent = 'No Number!';
  }
  //correct guess
  else if (guess === secretnumber) {
    document.querySelector('.message').textContent = 'Correct Number';
    document.querySelector('.number').textContent = secretnumber;
    //changing the background color
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    //Implementing Highscore Logic
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
  //Too high guess
  else if (guess > secretnumber) {
    //check if player has some scores or not
    if (score >= 1) {
      document.querySelector('.message').textContent = 'Too High';
      score--;
      document.querySelector('.score').textContent = score;
    }
    // Lost the game message when score = 0
    else {
      document.querySelector('.message').textContent = 'You Lost the Game!';
      document.querySelector('.score').textContent = 0;
    }
  }
  //Too Low Guess
  else if (guess < secretnumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too Low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Lost the Game!';
      document.querySelector('.score').textContent = 0;
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretnumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = 'Start Guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
});
