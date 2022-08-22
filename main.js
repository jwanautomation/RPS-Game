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
