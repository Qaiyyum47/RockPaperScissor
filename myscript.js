let humanScore = 0;
let computerScore = 0;
let display = document.querySelector(".display");
let round = document.querySelector("#round");
let desc = document.querySelector("#desc");
let child = document.querySelector("#child");

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    switch (computerChoice) {
        case 0: return 'rock';
        case 1: return 'paper';
        case 2: return 'scissors';
    }
}

let humanChoice = '';

function getHumanChoice() {
    let choice = document.querySelector(".option");
    
    choice.addEventListener("click", (event) => {
        if (event.target.tagName === 'BUTTON') {
            humanChoice = event.target.id;  // Store the human choice
            playRound(humanChoice, getComputerChoice());
        }
    });
}

function playRound(humanChoice, computerChoice) {
    const winCondition = {
        rock: 'scissors',
        paper: 'rock',
        scissors: 'paper'
    };

    if (winCondition[humanChoice] === computerChoice) {
        desc.textContent = `Oh wow! You Won! 🤩`;
        child.textContent = `Human: ${humanChoice} | Computer: ${computerChoice}`;
        humanScore++;
    } else if (humanChoice === computerChoice) {
        desc.textContent = `Wait, it's a tie!😱`;
        child.textContent = `Human: ${humanChoice} | Computer: ${computerChoice}`;
    } else {
        desc.textContent = `HAHA You lost! ${computerChoice} beats ${humanChoice}. Wear your mask bro🫴🤡`;
        computerScore++;
    }

    round.textContent = `Human: ${humanScore} | Computer: ${computerScore}`;
    
    if(humanScore >= 5){
        endGame();
    }
}


function endGame() {
        if (humanScore == 5) {
            round.textContent = 'Damn g, you’re smarter than me, here’s a cookie 🫴🍪';
        } else {
            round.textContent = 'You literally lost to a Math.random function, wear your mask clown 🫵🤡';
        }
        
        let buttons = document.querySelectorAll(".option button");
        buttons.forEach(button => {
            button.disabled = true;
        });
}

function playGame(){
    getHumanChoice();
}

playGame();  // Start the game
