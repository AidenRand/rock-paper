const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const choiceBtns = document.querySelectorAll(".choiceBtn");
const resultText = document.querySelector("#resultText");
const playerScore = document.querySelector(".player-score");
const computerScore = document.querySelector(".computer-score");
let playerSelection;
let computerSelection;
let userScore = 0;
let compScore = 0;

function disableButtons() {
  choiceBtns.forEach((elem) => {
    elem.disabled = true;
  });
}

// Record and display button inputs
choiceBtns.forEach((choiceBtns) =>
  choiceBtns.addEventListener("click", () => {
    playerSelection = choiceBtns.textContent;
    computerSelection = getComputerChoice();
    playerText.textContent = `Human Survivors: ${playerSelection}`;
    computerText.textContent = `A.I Overlord: ${compChoice}`;
    resultText.textContent = playRound(playerSelection, computerSelection);
  })
);

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

// Get the winner of the round and record the score
function playRound(playerSelection, computerSelection) {
  let winner;
  if (playerSelection === "Rock" && computerSelection === "Rock") {
    winner = "Human's and robot's are on equal ground";
  } else if (playerSelection === "Paper" && computerSelection === "Paper") {
    winner = "Humans and A.I are at a standstill";
  } else if (playerSelection === "Scissors" && computerSelection === "Scissors") {
    winner = "This battle has no victor";
  } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
    winner = "You have defeated the robot overlords";
    userScore++;
  } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
    winner = "You have beaten the A.I";
    userScore++;
  } else if (playerSelection === "Paper" && computerSelection === "Rock") {
    winner = "Human's have won this battle";
    userScore++;
  } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
    winner = "The robots conquered this round";
    compScore++;
  } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
    winner = "The A.I overlord wins";
    compScore++;
  } else if (playerSelection === "Rock" && computerSelection === "Paper") {
    winner = "A.I has won this battle";
    compScore++;
  }
  // At 5 return the final winner
  playerScore.textContent = userScore;
  computerScore.textContent = compScore;

  if (userScore >= 5) {
    disableButtons();
    playerText.textContent = "";
    computerText.textContent = "";
    winner = "The humans will live to fight another day";
  }
  if (compScore >= 5) {
    disableButtons();
    playerText.textContent = "";
    computerText.textContent = "";
    winner = "The A.I have won, You have doomed us all";
  }
  return [winner];
}
