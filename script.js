
humanScore = 0;
computerScore = 0;

function getComputerChoice() {
    randomVal = Math.random() * 3;
    if(randomVal < 1) {
        return("rock");
    }
    else if(randomVal < 2) {
        return("paper");
    }
    else {
        return "scissors";
    }
}

function getHumanChoice() {
    let humanChoice = window.prompt("Enter your choice:");
    return humanChoice;
}

let humanChoice = getHumanChoice();
console.log("Human choice: " + humanChoice);

let computerChoice = getComputerChoice();
console.log("Computer choice: " + computerChoice);

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if(humanChoice==computerChoice) {
        console.log("It's a tie!");
    }

    if(humanChoice=="rock") {
        if(computerChoice=="paper") {
            computerScore += 1;
            console.log("You lose! Paper beats rock.");
        }
        else if(computerChoice=="scissors") {
            humanScore += 1;
            console.log("You win! Rock beats scissors");
        }
    }
    else if (humanChoice="paper") {
        if(computerChoice=="rock") {
            humanScore += 1;
            console.log("You win! Paper beats rock.");
        }
        else if(computerChoice=="scissors") {
            computerScore += 1;
            console.log("You lose! Scissors beats paper.");
        }
    }
    else if (humanChoice="scissors") {
        if(computerChoice=="rock") {
            computerScore += 1;
            console.log("You lose! Rock beats scissors.");
        }
        else if(computerChoice=="paper") {
            humanScore += 1;
            console.log("You win! Scissors beats paper.");
        }
    }
    else {
        console.log("Invalid choice.");
    }
    console.log("Current Score:\t H: " + humanScore + "\tC: " + computerScore);

}

playRound(humanChoice, computerChoice);