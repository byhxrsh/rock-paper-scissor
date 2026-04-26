let getComputerChoice = function() {
  let randomInt = Math.floor(Math.random() * 3);

  if (randomInt === 0) {
    return `paper`
  } else if (randomInt === 1) {
    return `rock`
  } else {
    return `scissor`
  }
};

let getUserInput = function() {
  let userChoice = prompt(`what's your choice?`, ``);
  return userChoice
};

// initialize two variables for the purpose of keeping track of players score
let humanScore = 0;
let computerScore = 0;

function playGame() {
  function playRound(humanChoice, computerChoice) {
    const normalizedHumanChoice = humanChoice.toLowerCase();
    const varComputerChoice = computerChoice;
    
    if (normalizedHumanChoice === varComputerChoice) {
      console.log(`Draw! let's play again.`);
    } else if (normalizedHumanChoice === `rock` && varComputerChoice === `scissor`) {
      ++humanScore;
      console.log(`you won! rock beats scissor. you won ${humanScore}/5 rounds.`);
    } else if (normalizedHumanChoice === `rock` && varComputerChoice === `paper`) {
      ++computerScore;
      console.log(`you lose! paper beats rock. you won ${humanScore}/5 rounds.`);
    } else if (normalizedHumanChoice === `paper` && varComputerChoice === `rock`) {
      ++humanScore;
      console.log(`you won! paper beats rock. you won ${humanScore}/5 rounds.`);
    } else if (normalizedHumanChoice === `paper` && varComputerChoice === `scissor`) {
      ++computerScore;
      console.log(`you lose! scissor beats paper. you won ${humanScore}/5 rounds.`);
    } else if (normalizedHumanChoice === `scissor` && varComputerChoice === `rock`) {
      ++computerScore;
      console.log(`you lose! rock beats scissor. you won ${humanScore}/5 rounds.`);
    } else {
      ++humanScore;
      console.log(`you won! scissor beats paper. you won ${humanScore}/5 rounds.`);
    }
  }

  playRound(getUserInput(), getComputerChoice());
  playRound(getUserInput(), getComputerChoice());
  playRound(getUserInput(), getComputerChoice());
  playRound(getUserInput(), getComputerChoice());
  playRound(getUserInput(), getComputerChoice());
  
  if (humanScore > computerScore) {
    console.log(`yup! FINAL SCORE ~ you won ${humanScore} out of 5 rounds.`);
  } else {
    console.log(`better luck next time, FINAL SCORE ~ you won ${humanScore}/5 rounds.`);
  }
}

playGame();