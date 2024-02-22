const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');
let playerWins = 0;
let computerWins = 0;

// randomly returns rock, paper, or scissors
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3) + 1;

    switch (randomNumber) {
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
    }
}

// console.log(getComputerChoice())

function determineTotalWinner(playerWins, computerWins) {
    if (playerWins > computerWins) {
        console.log(`Player wins with ${playerWins} total wins!`);
    } else if (playerWins < computerWins) {
        console.log(`Computer wins with ${computerWins} total wins!`);
    } else {
        console.log(tie);
    }
}

function disableButtons() {
    document.getElementById('rock').disabled = true;
    document.getElementById('paper').disabled = true;
    document.getElementById('scissors').disabled = true;
}

function enableButtons() {
    document.getElementById('rock').disabled = false;
    document.getElementById('paper').disabled = false;
    document.getElementById('scissors').disabled = false;
}

function getWinner() {
    if (playerWins == 5) {
        return 'Player';
    } else if (computerWins == 5) {
        return 'Computer';
    } else {
        return '';
    }
}

function resetGame() {
    playerWins = 0;
    computerWins = 0;
}

function displayResetButton() {
    const resultDiv = document.querySelector('#results-container');
    const resetButton = document.createElement('button');

    resetButton.textContent = 'Play Again!';

    resultDiv.appendChild(resetButton);

    resetButton.addEventListener('click', () => {
        resetGame();
        resetButton.remove();

        const resultText = document.getElementById('result-text');
        resultText.textContent = '';

        enableButtons();
    });
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    // case for when there's a tie, can just exit out of the function instead of 
    // running through all the other code
    if (playerSelection == computerSelection) {
        return 'It was a tie!';
    }

    // base value
    let result = 'W';

    if (playerSelection == 'rock') {
        if (computerSelection == 'scissors') {
            result = 'W';   // rock v scissors  W
            playerWins++;
        } else {
            result = 'L';   // rock v paper     L
            computerWins++;
        }
    } else if (playerSelection == 'paper') {
        if (computerSelection == 'rock') {
            result = 'W';   // paper v rock     W
            playerWins++;
        } else {
            result = 'L';   // paper v scissor  L
            computerWins++;
        }
    } else {        // scissors
        if (computerSelection == 'paper') {
            result = 'W';   // scissor v paper  W
            playerWins++;
        } else {
            result = 'L';   // paper v rock     L
            computerWins++;
        }
    }

    if (getWinner() != '') {
        const resultText = document.getElementById('result-text');

        resultText.textContent = `${getWinner()} wins! Score: (YOU) ${playerWins}, (PC) ${computerWins}`;
        disableButtons();
        displayResetButton();
    }

    // capitalize the first letter of the words
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.substring(1);
    computerSelection = computerSelection.charAt(0).toUpperCase() + computerSelection.substring(1);

    if (result == 'W') {
        return `You win! ${playerSelection} beats ${computerSelection}!`
    } else {
        return `You lose! ${playerSelection} loses to ${computerSelection}!`;
    }

    
}

// play 5 rounds
/*
function playGame() {
    // reiterate 5 times
    for (i = 0; i < 5; i++) {
        // prompts the user
        let playerSelection = prompt("What will you choose?");

        // picks randomly between rock, paper, or scissors and puts it into variable
        let computerSelection = getComputerChoice();

        console.log(`Round ${i}: ${playRound(playerSelection, computerSelection)}`);
    }

    determineTotalWinner(playerWins, computerWins);
}
*/

rockButton.addEventListener("click", () => {
    console.log(playRound('rock', getComputerChoice()));
});

paperButton.addEventListener("click", () => {
    console.log(playRound('paper', getComputerChoice()));
});

scissorsButton.addEventListener("click", () => {
    console.log(playRound('scissors', getComputerChoice()));
});

// initiate
//playGame();