// Function to get the computer's choice
function getComputerChoice() {
    return Math.floor(Math.random() * 3);
}

// Function to play a single round of Rock Paper Scissors
function playRound(playerSelection, computerSelection) {
    // Convert playerSelection to an integer
    playerSelection = parseInt(playerSelection);

    // Determine the winner
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else if (
        (playerSelection === 0 && computerSelection === 2) ||
        (playerSelection === 1 && computerSelection === 0) ||
        (playerSelection === 2 && computerSelection === 1)
    ) {
        return "You win!";
    } else {
        return "You lose!";
    }
}

// Function to play a 5 round game
function startGame() {
    let playerScore = 0;
    let computerScore = 0;

    for (let round = 1; round <= 5; round++) {
        const playerSelection = prompt("Enter your choice: 0 for Rock, 1 for Paper, 2 for Scissors");
        const computerSelection = getComputerChoice();
        const result = playRound(playerSelection, computerSelection);

        console.log(`Round ${round}: ${result}`);
        alert(`Round ${round}: ${result}`);

        if (result === "You win!") {
            playerScore++;
        } else if (result === "You lose!") {
            computerScore++;
        }
    }

    console.log(`Final Score - You: ${playerScore}, Computer: ${computerScore}`);
    alert(`Final Score - You: ${playerScore}, Computer: ${computerScore}`);

    if (playerScore > computerScore) {
        console.log("Congratulations! You win the game!");
        alert("Congratulations! You win the game!");
    } else if (playerScore < computerScore) {
        console.log("You lose the game! Better luck next time.");
        alert("You lose the game! Better luck next time.");
    } else {
        console.log("It's a tie! The game ends in a draw.");
        alert("It's a tie! The game ends in a draw.");
    }
}

// Start the game
startGame();