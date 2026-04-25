// ask user for the input/choice. 
// check if the choice is valid. input must be from these three strings `rock`, `paper`, or `scissor`
// if input is other than these three stings return `invalid choice`-- for now we are skipping this and assuming user will select from only valid choices
// a function that randomly returns strings- `rock`, `paper`, or `scissor`
// keep track of players score.
// now compare random strings to user's choice-
//   ~ if both random string and user's choice are same then return `Match draw`
//   ~ if random string is `rock` and user's choice is `paper` return `you loose! try again?`
//   ~ if random string is `paper` and user's choice is `rock` return `woo-hoo, you won!`
//   ~ if random string is `rock` and user's choice is `scissor` return `you loose! try again?`   
//   ~ if random string is `scissor` and user's choice is `rock` return `woo-hoo, you won!`   
//   ~ if random string is `paper` and user's choice is `scissor` return `woo-hoo, you won!`   
//   ~ if random string is `scissor` and user's choice is `paper` return `you loose! try again?`   

let getComputerChoice = function() {
  if (Math.random() < 1/3) {
    return `paper`
  } else if (Math.random() > 0.32 && Math.random() < 0.64) {
    return `rock`
  } else {
    return `scissor`
  }
};

let getUserInput = function() {
  let userChoice = prompt(`what's your choice?`, ``)
  return userChoice
};

// initialize two variables for the purpose of keeping track of players score
let humanScore = 0;
let computerScore = 0;

function playGame() {
  function playRound(humanChoice, computerChoice) {
    const normalizedHumanChoice = humanChoice().toLowerCase();
    
    if (normalizedHumanChoice === computerChoice()) {
      console.log(`Draw! let's play again.`);
    } else if (normalizedHumanChoice === `rock` && computerChoice() === `scissor`) {
      ++humanScore;
      console.log(`you won! rock beats scissor. you won ${humanScore}/5 rounds.`);
    } else if (normalizedHumanChoice === `rock` && computerChoice() === `paper`) {
      ++computerScore;
      console.log(`you lose! paper beats rock. you won ${humanScore}/5 rounds.`);
    } else if (normalizedHumanChoice === `paper` && computerChoice() === `rock`) {
      ++humanScore;
      console.log(`you won! paper beats rock. you won ${humanScore}/5 rounds.`);
    } else if (normalizedHumanChoice === `paper` && computerChoice() === `scissor`) {
      ++computerScore;
      console.log(`you lose! scissor beats paper. you won ${humanScore}/5 rounds.`);
    } else if (normalizedHumanChoice === `scissor` && computerChoice() === `rock`) {
      ++computerScore
      console.log(`you lose! rock beats scissor. you won ${humanScore}/5 rounds.`);
    } else {
      ++humanScore
      console.log(`you won! scissor beats paper. you won ${humanScore}/5 rounds.`)
    }
  }

  playRound(getUserInput, getComputerChoice);
  playRound(getUserInput, getComputerChoice);
  playRound(getUserInput, getComputerChoice);
  playRound(getUserInput, getComputerChoice);
  playRound(getUserInput, getComputerChoice);
  
  if (humanScore > computerScore) {
    console.log(`yup! FINAL SCORE ~ you won ${humanScore} out of 5 rounds.`)
  } else {
    console.log(`better luck next time, FINAL SCORE ~ you won ${humanScore}/5 rounds.`)
  }
}

playGame();