function computerPlay() {

    let playOptions = ["rock", "paper", "scissors"];

    let computerValue = Math.floor(Math.random() * 3);
    return playOptions[computerValue];
}

function playRound(playerSelection, computerSelection) {

    let playerChoiceLower = playerSelection.toLowerCase();
    let computerChoiceLower = computerSelection.toLowerCase();

    if (playerChoiceLower === "scissor" && computerChoiceLower === "paper") {
        return "You win! Scissor cuts paper";
    } else if (playerChoiceLower === "paper" && computerChoiceLower === "scissor") {
        return "You lose! Scissor cuts paper";
    } else if (playerChoiceLower === "paper" && computerChoiceLower === "rock") {
        return "You win! Paper beats Rock";
    } else if (playerChoiceLower === "rock" && computerChoiceLower === "paper") {
        return "You lose! Paper beats Rock";
    } else if (playerChoiceLower === "rock" && computerChoiceLower === "scissors") {
        return "You win! Rock crushes Scissors";
    } else if (playerChoiceLower === "scissors" && computerChoiceLower === "rock") {
        return "You lose! Rock crushes Scissors";
    } else {
        return "Let's try again guys :)";
    }
}

function game() {
    let playerScoreCount = 0, computerScoreCount = 0;

    for (i = 0; i < 5;){
        let playerSelection = prompt("Enter your selection here: ");
        let roundResults = playRound(playerSelection, computerPlay());
        console.log(roundResults);

        if (roundResults.includes("You win")) {
            playerScoreCount += 1;
            i++;
        } else if (roundResults.includes("You lose")) {
            computerScoreCount += 1;
            i++;
        } else {
            i++;
        }
    }

    if(computerScoreCount === playerScoreCount) {
        console.log(`Computer: ${computerScoreCount}\nPlayer: ${playerScoreCount}\nIts a tie!`)
    }if (playerScoreCount > computerScoreCount) {
        console.log(`Player: ${playerScoreCount}\nComputer: ${computerScoreCount}\nYou win!`)
    }else {
        console.log(`Computer: ${computerScoreCount}\nPlayer: ${playerScoreCount}\nYou lose!`)
    }
}

game();