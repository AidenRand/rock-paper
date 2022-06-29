const playerText  = document.querySelector('#player-text');
const computerText  = document.querySelector('#computer-text');
const resultText  = document.querySelector('#result-text');

const choiceBtns = document.querySelectorAll('.choice-button');

let player;
let computer;
let result; 

choiceBtns.forEach(button => button.addEventListener('click', () => {
    
    player = button.textContent;
    computerTurn();
    playerText.textContent = `Player: ${player}`
    ComputerText.textContent = `Computer: ${computer}`
}));

function computerTurn() {
    const randNum = Math.floor(Math.random() * 3) + 1;

    switch(randNum) {
        case 1:
            computer = 'Rock';
            break;
        case 2:
            computer = 'Paper';
            break;
        case 3:
            computer = 'Scissors';
            break;

    }
}
