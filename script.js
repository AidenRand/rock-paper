const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const choiceBtns = document.querySelectorAll(".choiceBtn");
const resultText = document.querySelector("#resultText");
let playerSelection;
let computerSelection;
let userScore = 0;
let compScore = 0;

// Get the computers choice
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

// Get score of round
function updateScore() {
  const playerScore = document.querySelector(".player-score");
  const computerScore = document.querySelector(".computer-score");
  playerScore.textContent = userScore;
  computerScore.textContent = compScore;
};
updateScore();

// Get the winner of the round and record the score
function playRound(playerSelection, computerSelection) {
  let winner;
  updateScore();
  if (playerSelection === "Rock" && computerSelection === "Rock") {
    return (winner = "There is no clear winner");
  } else if (playerSelection === "Paper" && computerSelection === "Paper") {
    return (winner = "Humans and A.I are at a standstill");
  } else if (
    playerSelection === "Scissors" &&
    computerSelection === "Scissors"
  ) {
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

// make game run 5 rounds and display the winner
function game() {
  for (i = 0; i < 5; i++) {
    choiceBtns.forEach((button) =>
      button.addEventListener("click", () => {
        playerSelection = button.textContent;
        computerSelection = getComputerChoice();
        playerText.textContent = `Human Survivors: ${playerSelection}`;
        computerText.textContent = `A.I Overlord: ${compChoice}`;
        resultText.textContent = playRound(playerSelection, computerSelection);
      })
    );
  }

  if (userScore === compScore) {
    console.log("there is no clear winner");
  } else if (userScore > compScore) {
    console.log("the humans will live to fight another day");
  } else if (userScore < compScore) {
    console.log("you have failed us all");
  }

  if (i === 5) {
  }
}
game();