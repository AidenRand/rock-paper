let userScore = 0;
let compScore = 0;

function getComputerChoice() {
  const computerChoice = ["rock", "paper", "scissors"];
  let randomNumber = Math.floor(Math.random() * 3) + 1;

  if (randomNumber === 1) {
    return (compChoice = "Rock");
  } else if (randomNumber === 2) {
    return (compChoice = "Paper");
  } else if (randomNumber === 3) {
    return (compChoice = "Scissors");
  }
}

function playRound(playerSelection, computerSelection) {
  let winner;
  if (playerSelection === "Rock" && computerSelection === "Rock") {
    return (winner = "There is no clear winner");
  } else if (playerSelection === "Paper" && computerSelection === "Paper") {
    return (winner = "Humans and A.I are at a standstill");
  } else if (playerSelection === "Scissors" && computerSelection === "Scissors") {
    return (winner = "There is no winner");
  } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
    userScore++;
    return (winner = "You have defeated the robot overlords");
  } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
    userScore++;
    return (winner = "You have beaten the A.I");
  } else if (playerSelection === "Paper" && computerSelection === "Rock") {
    userScore++;
    return (winner = "You win this round");
  } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
    compScore++;
    return (winner = "The Robots win");
  } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
    compScore++;
    return (winner = "The A.I overlord wins");
  } else if (playerSelection === "Rock" && computerSelection === "Paper") {
    compScore++;
    return (winner = "A.I wins");
  }
}

function game() {
  for (i = 0; i < 5; i++) {
    const playerPrompt = prompt("rock paper or scissors").toLowerCase();
    const playerSelection = playerPrompt.charAt(0).toUpperCase() + playerPrompt.slice(1);
    const computerSelection = getComputerChoice();
    console.log(`Humans choose ${playerSelection}`);
    console.log(`A.I chose ${computerSelection}`)
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
