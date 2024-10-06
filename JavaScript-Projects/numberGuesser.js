let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
    return Math.floor(Math.random() * 9) + 1;
}

const compareGuesses = (userGuess, compGuess, target) => {
    if (Math.abs(target - userGuess) < Math.abs(target - compGuess)) {
        return true;
    }
    else {
        return false;
    }
}

const updateScore = winner => {
    if (winner === 'human') {
        humanScore++;
    }
    else if (winner === 'computer') {
        computerScore++;
    }
    else {
        return 0;
    }
}

const advanceRound = () => {
    currentRoundNumber++;
}

let target = generateTarget();
if (compareGuesses(3, 1, target)) {
    updateScore('human');
}
else {
    updateScore('computer');
}
advanceRound();

console.log(`The Target was ${target}... ${humanScore}pts to human ${computerScore}pts to computer... Round number ${currentRoundNumber}`);