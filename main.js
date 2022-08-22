// ROCK PAPER SCISSORS GAME

// USERCHOICE FUNCTION
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
