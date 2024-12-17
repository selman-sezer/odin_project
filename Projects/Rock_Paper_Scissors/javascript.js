function getComputerChoice()
{
    return ['rock', 'paper', 'scissors'][(Math.floor(Math.random() * 3))];
}

function getHumanChoice()
{
    while (true) {
        let answer = prompt("enter your choice: ");
        answer.toLowerCase();
        if (['rock', 'paper', 'scissors'].includes(answer) ) {
            return answer
        }
        alert("wrong input !!!")
    }
}

let humanScore = 0;
let computerScore = 0;



/**
 * 
 * @param {string} str 
 * @returns 
 */
function capitalizeInitial(str)
{
    return str.charAt(0).toUpperCase() + str.slice(1);
}


function playGame()
{
    function playRound(humanChoice, computerChoice)
    {
        humanChoice.toLowerCase();
        if (humanChoice === 'rock' && computerChoice === 'paper') {
            computerScore += 1;
            console.log(`“You lose! ${capitalizeInitial(computerChoice)} beats ${capitalizeInitial(humanChoice)}.`);
            alert("computer won the round")
            alert(`Current score is you : ${humanScore}, computer ${computerScore}`)
            
        }
        else if (humanChoice === 'paper' && computerChoice === 'scissors') {
            computerScore += 1;
            console.log(`“You lose! ${capitalizeInitial(computerChoice)} beats ${capitalizeInitial(humanChoice)}.`);
            alert("computer won the round")
            alert(`Current score is you : ${humanScore}, computer ${computerScore}`)
        }
        else if (humanChoice === 'scissors' && computerChoice === 'rock') {
            computerScore += 1;
            console.log(`“You lose! ${capitalizeInitial(computerChoice)} beats ${capitalizeInitial(humanChoice)}.`);
            alert("computer won the round")
            alert(`Current score is you : ${humanScore}, computer ${computerScore}`)
        }
        else if (humanChoice === 'scissors' && computerChoice === 'paper') {
            humanScore += 1;
            console.log(`“You win! ${capitalizeInitial(humanChoice)} beats ${capitalizeInitial(computerChoice)}.`);
            alert("You won the round")
            alert(`Current score is you : ${humanScore}, computer ${computerScore}`)
        }
    
        else if (humanChoice === 'rock' && computerChoice === 'scissors') {
            humanScore += 1;
            console.log(`“You win! ${capitalizeInitial(humanChoice)} beats ${capitalizeInitial(computerChoice)}.`);
            alert("You won the round")
            alert(`Current score is you : ${humanScore}, computer ${computerScore}`)
        }
        else if (humanChoice === 'paper' && computerChoice === 'rock') {
            humanScore += 1;
            console.log(`“You win! ${capitalizeInitial(humanChoice)} beats ${capitalizeInitial(computerChoice)}.`);
            alert("You won the round")
            alert(`Current score is you : ${humanScore}, computer ${computerScore}`)
        }
        else
        {
            alert("Both played the same hand ")
            alert(`Current score is you : ${humanScore}, computer ${computerScore}`)
        }
  
    
    }


    humanScore > computerScore ?  console.log(`You won the game !`) : console.log("Computer won the game !!");
}

playGame();

