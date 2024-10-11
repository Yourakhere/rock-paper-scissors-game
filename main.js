
const score = JSON.parse(localStorage.getItem('score')) || { wins: 0, losses: 0, ties: 0 };

function resetScore() {
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;
    updateScoreElement();
}

function PlayGame(PlayMove) {
    const computerMove = pickComputerMove();
    let result = '';

    if (PlayMove === 'scissors') {
        if (computerMove === 'rock') {
            result = 'you lose';
        } else if (computerMove === 'paper') {
            result = 'you win';
        } else if (computerMove === 'scissors') {
            result = 'tie';
        }
    } else if (PlayMove === 'paper') {
        if (computerMove === 'rock') {
            result = 'you win';
        } else if (computerMove === 'paper') {
            result = 'tie';
        } else if (computerMove === 'scissors') {
            result = 'you lose';
        }
    } else if (PlayMove === 'rock') {
        if (computerMove === 'rock') {
            result = 'tie';
        } else if (computerMove === 'paper') {
            result = 'you lose';
        } else if (computerMove === 'scissors') {
            result = 'you win';
        }
    }

    if (result === 'you win') {
        score.wins += 1;
    } else if (result === 'you lose') {
        score.losses += 1;
    } else if (result === 'tie') {
        score.ties += 1;
    }

    localStorage.setItem('score', JSON.stringify(score));
    updateScoreElement();

    document.querySelector('.js-result').innerHTML = result;
    document.querySelector('.js-moves').innerHTML = `YOU
        <img src="assets/${PlayMove}-emoji.png" class="move-icon">
        <img src="assets/${computerMove}-emoji.png" class="move-icon">`
}

function updateScoreElement() {
    document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function pickComputerMove() {
    const randomNumber = Math.random();
    let computerMove = '';

    if (randomNumber < 1 / 3) {
        computerMove = 'rock';
    } else if (randomNumber < 2 / 3) {
        computerMove = 'paper';
    } else {
        computerMove = 'scissors';
    }

    return computerMove;
}

function myFunction() {
    
  var element = document.body;
    element.classList.toggle("gray-mode"); 
}