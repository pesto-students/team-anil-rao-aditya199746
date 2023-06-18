function playGuessingGame(numToGuess, totalGuesses = 10) {
    let numGuesses = 0;
    
    while (numGuesses < totalGuesses) {
      let guess = prompt(getPromptText(numGuesses));
  
      if (guess === null) {
        return 0; // User pressed Cancel
      }
  
      if (isNaN(guess) || guess === "") {
        alert("Please enter a number.");
        // continue;
      }
  
      numGuesses++;
  
      if (Number(guess) < numToGuess) {
        alert(guess + " is too small. Guess a larger number.");
      } else if (Number(guess) > numToGuess) {
        alert(guess + " is too large. Guess a smaller number.");
      } else {
        return numGuesses; // User guessed correctly
      }
    }
  
    return 0; // User ran out of guesses
  }
  
  function getPromptText(numGuesses) {
    if (numGuesses === 0) {
      return "Enter a number between 1 and 100.";
    } else {
      return "Enter another number.";
    }
  }