// Make a function for getting computer choice
// Make the choice a random between rock, paper and scissor
function getComputerChoice () {
    const choice = ["rock", "paper", "scissors"];
    return choice[Math.floor(Math.random()* choice.length)];
    }
// Make a function for playerSelection
function getPlayerChoice () {
    let input = prompt("Write rock, paper or scissors");
    while (input == null) { 
        input = prompt("Write rock, paper or scissors");
    }
    input = input.toLowerCase();
    return input; 
}
    

// Make a function for playing a round, taking in computer choice and player choice

function playRound() {
    let playerSelection = getPlayerChoice();
    let computerSelection = getComputerChoice();
    let result;
    if (playerSelection === computerSelection) {
        result = "Its a Tie!";
        console.log( "You: ", playerSelection);
        console.log( "Computer: ", computerSelection);
        console.log(result);
        //return result;
    }

    else if (
        (playerSelection === "rock" && computerSelection == "scissors") ||
        (playerSelection === "paper" && computerSelection == "rock") || 
        (playerSelection === "scissors" && computerSelection == "paper")
        ) {
            result = "You win!";
            console.log( "You: ", playerSelection);
            console.log( "Computer: ", computerSelection);
            console.log(result);
            
        }
        else {
            result = "You lose!";
            console.log( "You: ", playerSelection);
            console.log( "Computer: ", computerSelection);
            console.log(result);
            
        }
    } 
    // Make a function that plays 5 rounds    
    function game() {
        for (let i = 0; i <= 4; i++) {
        playRound();
        }
    }

     

    
     
     
     
     

// Make an input for player choice

