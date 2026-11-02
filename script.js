
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

console.log(getComputerChoice());