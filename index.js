const playerSelection = prompt("Rock, paper, or scissors? ")

const computerPlay = () => {
  const arr = ["rock", "paper", "scissors"]
  return arr[Math.floor(Math.random() * 3)]
}