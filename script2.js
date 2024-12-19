let randomNumber = Math.floor(Math.random()*100)    +1;
const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.LowOrHi');

const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');
let guessCount = 1;
let resetButton;

function checkGuess() {
    let userGuess = Number(guessField.value);

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        alert(' Introduceți un număr între 1 și 100.');
        return;
    }

    guesses.textContent += userGuess + ' ';

    if (userGuess === randomNumber) {
        lastResult.textContent = 'Ai ghicit!';
        lastResult.style.backgroundColor = 'green';
        lowOrHi.textContent = '';
        setGameOver();
    } else if (guessCount === 10) {
        lastResult.textContent = 'Ai rămas fără încercări. Numărul corect a fost' + randomNumber;
        lastResult.style.backgroundColor = 'red';
        lowOrHi.textContent = '';
        setGameOver();
    } else {
        lastResult.textContent = 'Presupunerea ta a fost greșită';
        lastResult.style.backgroundColor = 'yellow';
        lastResult.style.color = 'black';
        if (userGuess < randomNumber) {
            lowOrHi.textContent = 'Numărul tău este prea mic';
        } else if (userGuess > randomNumber) {
            lowOrHi.textContent = 'Numărul tău este prea mare';
        }
    }

    guessCount++;
    guessField.value = '';
    guessField.focus();
}

function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;

    resetButton = document.createElement('button');
    resetButton.textContent = 'Nuevo juego';
    document.body.appendChild(resetButton);
    resetButton.addEventListener('click', resetGame);
}

function resetGame() {
    guessCount = 1;

    let resetParas = document.querySelectorAll('.resultParas p');
    for (let i = 0; i < resetParas.length; i++) {
        resetParas[i].textContent = '';
    }

    resetButton.parentNode.removeChild(resetButton);
    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = '';
    guessField.focus();

    randomNumber = Math.floor(Math.random() * 100) + 1;
}
  
guessSubmit.addEventListener('click', checkGuess);
