// Selecting elements
const startGameButton = document.getElementById('startGameButton');
const homeButton = document.getElementById('homeButton');
const homePage = document.getElementById('homePage');
const gamePage = document.getElementById('gamePage');
const userScoreSpan = document.getElementById('user-score');
const computerScoreSpan = document.getElementById('computer-score');
const resultParagraph = document.getElementById('result');
const choices = document.querySelectorAll('.choice');

let userScore = 0;
let computerScore = 0;

function startGame() {
    userScore = 0;
    computerScore = 0;
    userScoreSpan.textContent = userScore;
    computerScoreSpan.textContent = computerScore;
    resultParagraph.textContent = "Make your move!";
    homePage.style.display = "none";
    gamePage.style.display = "block";
}

function goHome() {
    homePage.style.display = "block";
    gamePage.style.display = "none";
}

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function getResult(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "draw";
    }
    if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        return "win";
    }
    return "lose";
}

function showResult(result, userChoice, computerChoice) {
    if (result === "win") {
        userScore++;
        userScoreSpan.textContent = userScore;
        resultParagraph.textContent = `You win! ${userChoice} beats ${computerChoice}`;
    } else if (result === "lose") {
        computerScore++;
        computerScoreSpan.textContent = computerScore;
        resultParagraph.textContent = `You lose! ${computerChoice} beats ${userChoice}`;
    } else {
        resultParagraph.textContent = `It's a draw! You both chose ${userChoice}`;
    }
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    const result = getResult(userChoice, computerChoice);
    showResult(result, userChoice, computerChoice);
}

// Event Listeners
startGameButton.addEventListener('click', startGame);
homeButton.addEventListener('click', goHome);
choices.forEach(choice => choice.addEventListener('click', function() {
    game(this.id);
}));
