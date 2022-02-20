'use strict';
const palyer0El = document.querySelector('.player--0');
const palyer1El = document.querySelector('.player--1');

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');

let score,currentScore,activePlayer,playing;

const init = function(){
    score = [0,0];
    currentScore = 0;
    activePlayer = 0;
    playing = true;
    
    score0El.textContent = 0;
    score1El.textContent =0;
    current0El.textContent =0;
    current1El.textContent=0;
    diceEl.classList.add('hidden');
    palyer0El.classList.remove('player--winner');
    palyer1El.classList.remove('player--winner');
    palyer0El.classList.add('player--active');
    palyer1El.classList.remove('player--active');
}
init();

const switchPlayer = function(){
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer===0?1:0;
    currentScore = 0; 
    palyer0El.classList.toggle('player--active');
    palyer1El.classList.toggle('player--active');
}

btnRoll.addEventListener('click',function(){
    if(playing){
        //generating random number
        const dice = Math.trunc(Math.random()*6)+1;
        //display the dice
        diceEl.classList.remove('hidden');
        diceEl.src=`dice-${dice}.png`;
        //checking roll1
        if(dice!==1){
            //add dice to current score
            currentScore+=dice;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        }
        else{
            //switch to next player
            switchPlayer();
        }
    }
});


btnHold.addEventListener('click',function(){
    if(playing){
        //add current score to active player
            score[activePlayer] += currentScore;
            document.getElementById(`score--${activePlayer}`).textContent = score[activePlayer];

        //check if player's score is <=100
            if(score[activePlayer]>=100){
            //finish the game
                playing = false; 
                diceEl.classList.add('hidden');

                document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
                document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
            }
            else {
        //switch to the next player
        switchPlayer();
            }
    }
});


btnNew.addEventListener('click',init);