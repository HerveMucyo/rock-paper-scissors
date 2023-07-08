function startGame() {
    cm = Math.floor(Math.random() * 3);

    input = prompt("Enter your Choice!");

    pm = parseInt(input);

    if (cm == 0 && pm == 1) {
        alert("You beat Computer with Paper against Rock");
    } else if (cm == 0 && pm == 2) {
        alert("Computer Beat you with Rock");
    } else if (cm == 1 && pm == 0) {
        alert("Computer Beat you With Paper");
    } else if (cm == 1 && pm == 2) {
        alert("You beat computer with Scissor against Paper");
    } else if (cm == 2 && pm == 0) {
        alert("You beat computer with Rock against Scissor");
    } else if (cm == 2 && pm == 1) {
        alert("Computer Beat you With Scissor");
    } else {
        alert("It's a tie");
    }
}

startGame();