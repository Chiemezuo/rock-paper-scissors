const playerSelection = prompt("Rock, paper, or scissors? ").toLowerCase()

const computerPlay = () => {
  const arr = ["rock", "paper", "scissors"]
  return arr[Math.floor(Math.random() * 3)]
}

const computerSelection = computerPlay()

console.log(playRound(playerSelection, computerSelection))

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
      return "You clearly do not want to play"
  }
}

function checker(playerSelection, computerSelection, arr) {
  switch (arr.indexOf(computerSelection)) {
    case 0:
      return `You drew`;
      break;
    case 1:
      return `You lose, ${computerSelection} beats ${playerSelection}`;
      break;
    default:
      return `You won, ${playerSelection} beats ${computerSelection}`
  }
}