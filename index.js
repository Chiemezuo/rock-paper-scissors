const buttons = document.querySelectorAll('button')
const reset = document.querySelector('#reset')
const resultStatement = document.querySelector('#result-statement')
const buttonArr = Array.from(buttons)
let playerPoints = 1;
let computerPoints = 1;

reset.onclick = function(e) {
  playerPoints = 1;
  computerPoints = 1;
}

buttonArr.forEach((element) => {
  element.addEventListener('click', (e) => {
    if (playerPoints >= 5 || computerPoints >= 5)
      resultStatement.innerText = `Round winner: ${playerPoints > computerPoints ? `You` : `AI`}`
    else {
      startGame(e)
    }
  })
})

function computerPlay() {
  const arr = ["rock", "paper", "scissors"]
  return arr[Math.floor(Math.random() * 3)]
}

function startGame(e) {
  const winner = playRound(e.target.value, computerPlay())

  if (winner !== 'draw') winner === 'player' ? ++playerPoints : ++computerPoints

}

function playRound(playerSelection, computerSelection) {
  switch (playerSelection){
    case "rock":
      return checker(playerSelection, computerSelection, ["rock","paper","scissors"]);
      break;
    case "paper":
      return checker(playerSelection, computerSelection, ["paper","scissors","rock"])
      break;
    case "scissors":
      return checker(playerSelection, computerSelection, ["scissors","rock","paper"])
      break;
    default:
      return 0
  }
}

function checker(playerSelection, computerSelection, arr) {
  switch (arr.indexOf(computerSelection)) {
    case 0:
      resultStatement.innerText = `You drew`
      return `draw`;
      break;
    case 1:
      resultStatement.innerText = `You lost, ${computerSelection} beats ${playerSelection}`
      return `computer`;
      break;
    default:
      resultStatement.innerText = `You won, ${playerSelection} beats ${computerSelection}`
      return `player`;
       
  }
}