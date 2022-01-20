'use strict';

// Selecting elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');
const btnRoll = document.querySelector('.btn--roll');
const player = document.querySelectorAll('.player');

// Initial conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

let currentScore = 0;

// Rolling dice functionality
btnRoll.addEventListener('click', function() {
  // 1. Generating a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;
  
  // 2. Display dice
  diceEl.src = `dice-${dice}.png`;
  diceEl.classList.remove('hidden');
  
  // 3. Check for roll 1: if is true, switch to next player
  if(dice !== 1) {
    // Add roll to current score
    currentScore += dice;
    current0El.textContent = currentScore;
  } else {
      // Switch player
      for(let i = 0; i < player.length; i++){
        player[i].classList.toggle('player--active');
        
      }
  }
});