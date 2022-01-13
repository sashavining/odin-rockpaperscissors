var computerChoices = [
    "rock",
    "paper",
    "scissors"
];

function playSingleRound () {
    let computerPlay = computerChoices[Math.floor(Math.random()*computerChoices.length)]
    let userPlay = prompt("What is your selection: rock, paper, or scissors?", "")
    userPlay.toLowerCase();

    if (userPlay === "rock") {
        if (computerPlay === "rock") {
            alert("Computer played rock. Tie game!");
            return(0);
        } else if (computerPlay === "paper") {
            alert("Computer played paper. Computer wins!"); 
            return(-1);
         } else if (computerPlay === "scissors") {
            alert ("Computer played scissors. You win! Congratulations!")
            return (1);
         } else {
            alert ("Uh oh! Something has gone horribly wrong!")
            return(0);
        }
    } else if (userPlay === "paper") {
         if (computerPlay === "rock") {
            alert("Computer played rock. You win! Congratulations");
            return (1);
         } else if (computerPlay === "paper") {
             alert("Computer played paper. Tie game!"); 
             return(0);
         } else if (computerPlay === "scissors") {
             alert ("Computer played scissors. Computer wins!")
             return(-1);
        } else {
             alert ("Uh oh! Something has gone horribly wrong!");}
             return(0);

  } else if (userPlay === "scissors") {
        if (computerPlay === "rock") {
            alert("Computer played rock. Computer wins!");
            return(-1);
        } else if (computerPlay === "paper") {
            alert("Computer played paper. You win! Congratulations!");
            return (1);
        } else if (computerPlay === "scissors") {
            alert ("Computer played scissors. Tie game.");
            return(0);
        } else {
            alert ("Uh oh! Something has gone horribly wrong!")
            return(0);
        } 
  } else { 
      alert ("Uh oh! Something has gone wrong.");
      return(0);
  }}

  function game () {
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

  }
  
game();