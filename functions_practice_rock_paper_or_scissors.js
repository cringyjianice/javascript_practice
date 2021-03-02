let getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if(userInput === 'rock'|| userInput ==='paper'|| userInput === 'scissors'|| userInput === 'bomb') {
      return userInput;
      } else {
    console.log('Error!');
    }
  }
  
  let getComputerChoice = () => {
    let newNum = Math.floor(Math.random() * 2);
    switch (newNum) {
      case 0:
        return 'rock';
        break;
      case 1:
        return 'paper';
        break;
      case 2:
        return 'scissors';
        break;
    }
  }  
  
  console.log(getComputerChoice());
  
  let determineWinner = (userChoice,computerChoice) => { 
    if(userChoice === computerChoice) {
      return 'The game is a tie.';
    };
    if(userChoice === 'rock') {
      if(computerChoice === 'paper') {
        return 'PC wins over Human!';
      } else {
        return 'Human rules!';
      }
    }  
    if(userChoice === 'paper') {
      if(computerChoice === 'scissors') {
        return 'PC wins over Human!';
      } else {
        return 'Human rules!';
      }
    }  
    if(userChoice === 'scissors') {
      if(computerChoice === 'rock') {
        return 'PC wins over Human!';
      } else {
        return 'Human rules!';
      }
    } 
     if(userChoice === 'bomb') {
      return 'Human forever rules!';
    }  
  }
  
  let playGame = () => {
    var userChoice = getUserChoice('bomb');
    var computerChoice = getComputerChoice();
    console.log('You threw: ' + userChoice);
    console.log('PC threw: ' + computerChoice);
    console.log(determineWinner(userChoice,computerChoice));
  }
  playGame();
  
  
  
  
  
  
  
  