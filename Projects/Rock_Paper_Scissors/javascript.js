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
        }
        else if (humanChoice === 'paper' && computerChoice === 'scissors') {
            computerScore += 1;
            console.log(`“You lose! ${capitalizeInitial(computerChoice)} beats ${capitalizeInitial(humanChoice)}.`);
        }
        else if (humanChoice === 'scissors' && computerChoice === 'rock') {
            computerScore += 1;
            console.log(`“You lose! ${capitalizeInitial(computerChoice)} beats ${capitalizeInitial(humanChoice)}.`);
        }
        else if (humanChoice === 'scissors' && computerChoice === 'paper') {
            humanScore += 1;
            console.log(`“You win! ${capitalizeInitial(humanChoice)} beats ${capitalizeInitial(computerChoice)}.`);
        }
    
        else if (humanChoice === 'rock' && computerChoice === 'scissors') {
            humanScore += 1;
            console.log(`“You win! ${capitalizeInitial(humanChoice)} beats ${capitalizeInitial(computerChoice)}.`);
        }
        else if (humanChoice === 'paper' && computerChoice === 'rock') {
            humanScore += 1;
            console.log(`“You win! ${capitalizeInitial(humanChoice)} beats ${capitalizeInitial(computerChoice)}.`);
        }    
    }

    const buttonRock = document.createElement('button');
    const buttonPaper = document.createElement('button');
    const buttonScissors = document.createElement('button');

    buttonRock.textContent = 'rock';
    buttonPaper.textContent = 'paper';
    buttonScissors.textContent = 'scissors';


    buttonRock.addEventListener('click', ()=>{
        const compChoice = getComputerChoice();
        playRound('rock', compChoice);
    });

    buttonPaper.addEventListener('click', ()=>{
        const compChoice = getComputerChoice();
        playRound('paper', compChoice);
    });

    buttonScissors.addEventListener('click', ()=>{
        const compChoice = getComputerChoice();
        playRound('scissors', compChoice);
    });

    // creating div and adding the buttons to it
    const div = document.createElement('div');
    div.appendChild(buttonRock);
    div.appendChild(buttonPaper);
    div.appendChild(buttonScissors);

    // create a method to display the score
    div.addEventListener('click', (e)=>{
        let p = document.createElement('p');
        p.textContent = `The score is you:${humanScore}, computer:${computerScore}`;
        div.appendChild(p);
        if (humanScore ==5) {
            alert('You won');
            humanScore = 0;
            computerScore = 0;
        }
        if (computerScore == 5) {
            alert('computer won');
            humanScore = 0;
            computerScore = 0;
        }
    })
    const body = document.querySelector('body');
    body.appendChild(div);

}

playGame();