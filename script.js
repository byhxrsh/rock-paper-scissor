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

// initialize two variables for the purpose of keeping track of players score
let humanScore = 0;
let computerScore = 0;

const user = document.querySelector(`#userChoice`);
const btnRock = document.querySelector(`#btnRock`);
const btnPaper = document.querySelector(`#btnPaper`);
const btnScissor = document.querySelector(`#btnScissor`);
const addDiv = document.createElement(`div`);


btnRock.addEventListener(`click`, () => {
  let humanChoice = `rock`;
  const computerChoice = getComputerChoice();
  if (computerChoice === `rock`) {
    addDiv.textContent = `it's a tie. your score ${humanScore}, computer score ${computerScore}`;
    user.appendChild(addDiv);
  } else if (computerChoice === `paper`) {
    ++computerScore;
    addDiv.textContent = `you loose, ${computerChoice} beats ${humanChoice}. your score ${humanScore}, computer score ${computerScore}`;
    user.appendChild(addDiv);
  } else {
    ++humanScore;
    addDiv.textContent = `you won, ${humanChoice} beats ${computerChoice}. your score ${humanScore}, computer score ${computerScore}`;
    user.appendChild(addDiv);
  };

  if (computerScore === 5 || humanScore === 5) {
    if (computerScore === 5) {
      alert(`computer won, play again?`)
      addDiv.textContent = ``;
      humanScore = 0;
      computerScore = 0;
    } else if (humanScore === 5) {
      alert(`victory!! you won the game, wanna play again?`)
      addDiv.textContent = ``;
      humanScore = 0;
      computerScore = 0;
    };
  };
});

btnPaper.addEventListener(`click`, () => {
  let humanChoice = `paper`;
  const computerChoice = getComputerChoice();
  if (computerChoice === `rock`) {
    ++humanScore
    addDiv.textContent = `you won, ${humanChoice} beats ${computerChoice}. your score ${humanScore}, computer score ${computerScore}`;
    user.appendChild(addDiv);
  } else if (computerChoice === `paper`) {
    addDiv.textContent = `it's a tie. your score ${humanScore}, computer score ${computerScore}`;
    user.appendChild(addDiv);
  } else {
    ++computerScore;
    addDiv.textContent = `you loose, ${computerChoice} beats ${humanChoice}. your score ${humanScore}, computer score ${computerScore}`;
    user.appendChild(addDiv);
  };  

  if (computerScore === 5 || humanScore === 5) {
    if (computerScore === 5) {
      alert(`computer won, play again?`)
      addDiv.textContent = ``;
      humanScore = 0;
      computerScore = 0;
    } else if (humanScore === 5) {
      alert(`victory!! you won the game, wanna play again?`)
      addDiv.textContent = ``;
      humanScore = 0;
      computerScore = 0;
    };
  };
});

btnScissor.addEventListener(`click`, () => {
  let humanChoice = `scissor`;
  const computerChoice = getComputerChoice();
  if (computerChoice === `rock`) {
    ++computerScore
    addDiv.textContent = `you loose, ${computerChoice} beats ${humanChoice}. your score ${humanScore}, computer score ${computerScore}`;
    user.appendChild(addDiv);
  } else if (computerChoice === `paper`) {
    ++humanScore;
    addDiv.textContent = `you won, ${humanChoice} beats ${computerChoice}. your score ${humanScore}, computer score ${computerScore}`;
    user.appendChild(addDiv);
  } else {
    addDiv.textContent = `it's a tie. your score ${humanScore}, computer score ${computerScore}`;
    user.appendChild(addDiv);
  };  

  if (computerScore === 5 || humanScore === 5) {
    if (computerScore === 5) {
      alert(`computer won, play again?`)
      addDiv.textContent = ``;
      humanScore = 0;
      computerScore = 0;
    } else if (humanScore === 5) {
      alert(`victory!! you won the game, wanna play again?`)
      addDiv.textContent = ``;
      humanScore = 0;
      computerScore = 0;
    };
  };
});