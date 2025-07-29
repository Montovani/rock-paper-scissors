let computerScore = 0;
let playerScore = 0;

while (playerScore < 5 && computerScore < 5) {

    let playerMove = getUserInput();
    let computerMove = computerChoice();
    let matchResult = gameMatch(playerMove,computerMove);
    console.log(`Player: ${playerMove} | Computer: ${computerMove} | The match result: ${matchResult}`);

    if (matchResult == 'Player wins!') {
        playerScore++;
    } else if (matchResult == 'Computer wins!') {
        computerScore++;
    }
    console.log(`Player Score: ${playerScore} | Computer Score: ${computerScore}`);
}
console.log(playerScore === 5 ? 'Player won the game!' : 'Computer won the game!');

function getUserInput(userDecision) {
    userDecision = prompt("Rock, Paper or Scissors?")
    return userDecision; 
}
function computerChoice(computerChoice) {
    const options = ['rock','paper','scissors'];
    let randomOption = Math.floor(Math.random() *3);
    computerChoice = options[randomOption];
    return computerChoice;
    
}

function gameMatch(playerMove,computerMove) {
    if (playerMove == 'rock' && computerMove == 'paper') {
        return 'Computer wins!'
    } else if (playerMove == 'rock' && computerMove == 'scissors') {
        return 'Player wins!'
    } else if (playerMove == 'rock' && computerMove == 'rock') {
        return 'Match draw!'
    }
    if (playerMove == 'paper' && computerMove == 'paper') {
        return 'Match draw!'
    } else if (playerMove == 'paper' && computerMove == 'scissors') {
        return 'Computer wins!'
    } else if (playerMove == 'paper' && computerMove == 'rock') {
        return 'Player wins!'
    }
    if (playerMove == 'scissors' && computerMove == 'paper') {
        return 'Player wins!'
    } else if (playerMove == 'scissors' && computerMove == 'scissors') {
        return 'Match draw!'
    } else if (playerMove == 'scissors' && computerMove == 'rock') {
        return'Computer wins!'
    }
    
}

