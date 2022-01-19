var computerChoices = [
    "rock",
    "paper",
    "scissors"
];

let rock = document.getElementById("rock"); 
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");
let roundFlavorText = document.getElementById("roundFlavorText");
let computerScore = document.getElementById("computerScore").innerHTML;
let playerScore = document.getElementById("playerScore").innerHTML;
let computerScoreText = document.getElementById("computerScore");
let playerScoreText = document.getElementById("playerScore");




rock.addEventListener("click", function() {
    playSingleRound ("rock");

});

paper.addEventListener("click", function() {
    playSingleRound ("paper");

});

scissors.addEventListener("click", function() {
    playSingleRound ("scissors");

});


function playSingleRound (userPlay) {
    let computerPlay = computerChoices[Math.floor(Math.random()*computerChoices.length)]
    computerScore = parseInt (computerScore, 10);
    playerScore = parseInt (playerScore, 10);
    
    if (playerScore >=5) {
        alert("Congratulations! Player wins!");
        computerScore = 0;
        playerScore = 0;
        computerScoreText.textContent = 0;  
        playerScoreText.textContent = 0;
        return;   
 
    } else if (computerScore >=5) { 
        alert("Better luck next time! Computer wins!");   
        computerScore = 0;
        playerScore = 0;
        computerScoreText.textContent = 0;  
        playerScoreText.textContent = 0;  
        return; 
 
    }
    if (userPlay === "rock") {
        if (computerPlay === "rock") {
            roundFlavorText.textContent = "Computer played rock. Tie game!";


        } else if (computerPlay === "paper") {
            roundFlavorText.textContent = "Computer played paper. Computer wins!" 
            computerScore +=1;        
            computerScoreText.textContent = computerScore;

        } else if (computerPlay === "scissors") {
            roundFlavorText.textContent = "Computer played scissors. You win!"
            playerScore +=1;
            playerScoreText.textContent = playerScore;


       } else {
            roundFlavorText.textContent = "Uh oh! Something has gone horribly wrong!"
        }
    } else if (userPlay === "paper") {
         if (computerPlay === "rock") {
            roundFlavorText.textContent = "Computer played rock. You win! Congratulations";
            playerScore +=1; 
            playerScoreText.textContent = playerScore;


        } else if (computerPlay === "paper") {
             roundFlavorText.textContent = "Computer played paper. Tie game!"; 

        } else if (computerPlay === "scissors") {
             roundFlavorText.textContent = "Computer played scissors. Computer wins!"
             computerScore +=1;    
             computerScoreText.textContent = computerScore; 

        } else {
             roundFlavorText.textContent = "Uh oh! Something has gone horribly wrong!";}

  } else if (userPlay === "scissors") {
        if (computerPlay === "rock") {
            roundFlavorText.textContent = "Computer played rock. Computer wins!";
            computerScore +=1;  
            computerScoreText.textContent = computerScore;


        } else if (computerPlay === "paper") {
            roundFlavorText.textContent ="Computer played paper. You win! Congratulations!";
            playerScore +=1;  
            playerScoreText.textContent = playerScore;

        } else if (computerPlay === "scissors") {
            roundFlavorText.textContent = "Computer played scissors. Tie game.";
            
        } else {
            roundFlavorText.textContent = "Uh oh! Something has gone horribly wrong!";
            
        } 
  } else { 
      roundFlavorText.textContent = "Uh oh! Something has gone wrong.";
     
  }}


  /* function game () {
   let firstRoundResult = playSingleRound ();
   if (firstRoundResult === 0) {
        alert("You're tied with the computer so far!")
   } else if (firstRoundResult < 0) {
       alert ("The computer has the lead! It is ahead by one game.")
   } else {
    alert ("You have the lead! You are ahead by one game.")
   }

   let secondRoundPlay = playSingleRound ();
   secondRoundResult = secondRoundPlay + firstRoundResult
   
   if (secondRoundResult === 0) {
        alert("You're tied with the computer so far!")
    } else if (secondRoundResult < 0) {
        let secondRoundResultAbsolute = Math.abs(secondRoundResult);
        alert (`The computer is ahead! It is beating you by ${secondRoundResultAbsolute} game(s)!`);
    } else if (secondRoundResult > 0) {
        alert (`You are ahead! You are beating the computer by ${secondRoundResult} game(s)!`)
    } else {
        alert ("Something went wrong!")
    }

    let thirdRoundPlay = playSingleRound ();
    let thirdRoundResult = thirdRoundPlay + secondRoundResult

    
    if (thirdRoundResult === 0 ) {
        alert("How did you tie after three games? Witchcraft!")
    } else if (thirdRoundResult < 0) {
        let thirdRoundResultAbsolute = Math.abs(thirdRoundResult);
        alert (`The computer is ahead! It is beating you by ${thirdRoundResultAbsolute} game(s)!`);
    } else if (thirdRoundResult > 0) {
        alert (`You are ahead! You are beating the computer by ${thirdRoundResult} game(s)!`)
    }

    let fourthRoundPlay =  playSingleRound ();
    let fourthRoundResult = fourthRoundPlay + thirdRoundResult

    
    if (fourthRoundResult === 0 ) {
        alert("Tied round! The next one is make or break!")
    } else if (fourthRoundResult < 0) {
        let fourthRoundResultAbsolute = Math.abs(fourthRoundResult);
        alert (`The computer is ahead. It is beating you by ${fourthRoundResultAbsolute} game(s)!`);
    } else if (fourthRoundResult > 0) {
        alert (`You are ahead! You are beating the computer by ${fourthRoundResult} game(s)!`)
    }

    let fifthRoundPlay = playSingleRound ();
    let fifthRoundResult = fifthRoundPlay + fourthRoundResult


    if (fifthRoundResult === 0 ) {
        alert("Tied game! How did you manage that?")
    } else if (fifthRoundResult < 0) {
        let fifthRoundResultAbsolute = Math.abs(fifthRoundResult);
        alert (`The computer wins! It beat you by ${fifthRoundResultAbsolute} game(s)!`);
    } else if (fourthRoundResult > 0) {
        alert (`Congratulations, you won! You beat the computer by ${fifthRoundResult} game(s)!`)
    }

};

*/
