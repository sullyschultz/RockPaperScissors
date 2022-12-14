// Make a function for getting computer choice
// Make the choice a random between rock, paper and scissor
function getComputerChoice () {
    const choice = ["rock", "paper", "scissors"];
    return choice[Math.floor(Math.random()* choice.length)];
    }
// Make a function for playing a round, taking in computer choice and player choice
let input = prompt("Write Rock, Paper or Scissors");
function playRound() {
    let playerSelection = "input";
    let computerSelection = getComputerChoice();
   
    if (playerSelection === computerSelection) {
        return "Its a Tie!";
    }

    else if (
        (playerSelection === "rock" && computerSelection == "scissors") ||
        (playerSelection === "paper" && computerSelection == "rock") || 
        (playerSelection === "scissors" && computerSelection == "paper")
        ) {
            return "You win!";
        }
        else {
            return "You lose!";
        }
    } 
        
    function game() {

    }

     

    
     
     
     
     

// Make an input for player choice

