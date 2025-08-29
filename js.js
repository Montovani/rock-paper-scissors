let playerScore = 0
let computerScore = 0
let btnChooseRock = document.querySelector(".btn-choose-rock")
const btnChoosePaper = document.querySelector(".btn-choose-paper")
const btnChooseScissors = document.querySelector(".btn-choose-scissors")
let computerChoice = 'Paper'
let userChoice = getUserChoice()

function getUserChoice () {
btnChooseRock.addEventListener('click', () => {userChoice = 'Rock'})
btnChoosePaper.addEventListener('click', ()=> {userChoice = 'Paper'})
btnChooseScissors.addEventListener('click', ()=> {userChoice = 'Scissors'})
}


