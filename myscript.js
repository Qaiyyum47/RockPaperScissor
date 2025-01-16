function getComputerChoice(){
    let computerChoice = Math.floor(Math.random() * 3);
    switch (computerChoice) {
        case 0:
            return choice = 'rock';
            break;
        case 1:
            return choice = 'paper';
            break;
        case 2: 
            return choice = 'scissors';
            break;
    }
}

function getHumanChoice() {
    let humanChoice = prompt('Enter your choice! (rock/paper/scissors)','rock')
    return humanChoice.toLowerCase();
}

let humanScore = 0;
let computerScore = 0;

alert(`A rock/paper/scissors game! \nThere's five round \nClick \'ok\' if u ready`);

function playGame(){

    function playRound(humanChoice, computerChoice){
    
        if ((humanChoice == 'rock' && computerChoice == 'paper') || (humanChoice == 'paper' && computerChoice == 'scissors') || (humanChoice == 'scissors' && computerChoice == 'rock')){
            alert(`HAHA You loss! \nWear this mask bro🫴🤡 \n${computerChoice} beats ${humanChoice} don't u know that?`);
            computerScore++;
        } else if ((humanChoice == 'rock' && computerChoice == 'rock') || (humanChoice == 'paper' && computerChoice == 'paper') || (humanChoice == 'scissors' && computerChoice == 'scissors')){
            alert(`Wait its a tie!😱 \nHuman: ${humanChoice} | Computer: ${computerChoice}`);
        } else if ((humanChoice == 'rock' && computerChoice == 'scissors') || (humanChoice == 'scissors' && computerChoice == 'paper') || (humanChoice == 'paper' && computerChoice == 'scissors')){
            alert(`Oh wow! You Won! \nu cool ig👉👈🥹🤩 \nHuman: ${humanChoice} | Computer: ${computerChoice}`);
            humanScore++;
        }
    }

    for(let i = 1; i <= 5; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        
        playRound(humanSelection, computerSelection);
        alert(`Current Round: ${i}\nHuman: ${humanScore} | Computer: ${computerScore}`);
    }
}

playGame();

if(humanScore > computerScore){
    alert('Damn g, u smarter then me, here a cookie 🫴🍪')
} else (
    alert('G u literally loss to a Math.random function🫵🤡 \nwear ur mask clown')
)

