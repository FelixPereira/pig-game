'use strict';

// Selecting elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');
const btnRoll = document.querySelector('.btn--roll');
const player = document.querySelectorAll('.player');

let playing;
let currentScore;
let activePlayer;
let totalScore;

// Initial conditions
function initialConditions() {
  playing = true;
  currentScore = 0;
  activePlayer = 0;
  totalScore = [0, 0];
  
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  diceEl.classList.add('hidden');
  
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
}

initialConditions();

//Switch player
function switchPlayer() {
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent = currentScore;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
}

// Rolling dice
btnRoll.addEventListener('click', function() {
  // Generating a random dice roll
  if(playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;
    
    // Display dice
    diceEl.src = `assets/images/dice-${dice}.png`;
    diceEl.classList.remove('hidden');
    
    // Check for roll 1
    if(dice !== 1) {
      // Add roll to current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    } else {
        // Switch player
        switchPlayer();
    }
  }
});

// Holding current score
btnHold.addEventListener('click', function() {
  if(playing) {
    totalScore[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = totalScore[activePlayer];
    if(totalScore[activePlayer] >= 10) {
      playing = false;
      diceEl.classList.add('hidden');
      document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
      document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
      
    } else {
        // Switch player
        switchPlayer();
    }
  }
});

// Reseting the game
btnNew.addEventListener('click', function() {
  initialConditions();

});