let userScore = 0;
let compScore = 0;

function getComputerChoice() {
  const computerChoice = ["rock", "paper", "scissors"];
  let randomNumber = Math.floor(Math.random() * 3) + 1;

  if (randomNumber === 1) {
    return (compChoice = "rock");
  } else if (randomNumber === 2) {
    return (compChoice = "paper");
  } else if (randomNumber === 3) {
    return (compChoice = "scissors");
  }
}

function playRound(playerSelection, computerSelection) {
  let winner;
  if (playerSelection === "rock" && computerSelection === "rock") {
    return (winner = "it's a tie");
  } else if (playerSelection === "paper" && computerSelection === "paper") {
    return (winner = "it's a tie");
  } else if (playerSelection === "scissors" && computerSelection === "scissors") {
    return (winner = "it's a tie");
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    return (winner = "you win");
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    return (winner = "you win");
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return (winner = "you win");
  } else if (playerSelection === " scissors" && computerSelection === "rock") {
    return (winner = "you lose");
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    return (winner = "you lose");
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    return (winner = "you lose");
  }
}

function game() {
  for (i = 0; i < 5; i++) {
    const playerSelection = prompt("rock paper or scissors");
    const computerSelection = getComputerChoice();
    console.log(playerSelection);
    console.log(computerSelection);
    console.log(playRound(playerSelection, computerSelection));
  }
}
game();
