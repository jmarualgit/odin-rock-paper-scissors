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

    // base value
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
function playGame() {
    // reiterate 5 times
    for (i = 0; i < 5; i++) {
        // prompts the user
        let playerSelection = prompt("What will you choose?");

        // picks randomly between rock, paper, or scissors and puts it into variable
        let computerSelection = getComputerChoice();

        console.log(`Round ${i}: ${playRound(playerSelection, computerSelection)}`);
    }
}

// initiate
playGame();