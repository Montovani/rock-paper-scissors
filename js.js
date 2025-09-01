let userChoice = ''
let computerChoice = ''
let userScore = 0
let computerScore = 0


const btnRock = document.querySelector('.btn-rock')
const btnPaper = document.querySelector('.btn-paper')
const btnScissors = document.querySelector('.btn-scissors')

//Event to get the user choice and trigger the computer choice
btnRock.addEventListener('click',getUserChoice)
btnRock.addEventListener('click',getComputerChoice)
btnRock.addEventListener('click',gameMatch)
btnPaper.addEventListener('click',getUserChoice)
btnPaper.addEventListener('click',getComputerChoice)
btnPaper.addEventListener('click',gameMatch)
btnScissors.addEventListener('click',getUserChoice)
btnScissors.addEventListener('click',getComputerChoice)
btnScissors.addEventListener('click',gameMatch)

function getUserChoice (event) {
    if (event.target.id === 'rock') {
        userChoice = 'Rock'
    } else if (event.target.id === 'paper') {
        userChoice = 'Paper'
    } else if (event.target.id === 'scissors') {
        userChoice = 'Scissors'
    }
    return console.log(userChoice)
}    
function getComputerChoice () {
    const computerOptions = ['Rock','Paper','Scissors']
    const randomChoice = Math.floor(Math.random() * computerOptions.length)
    return console.log(computerChoice = computerOptions[randomChoice])
}
function gameMatch() {
    if (userChoice === 'Rock' && computerChoice === 'Paper') {
        computerScore++
    }else if (userChoice === 'Rock' && computerChoice === 'Scissors') {
        userScore++
    } else if (userChoice === 'Paper' && computerChoice === 'Rock'){
        userScore++
    } else if (userChoice === 'Paper' && computerChoice === 'Scissors'){
        computerScore++
    } else if (userChoice === 'Scissors' && computerChoice === 'Paper'){
        userScore++
    } else if (userChoice === 'Scissors' && computerChoice === 'Rock'){
        computerScore++
    }
    console.log(`User Score: ${userScore}  - Computer Score: ${computerScore}`)
}
