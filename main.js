// ROCK PAPER SCISSORS GAME

// USERCHOICE - FUNCTION 1
const getUserChoice = (userInput) => {
  // LOWER CASE FUNCTION
  userInput = userInput.toLowerCase();

  // USER CHOICE VALIDATION
  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors" ||
    userInput === "bomb"
  ) {
    return userInput;
  } else {
    console.log("Error. Try using rock, paper or scissors");
  }
};

// TEST 1 - USER VALIDATION

// VALID INPUT ROCK
// console.log(getUserChoice("rock"));
// VALID INPUT PAPER
// console.log(getUserChoice("paper"));
// VALID INPUT SCISSORS
// console.log(getUserChoice("scissors"));
// VALID INPUT BOMB (CHEAT CODE)
// console.log(getUserChoice("bomb"));
// INVALID INPUT APPLE
// console.log(getUserChoice("apple"));

// COMPUTER CHOICE - FUNCTION 2
const getComputerChoice = () => {
  // INTEGER BETWEEN 0 AND 2 (I.E. 3 CHOICES: ROCK, PAPER OR SCISSORS)
  let randomChoice = Math.floor(Math.random() * 3);

  // SWITCH CASE - ASSIGN INTEGERS BETWEEN 0 AND 2 TO VALID CHOICES
  switch (randomChoice) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
};

// TEST 2 - COMPUTER CHOICES (EXECUTE MULTIPLE TIMES TO VALIDATE)
// console.log(getComputerChoice());

// FUNCTION 3 - DETERMINE WINNER
const determineWinner = (userChoice, computerChoice) => {
  // CHEAT CONDITION
  if (userChoice === "bomb") {
    return "User wins!";
  }

  // TIE CONDITION
  if (userChoice === computerChoice) {
    return "The game is tied!";
  }

  // GAME CONDITIONS
  if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "Computer wins!";
    } else {
      return "User wins!";
    }
  }

  if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      return "Computer wins!";
    } else {
      return "User wins!";
    }
  }

  if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      return "Computer wins!";
    } else {
      return "User wins!";
    }
  }
};

// TEST 3 - DETERMINE WINNER

// CHEAT CODE VALIDATION
// console.log(determineWinner("bomb", "paper"));
// USER WINS
// console.log(determineWinner("scissors", "paper"));
// COMPUTER WINS
// console.log(determineWinner("rock", "paper"));
// TIE
// console.log(determineWinner("paper", "paper"));
