'use strict';

const randN = (min, max) => Math.ceil(Math.random() * (max - min) + min);
let rand = randN(0, 20);

const guessAttr = document.querySelector('.guess');

const msgAttr = document.querySelector('.message');

const scoreAttr = document.querySelector('.score');
let score = scoreAttr.textContent;

const highScoreAttr = document.querySelector('.highscore');
let mutableHighScore = 20;

const checkUserGuess = () => {
  if (score <= 0) {
    document.body.style.backgroundColor = 'red';
    msgAttr.textContent = 'game over, you used all of your 20 attempts';
    document.querySelector('.check').style.visibility = 'hidden';
    return;
  }
  const userGuess = Number(document.querySelector('.guess').value);
  if (!userGuess) {
    msgAttr.textContent = 'not a number, try again';
  } else if (userGuess < 0 || userGuess > 20) {
    msgAttr.textContent = 'choose a number between [1-20]';
  } else {
    if (userGuess === rand) {
      document.body.style.backgroundColor = 'green';
      msgAttr.textContent = 'you guessed!';
      scoreAttr.textContent = 0;
      highScoreAttr.textContent = Math.max(mutableHighScore, score);
      document.querySelector('.check').style.visibility = 'hidden';
    } else ifNotGuessed(`too ${userGuess > rand ? 'high' : 'low'}`);
  }
};

const restartGame = () => {
  document.body.style.backgroundColor = '#222';
  guessAttr.value = '';
  rand = randN(0, 20);
  scoreAttr.textContent = score = mutableHighScore = 20;
  document.querySelector('.check').style.visibility = 'visible';
};

const ifNotGuessed = msg => {
  msgAttr.textContent = msg;
  scoreAttr.textContent = --score;
  mutableHighScore--;
};

document.querySelector('.check').addEventListener('click', checkUserGuess);
document.querySelector('.again').addEventListener('click', restartGame);
