(function(){
let userChoice = ''
let computerChoice = ''
let userScore = 0
let computerScore = 0


const btnRock = document.querySelector('.btn-rock')
const btnPaper = document.querySelector('.btn-paper')
const btnScissors = document.querySelector('.btn-scissors')
const btnRestartGame = document.querySelector('.restart-game-btn')

//Events to get the user choice, trigger the computer choice, run the match and restart the game
btnRock.addEventListener('click',getUserChoice)
btnRock.addEventListener('click',getComputerChoice)
btnRock.addEventListener('click',gameMatch)
btnRock.addEventListener('click',gameScore)
btnPaper.addEventListener('click',getUserChoice)
btnPaper.addEventListener('click',getComputerChoice)
btnPaper.addEventListener('click',gameMatch)
btnPaper.addEventListener('click',gameScore)
btnScissors.addEventListener('click',getUserChoice)
btnScissors.addEventListener('click',getComputerChoice)
btnScissors.addEventListener('click',gameMatch)
btnScissors.addEventListener('click',gameScore)
btnRestartGame.addEventListener('click',restartGame)

//functions

function getUserChoice (event) {
    if (event.target.id === 'rock') {
        userChoice = 'Rock'
        document.querySelector('.user-option').innerHTML = userChoice
    } else if (event.target.id === 'paper') {
        userChoice = 'Paper'
        document.querySelector('.user-option').innerHTML = userChoice
    } else if (event.target.id === 'scissors') {
        userChoice = 'Scissors'
        document.querySelector('.user-option').innerHTML = userChoice
    }
    return console.log(userChoice)
}    
function getComputerChoice () {
    const computerOptions = ['Rock','Paper','Scissors']
    const randomChoice = Math.floor(Math.random() * computerOptions.length)
    computerChoice = computerOptions[randomChoice]
    document.querySelector('.computer-option').innerHTML = computerChoice
}

function gameMatch () {
    if (userChoice === 'Rock' && computerChoice === 'Paper') {
        computerScore++
        document.querySelector('.winner-of-match').innerHTML = 'Computer won the match'
    }else if (userChoice === 'Rock' && computerChoice === 'Scissors') {
        userScore++
        document.querySelector('.winner-of-match').innerHTML = 'You won the match'
    } else if (userChoice === 'Rock' && computerChoice === 'Rock'){
        document.querySelector('.winner-of-match').innerHTML = "It's a draw"
    } else if (userChoice === 'Paper' && computerChoice === 'Rock'){
        userScore++
        document.querySelector('.winner-of-match').innerHTML = 'You won the match'
    } else if (userChoice === 'Paper' && computerChoice === 'Scissors'){
        computerScore++
        document.querySelector('.winner-of-match').innerHTML = 'Computer won the match'
    } else if (userChoice === 'Paper' && computerChoice === 'Paper'){
        document.querySelector('.winner-of-match').innerHTML = "It's a draw"
    } else if (userChoice === 'Scissors' && computerChoice === 'Paper'){
        userScore++
        document.querySelector('.winner-of-match').innerHTML = 'You won the match'
    } else if (userChoice === 'Scissors' && computerChoice === 'Rock'){
        computerScore++
        document.querySelector('.winner-of-match').innerHTML = 'Computer won the match'
    } else if (userChoice === 'Scissors' && computerChoice === 'Scissors'){
        document.querySelector('.winner-of-match').innerHTML = "It's a draw"
    }
    document.querySelector('.player-number').innerHTML = userScore
    document.querySelector('.computer-number').innerHTML = computerScore
    console.log(`User Score: ${userScore}  - Computer Score: ${computerScore}`)
}
function gameScore (){
    if (userScore === 5) {
        alert('You won the game')
        btnRock.removeEventListener('click',getUserChoice)
        btnRock.removeEventListener('click',getComputerChoice)
        btnRock.removeEventListener('click',gameMatch)
        btnRock.removeEventListener('click',gameScore)
        btnPaper.removeEventListener('click',getUserChoice)
        btnPaper.removeEventListener('click',getComputerChoice)
        btnPaper.removeEventListener('click',gameMatch)
        btnPaper.removeEventListener('click',gameScore)
        btnScissors.removeEventListener('click',getUserChoice)
        btnScissors.removeEventListener('click',getComputerChoice)
        btnScissors.removeEventListener('click',gameMatch)
        btnScissors.removeEventListener('click',gameScore)
    } else if (computerScore === 5){
        alert('Computer won the game')
        btnRock.removeEventListener('click',getUserChoice)
        btnRock.removeEventListener('click',getComputerChoice)
        btnRock.removeEventListener('click',gameMatch)
        btnRock.removeEventListener('click',gameScore)
        btnPaper.removeEventListener('click',getUserChoice)
        btnPaper.removeEventListener('click',getComputerChoice)
        btnPaper.removeEventListener('click',gameMatch)
        btnPaper.removeEventListener('click',gameScore)
        btnScissors.removeEventListener('click',getUserChoice)
        btnScissors.removeEventListener('click',getComputerChoice)
        btnScissors.removeEventListener('click',gameMatch)
        btnScissors.removeEventListener('click',gameScore)
    }
}
function restartGame () {
    userScore = 0
    document.querySelector('.player-number').innerHTML = userScore
    document.querySelector('.user-option').innerHTML = ''
    computerScore = 0
    document.querySelector('.computer-number').innerHTML = computerScore
    document.querySelector('.computer-option').innerHTML = ''
    btnRock.addEventListener('click',getUserChoice)
    btnRock.addEventListener('click',getComputerChoice)
    btnRock.addEventListener('click',gameMatch)
    btnRock.addEventListener('click',gameScore)
    btnPaper.addEventListener('click',getUserChoice)
    btnPaper.addEventListener('click',getComputerChoice)
    btnPaper.addEventListener('click',gameMatch)
    btnPaper.addEventListener('click',gameScore)
    btnScissors.addEventListener('click',getUserChoice)
    btnScissors.addEventListener('click',getComputerChoice)
    btnScissors.addEventListener('click',gameMatch)
    btnScissors.addEventListener('click',gameScore)
    btnRestartGame.addEventListener('click',restartGame)
}

window.addEventListener ('unload' , ()=> {
        btnRock.removeEventListener('click',getUserChoice)
        btnRock.removeEventListener('click',getComputerChoice)
        btnRock.removeEventListener('click',gameMatch)
        btnRock.removeEventListener('click',gameScore)
        btnPaper.removeEventListener('click',getUserChoice)
        btnPaper.removeEventListener('click',getComputerChoice)
        btnPaper.removeEventListener('click',gameMatch)
        btnPaper.removeEventListener('click',gameScore)
        btnScissors.removeEventListener('click',getUserChoice)
        btnScissors.removeEventListener('click',getComputerChoice)
        btnScissors.removeEventListener('click',gameMatch)
        btnScissors.removeEventListener('click',gameScore)
        btnRestartGame.removeEventListener('click',restartGame)
        console.log('[unload] listeners removed')
})

})();
