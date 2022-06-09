const buttons = document.querySelectorAll('button')
const resultStatement = document.querySelector('#result-statement')

Array.from(buttons).forEach((element) => {
  element.addEventListener('click', (e) => {
    console.log(playRound(e.target.value, computerPlay()))
  })
})

function computerPlay() {
  const arr = ["rock", "paper", "scissors"]
  return arr[Math.floor(Math.random() * 3)]
}

function game() {
  let playerPoints = 0;
  let computerPoints = 0;

  // for (let i = 0; i < 5; i++){
    const playerSelection = prompt("Rock, paper, or scissors? ").toLowerCase().trim()
    const computerSelection = computerPlay()
    const winner = playRound(playerSelection, computerSelection)
    // console.group(`Round ${i+1}`)
      if (winner === 0){
        return console.log("You clearly do not want to play")
      }
      if (winner !== "draw"){
        winner === "player" ? playerPoints+=1 : computerPoints+=1
      }
    // console.groupEnd()
  // }

  playerPoints === computerPoints ? console.log('stalemate') : playerPoints > computerPoints ? console.log("Winner winner, chicken dinner") : console.log("You got your ass kicked")
}

// game()

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
      return resultStatement.innerText = `You drew`;
      break;
    case 1:
      return resultStatement.innerText = `You lost, ${computerSelection} beats ${playerSelection}`;
      break;
    default:
      return resultStatement.innerText = `You won, ${playerSelection} beats ${computerSelection}`;
       
  }
}