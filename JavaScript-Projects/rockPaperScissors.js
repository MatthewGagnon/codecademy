const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();

    if (userInput === 'rock') {
        return userInput;
    } else if (userInput === 'paper') {
        return userInput;
    } else if (userInput === 'scissors') {
        return userInput;
    } else {
        console.log("You did not enter a valid option.");
    }
}

const getComputerChoice = () => {
    let choice = Math.floor(Math.random() * 3);

    if (choice === 0) {
        return 'rock';
    } else if (choice === 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
        return 'Tie Game';
    }

    if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            return 'Computer wins! Paper beats rock!';
        } else {
            return 'User wins! Rock beats scissors!';
        }
    }

    if (userChoice === 'paper') {
        if (computerChoice === 'rock') {
            return 'User wins! Paper beats rock!';
        } else {
            return 'Computer wins! Scissors beats paper!';
        }
    }

    if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
            return 'Computer wins! Rock beats scissors!';
        } else {
            return 'User wins! Scissors beats paper!';
        }
    }
}

const playGame = () => {
    let userChoice = getUserChoice('rock');
    let computerChoice = getComputerChoice();

    console.log(`${userChoice} versus ${computerChoice}`);

    console.log(determineWinner(userChoice, computerChoice));
}

playGame();