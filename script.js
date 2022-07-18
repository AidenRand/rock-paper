let computerSelection;
let result;
let round = 0;

function getComputerChoice() {
  let compChoices = ["rock", "paper", "scissors"];
  let randomNumber = Math.floor(Math.random() * compChoices.length) + 1;

  if (randomNumber === 1) {
    computerSelection = "rock";
  }
  if (randomNumber === 2) {
    computerSelection = "paper";
  }
  if (randomNumber === 3) {
    computerSelection = "scissors";
  }
  console.log(computerSelection);
}


function userInput() {
const playerSelection = prompt("rock, paper or scissors");
return playerSelection;
}

function playRound(playerSelection, computerSelection) {
  getComputerChoice();
  userInput();
  
  if (playerSelection === computerSelection) {
    result = "it's a tie";
  }
  if (playerSelection === "rock" && computerSelection === "scissors") {
    result = "you win!";
  }
  if (playerSelection === "scissors" && computerSelection === "paper") {
    result = "you win!";
  }
  if (playerSelection === "paper" && computerSelection === "rock") {
    result = "you win!";
  }
  if (playerSelection === "scissors" && computerSelection === "rock") {
    result = "you lost";
  }
  if (playerSelection === "paper" && computerSelection === "scissors") {
    result = "you lost";
  }
  if (playerSelection === "rock" && computerSelection === "paper") {
    result = "you lost";
  }
  return result;
}
playRound();
console.log(result);


function game() {
  for (i = 0; i < 5; i++) {
    playRound();
    return result;
  }
}
game();
