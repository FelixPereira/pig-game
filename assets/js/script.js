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

// Initial conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');
let activePlayer = 0;
let currentScore = 0;

// Rolling dice functionality
btnRoll.addEventListener('click', function() {
  // 1. Generating a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;
  
  // 2. Display dice
  diceEl.src = `assets/images/dice-${dice}.png`;
  diceEl.classList.remove('hidden');
  
  // 3. Check for roll 1: if is true, switch to next player
  if(dice !== 1) {
    // Add roll to current score
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent = currentScore;
  } else {
      // Switch player
      currentScore = 0;
      document.getElementById(`current--${activePlayer}`).textContent = currentScore;
      activePlayer = activePlayer === 0 ? 1 : 0;
      player0El.classList.toggle('player--active');
      player1El.classList.toggle('player--active');
  }
});