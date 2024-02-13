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

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    // case for when there's a tie, can just exit out of the function instead of 
    // running through all the other code
    if (playerSelection == computerSelection) {
        return 'It was a tie!';
    }

    let result = 'W';

    if (playerSelection == 'rock') {
        if (computerSelection == 'scissor') {
            result = 'W';   // rock v scissors  W
        } else {
            result = 'L';   // rock v paper     L
        }
    } else if (playerSelection == 'paper') {
        if (computerSelection == 'rock') {
            result = 'W';   // paper v rock     W
        } else {
            result = 'L';   // paper v scissor  L
        }
    } else {        // scissors
        if (computerSelection == 'paper') {
            result = 'W';   // scissor v paper  W
        } else {
            result = 'L';   // paper v rock     L
        }
    }

    if (result == 'W') {
        return `You win! ${playerSelection} beats ${computerSelection}!`
    } else {
        return `You lose! ${playerSelection} loses to ${computerSelection}!`;
    }
}

const playerSelection = 'Scissors';
const computerSelection = getComputerChoice();

let result = playRound(playerSelection, computerSelection);

console.log(`Player chooses ${playerSelection}!`)
console.log(`Computer chooses ${computerSelection}!`)
console.log(result);