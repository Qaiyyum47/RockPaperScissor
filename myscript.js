function getComputerChoice(){
    let computerChoice = Math.floor(Math.random() * 3);
    switch (computerChoice) {
        //No need for break after return, as return already stops execution.
        case 0: return 'rock';
        case 1: return 'paper';
        case 2: return 'scissor';
    }
}

function getHumanChoice() {
    //Use constant on value that never change
    const correctChoice =['rock','paper','scissors'];
    let humanChoice = prompt('Enter your choice! (rock/paper/scissors)','rock').toLowerCase();
    
    while(!correctChoice.includes(humanChoice)){
        alert('That is not a valid choice! Only rock/paper/scissors');
        humanChoice = prompt('Enter your choice! (rock/paper/scissors)','rock').toLowerCase();
    }
        return humanChoice;
}

let humanScore = 0;
let computerScore = 0;

alert(`A rock/paper/scissors game! There's five round Click \'ok\' if u ready`);

function playGame(){

    //Game Logic Function
    function playRound(humanChoice, computerChoice){

        //Simplify the condition by using object, [] brackets to access the key to the value, the value is what will lose to it
        const winCondtion = {
            rock: 'scissors',
            paper: 'rock',
            scissors: 'paper'
        };

        //If rock is the key, then the value is string
        if (winCondtion[humanChoice] === computerChoice){
            alert(`Oh wow! You Won! 🤩 \nHuman: ${humanChoice} | Computer: ${computerChoice}`);
            humanScore++;
        } else if (humanChoice === computerChoice){
            alert(`Wait its a tie!😱 \nHuman: ${humanChoice} | Computer: ${computerChoice}`);
        } else {
            alert(`HAHA You loss! ${computerChoice} beats ${humanChoice}. Wear this mask bro🫴🤡`);
            computerScore++;
        }
    }

    for(let i = 1; i <= 5; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        
        playRound(humanSelection, computerSelection);
        alert(`Current Round: ${i}\nHuman: ${humanScore} | Computer: ${computerScore}`);
    }

    // Game over message after all rounds
    //Final Result
    if(humanScore > computerScore){
        alert('Damn g, u smarter then me, here a cookie 🫴🍪');
    } else {
        alert('G u literally loss to a Math.random function, wear ur mask clown🫵🤡');
    } 

}

playGame();