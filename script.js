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
    return (winner = "There is no clear winner");
  } else if (playerSelection === "paper" && computerSelection === "paper") {
    return (winner = "Humans and A.I are at a standstill");
  } else if (playerSelection === "scissors" && computerSelection === "scissors") {
    return (winner = "There is no winner");
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    userScore++;
    return (winner = "You have defeated the robot overlords");
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    userScore++;
    return (winner = "You have beaten the A.I");
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    userScore++;
    return (winner = "You win this round");
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    compScore++;
    return (winner = "The Robots win");
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    compScore++;
    return (winner = "The A.I overlord wins");
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    compScore++;
    return (winner = "A.I wins");
  }
}

function game() {
  for (i = 0; i < 5; i++) {
    const playerSelection = prompt("rock paper or scissors").toLowerCase();
    const computerSelection = getComputerChoice();
    console.log(playerSelection);
    console.log(computerSelection);
    console.log(playRound(playerSelection, computerSelection));
    console.log(userScore, compScore);
  }

  if (userScore === compScore) {
    console.log("there is no clear winner");
  } else if (userScore > compScore) {
    console.log("the humans will live to fight another day");
  } else if (userScore < compScore) {
    console.log("you have failed us all");
  }

  if (i === 5) {
    alert("Refresh to fight again");
  }
}
game();
