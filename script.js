let playerScore = 0;
let computerScore = 0;
let tieScore = 0;
let playerPoints = document.getElementById("playerScore");
let computerPoints = document.getElementById("computerScore");
let ties = document.getElementById("tieScore");

function getComputerChoice () {
    const choice = ["rock", "paper", "scissor"];
    return choice[Math.floor(Math.random()* choice.length)];
    }

 /*function getPlayerChoice () {
      let input = prompt("Write rock, paper or scissors");
     while (input == null || input == "") { 
         input = prompt("Write rock, paper or scissors");
     }
     input = input.toLowerCase();
     return input; 

} */

const rockBtn = document.getElementById("rock").addEventListener("click", (e) => {
    e = "rock";
    playRound(e);
})
const paperBtn = document.getElementById("paper").addEventListener("click", (e) => {
    e = "paper";
    playRound(e);
})
const scissorBtn = document.getElementById("scissor").addEventListener("click", (e) => {
    e = "scissor";
    playRound(e);
})

let round = 1;
let result = "";
let roundResult = document.getElementById("gameResult");


function playRound(e) {
    let playerSelection = e;
    let computerSelection = getComputerChoice();
    if (playerSelection === computerSelection) {
        result = "Its a Tie!";
        roundResult.innerHTML= "Round: " + round + " " + result;
        /* console.log( "Round: ", round);
        console.log( "You: ", playerSelection);
        console.log( "Computer: ", computerSelection);
        console.log(result);
        console.log("-----------------------"); */
        round ++; 
        tieScore ++;
        ties.innerHTML = "Ties: " + tieScore;
       
        
    }

    else if (
        (playerSelection === "rock" && computerSelection == "scissor") ||
        (playerSelection === "paper" && computerSelection == "rock") || 
        (playerSelection === "scissor" && computerSelection == "paper")
        ) {
            result = "You win!";
            roundResult.innerHTML= "Round: " + round + " " + result;
         /*   console.log( "Round: ", round);
            console.log( "You: ", playerSelection);
            console.log( "Computer: ", computerSelection);
            console.log(result);
            console.log("-----------------------"); */
            round ++; 
            playerScore ++;
            playerPoints.innerHTML = "Your Points: " + playerScore;
            
        }
        else {
            result = "You lose!";
            roundResult.innerHTML= "Round: " + round + " " + result;
          /*  console.log( "Round: ", round);
            console.log( "You: ", playerSelection);
            console.log( "Computer: ", computerSelection);
            console.log(result);
            console.log("-----------------------"); */
            round ++; 
            computerScore ++;
            computerPoints.innerHTML = "Computer Points: " + computerScore;
           
            
        }
    } 



    
    


    
    
   
        
    
   // function game() {

         //   for (let i = 0; i <= 4; i++) {
        //  console.log("Round " + (i+1));
          //  playRound();
           // console.log("-----------------------");
      //  }
  //  }

     

    
     
     
     
     



