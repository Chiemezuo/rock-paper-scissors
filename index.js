const playerSelection = prompt("Rock, paper, or scissors? ").toLowerCase()

const computerPlay = () => {
  const arr = ["rock", "paper", "scissors"]
  return arr[Math.floor(Math.random() * 3)]
} 

console.log(playRound(playerSelection, computerPlay()))

function playRound(playerSelection, computerPlay) {
  switch (playerSelection){
    case "rock":
      return checker(playerSelection, computerPlay, ["rock","paper","scissors"]);
      break;
    case "paper":
      return checker(playerSelection, computerPlay, ["paper","scissors","rock"])
      break;
    case "scissors":
      return checker(playerSelection, computerPlay, ["scissors","rock","paper"])
      break;
    default:
      return "You clearly do not want to play"
  }
}

function checker(playerSelection, computerPlay, arr) {
  switch (arr.indexOf(computerPlay)) {
    case 0:
      return `You drew`;
      break;
    case 1:
      return `You lost, ${playerSelection} loses to ${computerPlay}`;
      break;
    default:
      return `You won, ${playerSelection} wins ${computerPlay}`
  }
}