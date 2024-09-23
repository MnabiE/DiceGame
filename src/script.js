const score1El = document.getElementById('score1');
const score2El = document.getElementById('score2');
const currentScore1El = document.getElementById('currentScore1');
const currentScore2El = document.getElementById('currentScore2');
const diceEl = document.getElementById('dice');
const btnRoll = document.getElementById('rollDice');
const btnNewGame = document.getElementById('newGame');
const btnHold = document.getElementById('hold');

// Initializing variables
let currentScore = 0;
let activePlayer = 1; // 1 for player 1, 2 for player 2
let scores = [0, 0]; // Array for player scores [Player 1, Player 2]

// Reset Game function
function resetGame() {
    scores = [0, 0];
    currentScore = 0;
    activePlayer = 1;
    score1El.textContent = '0';
    score2El.textContent = '0';
    currentScore1El.textContent = '0';
    currentScore2El.textContent = '0';
    diceEl.src = `../practice game images/dice-1.png`;
}

// Switch active player
function switchPlayer() {
    currentScore = 0;
    document.getElementById(`currentScore${activePlayer}`).textContent = '0';
    activePlayer = activePlayer === 1 ? 2 : 1;
}

// Roll Dice functionality
btnRoll.addEventListener('click', function() {
    const dice = Math.floor(Math.random() * 6) + 1;
    diceEl.src = `../practice game images/dice-${dice}.png`;

    if (dice !== 1) {
        currentScore += dice;
        document.getElementById(`currentScore${activePlayer}`).textContent = currentScore;
    } else {
        switchPlayer();
    }
});

// Hold functionality
btnHold.addEventListener('click', function() {
    scores[activePlayer - 1] += currentScore;
    document.getElementById(`score${activePlayer}`).textContent = scores[activePlayer - 1];
    switchPlayer();
});

// New Game functionality
btnNewGame.addEventListener('click', resetGame);

// Initialize game on load
resetGame();
